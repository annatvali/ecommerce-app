import fetchMock from 'jest-fetch-mock';
import { login } from '../app/login/login';

fetchMock.enableMocks();

describe('login', () => {
  beforeEach(() => {
    (fetch as jest.Mock).mockClear();
    localStorage.clear();
    window.alert = jest.fn();
  });

  it('calls the correct url with the correct method and headers', async () => {
    fetchMock.mockResponseOnce(JSON.stringify({ access_token: 'test_token' }));

    await login('test@example.com', 'password');

    expect(fetch).toHaveBeenCalledWith(
      `${process.env.NEXT_PUBLIC_CTP_AUTH_URL}/oauth/${process.env.NEXT_PUBLIC_CTP_PROJECT_KEY}/customers/token`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization:
            'Basic ' +
            btoa(
              `${process.env.NEXT_PUBLIC_CTP_CLIENT_ID}:${process.env.NEXT_PUBLIC_CTP_CLIENT_SECRET}`,
            ),
        },
        body: new URLSearchParams({
          grant_type: 'password',
          username: 'test@example.com',
          password: 'password',
        }).toString(),
      },
    );
  });

  it('handles a successful response correctly', async () => {
    fetchMock.mockResponseOnce(JSON.stringify({ access_token: 'test_token' }));

    const token = await login('test@example.com', 'password');

    expect(token).toBe('test_token');
    expect(localStorage.getItem('access_token')).toBe('test_token');
  });

  it('throws an error when the response is not ok', async () => {
    fetchMock.mockResponseOnce('', { status: 401 });

    await expect(login(' ', 'password')).rejects.toThrow(
      'Invalid email or password!',
    );
  });
});
