const clientId = process.env.NEXT_PUBLIC_CTP_CLIENT_ID;
const clientSecret = process.env.NEXT_PUBLIC_CTP_CLIENT_SECRET;
const authUrl = process.env.NEXT_PUBLIC_CTP_AUTH_URL;
const url = `${authUrl}/oauth/introspect`;

export async function isAuth() {
  const token = localStorage.getItem('access_token');

  if (!token) {
    console.error('No access token found');
    return false;
  }

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: 'Basic ' + btoa(`${clientId}:${clientSecret}`),
      },
      body: new URLSearchParams({
        token: token,
      }).toString(),
    });

    if (!response.ok) {
      throw new Error('Failed to fetch token introspection');
    }

    const data = await response.json();
    console.log('Token active:', data.active);
    return data.active;
  } catch (error) {
    console.error('Error during token introspection:', error);
    return false;
  }
}
