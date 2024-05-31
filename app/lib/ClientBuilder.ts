import fetch from 'node-fetch';
import { ClientBuilder } from '@commercetools/sdk-client-v2';
import { createApiBuilderFromCtpClient } from '@commercetools/platform-sdk';

export const projectKey = process.env.NEXT_PUBLIC_CTP_PROJECT_KEY;
export const clientId = process.env.NEXT_PUBLIC_CTP_CLIENT_ID;
export const clientSecret = process.env.NEXT_PUBLIC_CTP_CLIENT_SECRET;
export const authUrl = process.env.NEXT_PUBLIC_CTP_AUTH_URL;
export const apiUrl = process.env.NEXT_PUBLIC_CTP_API_URL;

if (!projectKey) {
  throw new Error('CTP_PROJECT_KEY is not defined');
}

if (!clientId) {
  throw new Error('CTP_CLIENT_ID is not defined');
}

if (!clientSecret) {
  throw new Error('CTP_CLIENT_SECRET is not defined');
}

if (!authUrl) {
  throw new Error('CTP_AUTH_URL is not defined');
}

if (!apiUrl) {
  throw new Error('CTP_API_URL is not defined');
}

const authMiddlewareOptions = {
  host: authUrl,
  projectKey,
  credentials: {
    clientId,
    clientSecret,
  },
  scopes: [`manage_project:${projectKey}`],
  fetch,
};

const httpMiddlewareOptions = {
  host: apiUrl,
  fetch,
};

const client = new ClientBuilder()
  .withProjectKey(projectKey)
  .withClientCredentialsFlow(authMiddlewareOptions)
  .withHttpMiddleware(httpMiddlewareOptions)
  .withLoggerMiddleware()
  .build();

export const getApiRoot = () => {
  return createApiBuilderFromCtpClient(client);
};
