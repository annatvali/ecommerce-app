const registrationForm = document.getElementById(
  'registration-form',
) as HTMLFormElement;
const emailInput = document.getElementById('email') as HTMLInputElement;
const passwordInput = document.getElementById('password') as HTMLInputElement;
const firstNameInput = document.getElementById('firstName') as HTMLInputElement;
const lastNameInput = document.getElementById('lastName') as HTMLInputElement;
const dateOfBirthInput = document.getElementById(
  'dateOfBirth',
) as HTMLInputElement;
const streetNameInput = document.getElementById('street') as HTMLInputElement;
const streetNumberInput = document.getElementById(
  'streetNumber',
) as HTMLInputElement;
const cityInput = document.getElementById('city') as HTMLSelectElement;
const postalCodeInput = document.getElementById(
  'postalCode',
) as HTMLSelectElement;
const countryInput = document.getElementById('country') as HTMLSelectElement;
const termsCheckbox = document.getElementById('terms') as HTMLInputElement;
const submitButton = document.getElementById(
  'registration-form-btn',
) as HTMLButtonElement;

const countryZipCode: CountryZipCode = {
  USA: {
    'Los Angeles': ['90001', '90002', '90003', '90004'],
    'San Diego': ['92093', '92101'],
    Dallas: ['75201', '75202'],
    Austin: ['73301', '73344'],
  },
  Canada: {
    Toronto: ['M1B', 'M1C'],
    Ottawa: ['K1A', 'K1B'],
    Montreal: ['H1A', 'H1B'],
  },
  Georgia: {
    Tbilisi: ['0100', '0101', '0102', '0103', '0104'],
    Batumi: ['6000', '6001', '6002', '6003', '6004'],
    Kutaisi: ['4600', '4601', '4602', '4603', '4604'],
  },
};

registrationForm.noValidate = true;

// interfaces
interface RegistrationFormInputs {
  element: HTMLInputElement | HTMLSelectElement;
  validator: (value: string) => boolean;
  errorRequired: string;
  errorInvalid?: string;
}

interface CheckboxFormInput {
  element: HTMLInputElement;
  validator: (element: HTMLInputElement) => boolean;
  errorRequired: string;
  errorInvalid?: string;
}
interface CountryZipCode {
  [key: string]: {
    [key: string]: string[];
  };
}

// interface RegistraData {
//   email: string;
//   password: string;
//   firstName: string;
//   lastName: string;
//   dateOfBirth: string;
//   addresses: [{
//     street: string;
//     streetNumber: string;
//     city: string;
//     postalCode: string;
//     country: string;
//     terms?: boolean;
//   }] ;
// }

if (registrationForm) {
  registrationForm.addEventListener('submit', event => {
    event.preventDefault();

    validateRegistrationFormInputs();
  });
}

// disable selection
cityInput.disabled = true;
postalCodeInput.disabled = true;

// load countries
for (const country in countryZipCode) {
  const option = new Option(country, country);
  countryInput.add(option);
}

// change countries

countryInput.onchange = e => {
  if (!(e.target instanceof HTMLSelectElement)) return; // Typecast e.target to HTMLSelectElement

  cityInput.disabled = false;
  // Clear all options from State Selection
  cityInput.length = 1;
  postalCodeInput.length = 1;

  if (e.target.selectedIndex < 1) return;

  // Load cities by looping over countryZipCode
  const selectedCountry = countryZipCode[countryInput.value];
  for (const city in selectedCountry) {
    cityInput.options[cityInput.options.length] = new Option(city, city);
  }
};

// postal code
cityInput.onchange = e => {
  if (!(e.target instanceof HTMLSelectElement)) return;

  postalCodeInput.disabled = false;
  // Clear all options from Postal Code Selection
  postalCodeInput.length = 1;

  if (e.target.selectedIndex < 1) return;

  // Load postal codes by looping over countryZipCode
  const selectedCountry = countryZipCode[countryInput.value];
  const selectedCity = selectedCountry[cityInput.value];
  for (const postalCode of selectedCity) {
    postalCodeInput.options[postalCodeInput.options.length] = new Option(
      postalCode,
      postalCode,
    );
  }
};

