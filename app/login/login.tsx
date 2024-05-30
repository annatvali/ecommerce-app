export async function login(email: string, password: string) {
  const projectKey = process.env.NEXT_PUBLIC_CTP_PROJECT_KEY;
  const clientId = process.env.NEXT_PUBLIC_CTP_CLIENT_ID;
  const clientSecret = process.env.NEXT_PUBLIC_CTP_CLIENT_SECRET;
  const authUrl = process.env.NEXT_PUBLIC_CTP_AUTH_URL;

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
