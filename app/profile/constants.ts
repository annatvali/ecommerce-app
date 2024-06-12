export const INITIAL_EDITING_STATE = {
  firstName: false,
  lastName: false,
  email: false,
  password: false,
  dateOfBirth: false,
};

export const INITIAL_LANGUAGE = 'EN';

export enum ProfileFields {
  FirstName = 'firstName',
  LastName = 'lastName',
  Email = 'email',
  Password = 'password',
  DateOfBirth = 'dateOfBirth',
}

export interface ProfileFieldProps {
  isLoading: boolean;
  isEditing: boolean;
  label: string;
  field: ProfileFields;
  value: string;
  handleInputChange: (
    field: ProfileFields,
  ) => (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleBlur: (
    field: ProfileFields,
  ) => (event: React.FocusEvent<HTMLInputElement>) => void;
  handleEditClick: (field: ProfileFields) => Promise<void>;
  handleUpdateClick: (field: ProfileFields) => Promise<void>;
}