// validation functions
function setError(
  element: HTMLInputElement | HTMLSelectElement,
  errorMessage: string,
) {
  const parent = element.parentElement as HTMLElement;
  if (parent) {
    if (parent.classList.contains('success')) {
      parent.classList.remove('success');
    }
    parent.classList.add('error');
    const paragraph = parent.querySelector('p') as HTMLParagraphElement;
    paragraph.textContent = errorMessage;
  }
}

function setSuccess(element: HTMLInputElement | HTMLSelectElement) {
  const parent = element.parentElement;
  if (parent?.classList.contains('error')) {
    parent.classList.remove('error');
  }
  parent?.classList.add('success');
}

const isEmailValid = (email: string): boolean => {
  const regex =
    /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(String(email).toLowerCase());
};

const isPasswordValid = (password: string): boolean => {
  const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/g;
  return regex.test(password);
};

const isFirstnameValid = (name: string): boolean => {
  const regex = /^[a-zA-Z]+$/;
  return regex.test(name);
};

const isLastnameValid = (name: string): boolean => {
  const regex = /^[a-zA-Z]+$/;
  return regex.test(name);
};

const isDateOfBirthValid = (dateOfBirth: string): boolean => {
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

const isStreetNameInputValid = (street: string): boolean => {
  const regex = /^[a-zA-Z ]+$/;
  return regex.test(street);
};

const isStreetNumberInputValid = (streetNumber: string): boolean => {
  const regex = /^[1-9][0-9]*([-/][0-9]+)*$/;
  return regex.test(streetNumber);
};

const isCityInputValid = (city: string): boolean => {
  return city !== '';
};

const isCountryInputValid = (country: string): boolean => {
  return country !== '';
};

const isPostalCodeInputValid = (postalCode: string): boolean => {
  return postalCode !== '';
};

const isTermsCheckboxValid = (terms: HTMLInputElement): boolean => {
  return terms.checked;
};

const registrationFormInputs: (RegistrationFormInputs | CheckboxFormInput)[] = [
  {
    element: emailInput,
    validator: isEmailValid,
    errorRequired: 'Email field is required!',
    errorInvalid: 'Email must be in the following format - example@email.com!',
  },
  {
    element: passwordInput,
    validator: isPasswordValid,
    errorRequired: 'Password field is required!',
    errorInvalid:
      'Password must contain at least 8 characters long, at least 1 uppercase letter, 1 lowercase letter, and 1 number!',
  },
  {
    element: firstNameInput,
    validator: isFirstnameValid,
    errorRequired: 'First name field is required!',
    errorInvalid: 'First name must contain only letters!',
  },
  {
    element: lastNameInput,
    validator: isLastnameValid,
    errorRequired: 'Last name field is required!',
    errorInvalid: 'Last name must contain only letters!',
  },
  {
    element: dateOfBirthInput,
    validator: isDateOfBirthValid,
    errorRequired: 'Date of birth field is required!',
    errorInvalid: 'You must be at least 18 years old!',
  },
  {
    element: streetNameInput,
    validator: isStreetNameInputValid,
    errorRequired: 'Street Name field is required!',
    errorInvalid: 'Street must contain only letters and space!',
  },
  {
    element: streetNumberInput,
    validator: isStreetNumberInputValid,
    errorRequired: 'Street number field is required!',
    errorInvalid:
      'Street number must contain only numbers >= 0, "-" or "/" sign!',
  },
  {
    element: cityInput,
    validator: isCityInputValid,
    errorRequired: 'City field is required!',
    errorInvalid: 'City must contain only letters!',
  },
  {
    element: postalCodeInput,
    validator: isPostalCodeInputValid,
    errorRequired: 'Postal code field is required!',
    errorInvalid: 'Postal code must match format for chosen country!',
  },
  {
    element: countryInput,
    validator: isCountryInputValid,
    errorRequired: 'Country field is required!',
    errorInvalid: 'Country must contain only letters!',
  },
  {
    element: termsCheckbox,
    validator: isTermsCheckboxValid,
    errorRequired: 'You must agree to the terms and conditions!',
    errorInvalid: 'You must agree to the terms and conditions!',
  },
];

for (const input of registrationFormInputs) {
  input.element.addEventListener('blur', () => {
    if ('type' in input.element && input.element.type === 'checkbox') {
      const checkboxInput = input as CheckboxFormInput;
      if (!checkboxInput.validator(checkboxInput.element)) {
        setError(checkboxInput.element, checkboxInput.errorInvalid || '');
      } else {
        setSuccess(checkboxInput.element);
      }
    } else {
      const textInput = input as RegistrationFormInputs;
      if (textInput.element.value.trim() === '') {
        setError(textInput.element, textInput.errorRequired);
      } else if (!textInput.validator(textInput.element.value)) {
        setError(textInput.element, textInput.errorInvalid || '');
      } else {
        setSuccess(textInput.element);
      }
    }

    // Update submit button state
    updateSubmitButtonState();
  });
}

function allInputsValid(): boolean {
  for (const input of registrationFormInputs) {
    const parent = input.element.parentElement;
    if (!parent || !parent.classList.contains('success')) {
      return false;
    }
  }
  return true;
}

function validateRegistrationFormInputs() {
  for (const input of registrationFormInputs) {
    if ('type' in input.element && input.element.type === 'checkbox') {
      const checkboxInput = input as CheckboxFormInput;
      if (!checkboxInput.validator(checkboxInput.element)) {
        setError(checkboxInput.element, checkboxInput.errorInvalid || '');
      } else {
        setSuccess(checkboxInput.element);
      }
    } else {
      const textInput = input as RegistrationFormInputs;
      if (textInput.element.value.trim() === '') {
        setError(textInput.element, textInput.errorRequired);
      } else if (!textInput.validator(textInput.element.value)) {
        setError(textInput.element, textInput.errorInvalid || '');
      } else {
        setSuccess(textInput.element);
      }
    }
  }
}

function updateSubmitButtonState() {
  if (allInputsValid()) {
    submitButton.classList.remove('disabled');
  } else {
    submitButton.classList.add('disabled');
  }
}

if (allInputsValid()) {
  const data = {
    email: emailInput.value,
    password: passwordInput.value,
    firstName: firstNameInput.value,
    lastName: lastNameInput.value,
    dateOfBirth: dateOfBirthInput.value,
    addresses: [
      {
        streetName: streetNameInput.value,
        streetNumber: streetNumberInput.value,
        city: cityInput.value,
        postalCode: postalCodeInput.value,
        country: countryInput.value,
      },
    ],
  };

  console.log(data);

  submitButton.classList.remove('disabled');
} else {
  submitButton.classList.add('disabled');
}

if (registrationForm) {
  registrationForm.addEventListener('submit', async event => {
    event.preventDefault();

    validateRegistrationFormInputs();

    updateSubmitButtonState();

    if (allInputsValid()) {
      const data = {
        email: emailInput.value,
        password: passwordInput.value,
        firstName: firstNameInput.value,
        lastName: lastNameInput.value,
        dateOfBirth: dateOfBirthInput.value,
        addresses: [
          {
            street: streetNameInput.value,
            streetNumber: streetNumberInput.value,
            city: cityInput.value,
            postalCode: postalCodeInput.value,
            country: countryInput.value,
          },
        ],
        terms: termsCheckbox.checked,
      };
      alert(`Registration successful! Data: ${JSON.stringify(data)}`);
      // const CTP_PROJECT_KEY = process.env.CTP_PROJECT_KEY;
      // const request: {
      //   uri: string;
      //   method: MethodType;
      //   body: string;
      //   headers: {
      //     'Content-Type': string;
      //   };
      // } = {
      //   uri: `/${CTP_PROJECT_KEY}/customers`,
      //   method: MethodType.POST,
      //   body: JSON.stringify(data),
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      // };

      // const response = await ctpClient.execute(request);
    }
  });
}
