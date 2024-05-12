import fetch from 'node-fetch';
import {
  ClientBuilder,
  type AuthMiddlewareOptions,
  type HttpMiddlewareOptions,
} from '@commercetools/sdk-client-v2';

// Configure authMiddlewareOptions
const authMiddlewareOptions: AuthMiddlewareOptions = {
  host: 'https://auth.europe-west1.gcp.commercetools.com',
  projectKey: 'onlineshopproject1234',
  credentials: {
    clientId: 't4euZTdm0jIdAkN7mOgP5-iB',
    clientSecret: '7ryQg82Y1z3QSHRomQ9NeDV9y0_11-ax',
  },
  scopes: [
    'manage_my_payments:onlineshopproject1234 manage_my_shopping_lists:onlineshopproject1234 create_anonymous_token:onlineshopproject1234 manage_my_orders:onlineshopproject1234 view_categories:onlineshopproject1234 manage_my_quotes:onlineshopproject1234 manage_my_quote_requests:onlineshopproject1234 manage_my_profile:onlineshopproject1234 manage_my_business_units:onlineshopproject1234 view_published_products:onlineshopproject1234',
  ],
  fetch,
};

// Configure httpMiddlewareOptions
const httpMiddlewareOptions: HttpMiddlewareOptions = {
  host: 'https://api.europe-west1.gcp.commercetools.com',
  fetch,
};

// Export the ClientBuilder
export const ctpClient = new ClientBuilder()
  .withClientCredentialsFlow(authMiddlewareOptions)
  .withHttpMiddleware(httpMiddlewareOptions)
  .withLoggerMiddleware()
  .build();
