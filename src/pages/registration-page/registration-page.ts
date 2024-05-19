const form = document.getElementById('registration-form') as HTMLFormElement;

interface RegistrationData {
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

form.addEventListener('submit', async event => {
  event.preventDefault();

  const formData = new FormData(form);

  const email = formData.get('email') as string;
  const password = formData.get('password') as string;
  const firstName = formData.get('firstName') as string;
  const lastName = formData.get('lastName') as string;
  const dateOfBirth = formData.get('dateOfBirth') as string;
  const street = formData.get('street') as string;
  const city = formData.get('city') as string;
  const postalCode = formData.get('postalCode') as string;
  const country = formData.get('country') as string;

  const isFormValid = validateForm({
    email,
    password,
    firstName,
    lastName,
    dateOfBirth,
    street,
    city,
    postalCode,
    country,
  });

  const submitButton = document.querySelector(
    '.registration-form__submit',
  ) as HTMLButtonElement;
  if (isFormValid) {
    submitButton?.classList.remove('disabled');
    await new Promise(resolve => setTimeout(resolve, 0));
    alert('Registration successful!');
  } else {
    submitButton?.classList.add('disabled');
  }
});

const validateForm = (data: RegistrationData): boolean => {
  const errors: { [key: string]: string } = {};

  if (!validateEmail(data.email)) {
    errors.email = 'Please enter a valid email address.';
  }

  if (!validatePassword(data.password)) {
    errors.password =
      'Password must be at least 8 characters long, with at least 1 uppercase letter, 1 lowercase letter, and 1 number.';
  }

  if (!validateName(data.firstName)) {
    errors.firstName =
      'First name must contain at least one character and no special characters or numbers.';
  }

  if (!validateName(data.lastName)) {
    errors.lastName =
      'Last name must contain at least one character and no special characters or numbers.';
  }

  if (!validateDateOfBirth(data.dateOfBirth)) {
    errors.dateOfBirth = 'You must be at least 18 years old to register.';
  }

  if (!validateAddress(data.street)) {
    errors.street = 'Street must contain at least one character.';
  }

  if (!validateAddress(data.city)) {
    errors.city =
      'City must contain at least one character and no special characters or numbers.';
  }

  const postalCodeError = validatePostalCode(data.postalCode, data.country);
  if (postalCodeError !== '') {
    errors.postalCode = postalCodeError;
  }

  if (!validateCountry(data.country)) {
    errors.country = 'Please select a valid country.';
  }

  if (Object.keys(errors).length > 0) {
    displayErrors(errors);
    return false;
  }

  return true;
};

const validateEmail = (email: string): boolean => {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
};

const validatePassword = (password: string): boolean => {
  const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  return regex.test(password);
};

const validateName = (name: string): boolean => {
  const regex = /^[a-zA-Z]+$/;
  return regex.test(name);
};

const validateDateOfBirth = (dateOfBirth: string): boolean => {
  const today = new Date();
  const birthDate = new Date(dateOfBirth);
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDifference = today.getMonth() - birthDate.getMonth();

  if (
    monthDifference < 0 ||
    (monthDifference === 0 && today.getDate() < birthDate.getDate())
  ) {
    age -= 1;
  }

  return age >= 18;
};

const validateAddress = (address: string): boolean => {
  const regex = /.{1,}/;
  return regex.test(address);
};

const validatePostalCode = (postalCode: string, country: string): string => {
  if (!postalCode) return 'Postal code is required!';

  if (country === 'United States') {
    const regex = /^\d{5}(-\d{4})?$/;
    return regex.test(postalCode)
      ? ''
      : 'Please enter a valid postal code for United State - format: e.g 12345';
  } else if (country === 'Canada') {
    const regex =
      /^[ABCEGHJKLMNPRSTVXY]\d[ABCEGHJKLMNPRSTVWXYZ] ?\d[ABCEGHJKLMNPRSTVWXYZ]\d$/;
    return regex.test(postalCode)
      ? ''
      : 'Please enter a valid postal code for Canada - format: e.g A1B 2C3';
  } else {
    const regex = /^[a-zA-Z0-9]*$/;
    return regex.test(postalCode)
      ? ''
      : 'Please enter a valid postal code for the selected country.';
  }
};

const validateCountry = (country: string): boolean => {
  const validCountries = ['United States', 'Canada', 'Poland', 'Georgia'];
  return validCountries.includes(country);
};

const displayErrors = (errors: { [key: string]: string }) => {
  const errorContainer = document.createElement('div');
  errorContainer.classList.add('error-container');

  for (const [field, message] of Object.entries(errors)) {
    const errorElement = document.createElement('p');
    errorElement.textContent = `${field}: ${message}`;
    errorContainer.appendChild(errorElement);
  }

  form.appendChild(errorContainer);

  setTimeout(() => {
    errorContainer.remove();
  }, 5000);
};
