import fetch from 'node-fetch';
import {
  ClientBuilder,
  type AuthMiddlewareOptions,
  type HttpMiddlewareOptions,
} from '@commercetools/sdk-client-v2';
import dotenv from 'dotenv';

dotenv.config();

function getEnvVariable(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Environment variable ${name} is not set`);
  }
  return value;
}

// Configure authMiddlewareOptions
const authMiddlewareOptions: AuthMiddlewareOptions = {
  host: getEnvVariable('CTP_AUTH_URL'),
  projectKey: getEnvVariable('CTP_PROJECT_KEY'),
  credentials: {
    clientId: getEnvVariable('CTP_CLIENT_ID'),
    clientSecret: getEnvVariable('CTP_CLIENT_SECRET'),
  },
  scopes: [getEnvVariable('CTP_SCOPES')],
  fetch,
};

// Configure httpMiddlewareOptions
const httpMiddlewareOptions: HttpMiddlewareOptions = {
  host: getEnvVariable('CTP_API_URL'),
  fetch,
};

// Export the ClientBuilder
export const ctpClient = new ClientBuilder()
  .withClientCredentialsFlow(authMiddlewareOptions)
  .withHttpMiddleware(httpMiddlewareOptions)
  .withLoggerMiddleware()
  .build();
