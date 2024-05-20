const container = document.querySelector('.container') as HTMLElement;
const form = document.getElementById('login-form') as HTMLFormElement;
const submitButton = document.querySelector(
  '.login-form__submit',
) as HTMLButtonElement;

interface LoginData {
  email: string;
  password: string;
}

//Validation
const validateForm = (data: LoginData): boolean => {
  const errors: { [key: string]: string } = {};

  if (!validateEmail(data.email)) {
    errors.email = 'Please, enter a valid email address.';
  }

  if (!validatePassword(data.password)) {
    errors.password =
      'Password must be at least 8 characters long, with at least 1 uppercase letter, 1 lowercase letter, and 1 number.';
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

//Displaying error messages
const displayErrors = (errors: { [key: string]: string }) => {
  let errorContainer = document.querySelector(
    '.error-container',
  ) as HTMLElement;

  if (!errorContainer) {
    errorContainer = document.createElement('div');
    errorContainer.classList.add('error-container');
    container.appendChild(errorContainer);
  }

  errorContainer.innerHTML = '';

  for (const [field, message] of Object.entries(errors)) {
    const errorElement = document.createElement('p');
    errorElement.textContent = `${field}: ${message}`;
    errorContainer.appendChild(errorElement);
  }
  setTimeout(() => {
    errorContainer.remove();
  }, 2000);
};

//Displaying successfull sign in message
const displaySuccess = () => {
  const successContainer = document.createElement('div');
  successContainer.classList.add('success-container');
  successContainer.innerHTML = 'Login successful!';
  container.appendChild(successContainer);

  setTimeout(() => {
    successContainer.remove();
  }, 2000);
};

const updateSubmitButtonState = () => {
  const formData = new FormData(form);
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;
  const isFormValid = validateForm({ email, password });

  if (isFormValid) {
    submitButton.classList.remove('disabled');
    submitButton.disabled = false;
  } else {
    submitButton.classList.add('disabled');
    submitButton.disabled = true;
  }
};

//Validation check of inputs
form.querySelectorAll('input').forEach(input => {
  input.addEventListener('blur', event => {
    const target = event.target as HTMLInputElement;
    const formData = new FormData(form);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    const errors: { [key: string]: string } = {};
    if (target.name === 'email' && !validateEmail(email)) {
      errors.email = 'Please, enter a valid email address.';
    }

    if (target.name === 'password' && !validatePassword(password)) {
      errors.password =
        'Password must be at least 8 characters long, with at least 1 uppercase letter, 1 lowercase letter, and 1 number.';
    }
    displayErrors(errors);
  });

  input.addEventListener('input', updateSubmitButtonState);
});

form.addEventListener('submit', async event => {
  event.preventDefault();

  const formData = new FormData(form);
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  const isFormValid = validateForm({
    email,
    password,
  });

  //Login if form is valid
  if (isFormValid) {
    const projectKey = 'onlineshopproject1234';
    const token = 'cHgA9vQ0lWNyYUQMFb79GisBCBH62MXW';
    console.log(email);
    console.log(password);
    try {
      const loginResponse = await fetch(
        `https://api.europe-west1.gcp.commercetools.com/${projectKey}/login`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ email, password }),
        },
      );

      if (!loginResponse.ok) {
        throw new Error('Failed to login');
      }

      const loginData = await loginResponse.json();
      console.log(loginData.customer.id);
      console.log(loginData.customer.id);
      displaySuccess();
      setTimeout(() => {
        window.location.href = '/';
      }, 500);
    } catch (error) {
      console.error('Error during login:', error);
      const errors: { [key: string]: string } = {};
      errors.login = 'Email or password is incorrect.';
      displayErrors(errors);
    }
  }
});
