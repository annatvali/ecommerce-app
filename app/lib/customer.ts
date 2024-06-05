import { client } from '@/app/lib/ClientBuilder';
import { FormInputs } from '@/app/registration/constants';
import { v4 } from 'uuid';

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
    const projectKey = process.env.NEXT_PUBLIC_CTP_PROJECT_KEY;
    const response = await client.execute({
      uri: `/${projectKey}/customers`,
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
