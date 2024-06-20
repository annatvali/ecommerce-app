import fetch from 'node-fetch';
import { ClientBuilder } from '@commercetools/sdk-client-v2';
import { createApiBuilderFromCtpClient } from '@commercetools/platform-sdk';

import {
  projectKey,
  clientId,
  clientSecret,
  authUrl,
  apiUrl,
} from '../utils/constants';

export const authMiddlewareOptions = {
  host: authUrl!,
  projectKey: projectKey!,
  credentials: {
    clientId: clientId!,
    clientSecret: clientSecret!,
  },
  scopes: [`manage_project:${projectKey!}`],
  fetch,
};

export const httpMiddlewareOptions = {
  host: apiUrl!,
  fetch,
};

export const client = new ClientBuilder()
  .withProjectKey(projectKey!)
  .withClientCredentialsFlow(authMiddlewareOptions)
  .withHttpMiddleware(httpMiddlewareOptions)
  .withLoggerMiddleware()
  .build();

export const getApiRoot = () => {
  return createApiBuilderFromCtpClient(client);
};
