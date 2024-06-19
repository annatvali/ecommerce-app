import {
  authUrl,
  clientId,
  clientSecret,
  projectKey,
} from '../utils/constants';

export async function login(email: string, password: string) {
  const url = `${authUrl}/oauth/${projectKey}/customers/token`;

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: 'Basic ' + btoa(`${clientId}:${clientSecret}`),
    },
    body: new URLSearchParams({
      grant_type: 'password',
      username: email,
      password: password,
    }).toString(),
  });

  if (!response.ok) {
    throw new Error('Invalid email or password!');
  }

  const data = await response.json();
  alert('Logged in successfully');
  console.log('token is', data.access_token);
  localStorage.setItem('access_token', data.access_token);
  return data.access_token;
}
