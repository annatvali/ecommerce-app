import { client } from '@/app/lib/ClientBuilder';
import fetch from 'node-fetch';
// import { isAuth } from '@/app/lib/isAuth';
import { FormInputs } from '@/app/registration/constants';
import { v4 } from 'uuid';
import { customersEndpoint } from '../utils/constants';
import { apiUrl, projectKey } from '../utils/constants';

const generateId = () => {
  return v4();
};

export const createCustomer = async (data: FormInputs) => {
  const shippingAddressIds: number[] = [];
  const billingAddressIds: number[] = [];

  if (data.sameBillingShipping) {
    shippingAddressIds.push(0);
    billingAddressIds.push(0);
  } else if (data.differentShippingAddress) {
    shippingAddressIds.push(0);
  }

  const customerDraft = {
    email: data.email,
    password: data.password,
    firstName: data.firstName,
    lastName: data.lastName,
    dateOfBirth: data.dateOfBirth,
    address: {
      id: generateId(),
      //TODO: write address data instead of empty strings
      country: data.addresses[0].countryCode,
      city: data.addresses[0].city,
      postalCode: data.addresses[0].postalCode,
      streetName: data.addresses[0].streetName,
      streetNumber: data.addresses[0].streetNumber,
      firstName: data.firstName,
      lastName: data.lastName,
    },
    isEmailVerified: true,
    key: `${data.firstName.toLowerCase()}-${data.lastName.toLowerCase()}`,
    shippingAddressIds,
    billingAddressIds,
    stores: [],
  };

  try {
    const bodyRequest = JSON.stringify(customerDraft);
    const response = await client.execute({
      uri: customersEndpoint,
      method: 'POST',
      body: bodyRequest,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return response.body;
  } catch (error) {
    throw error;
  }
};

export const getCustomerData = async () => {
  const token = localStorage.getItem('access_token');
  const url = `${apiUrl}/${projectKey}/me`;

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch customer data!');
  }

  const data = await response.json();
  return data;
};
