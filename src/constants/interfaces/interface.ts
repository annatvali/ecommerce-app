import { MethodType } from '../enums/enum';

export interface RegistrationData {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  street: string;
  city: string;
  postalCode: string;
  country: string;
}
export interface ClientRequest {
  uri: string;
  method: MethodType;
  body: string;
  headers: {
    'Content-Type': string;
  };
}
