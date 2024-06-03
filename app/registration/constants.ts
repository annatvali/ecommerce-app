export interface Addresses {
  id?: string;
  country?: string;
  countryCode?: string;
  city?: string;
  postalCode?: string;
  streetName?: string;
  streetNumber?: string;
  firstName?: string;
  lastName?: string;
}

export interface FormInputs {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  addresses: Addresses[];
  defaultAddress?: boolean;
  sameBillingShipping?: boolean;
  differentShippingAddress?: boolean;
}

export interface AddressProps {
  index: number;
  address: Addresses;
  handleAddressChange: (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>,
  ) => void;
  handleCountryChange: (index: number, value: string) => void;
  handleCityChange: (index: number, value: string) => void;
}

export const countries = [
  {
    countryCode: 'US',
    label: 'USA',
    cities: [
      { value: 'New York', label: 'New York' },
      { value: 'Los Angeles', label: 'Los Angeles' },
    ],
  },
  {
    countryCode: 'CA',
    label: 'Canada',
    cities: [
      { value: 'Toronto', label: 'Toronto' },
      { value: 'Vancouver', label: 'Vancouver' },
    ],
  },
  {
    countryCode: 'GE',
    label: 'Georgia',
    cities: [
      { value: 'Tbilisi', label: 'Tbilisi' },
      { value: 'Batumi', label: 'Batumi' },
    ],
  },
];

export const postalCodeFormats = {
  US: /^[0-9]{5}(?:-[0-9]{4})?$/,
  CA: /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/,
  GEO: /^[0-9]{4}$/,
};
