export const projectKey = process.env.NEXT_PUBLIC_CTP_PROJECT_KEY;
export const clientSecret = process.env.NEXT_PUBLIC_CTP_CLIENT_SECRET;
export const clientId = process.env.NEXT_PUBLIC_CTP_CLIENT_ID;
export const authUrl = process.env.NEXT_PUBLIC_CTP_AUTH_URL;
export const apiUrl = process.env.NEXT_PUBLIC_CTP_API_URL;
export const scopes = process.env.NEXT_PUBLIC_CTP_SCOPES;

export const authEndpoint = `${authUrl}/oauth/introspect`;
export const customersEndpoint = `/${projectKey}/customers`;
export const productsEndpoint = `/${projectKey}/products`;
export const ordersEndpoint = `/${projectKey}/orders`;
export const cartsEndpoint = `/${projectKey}/carts`;
