const form = document.getElementById('login-form') as HTMLFormElement;

interface LoginData {
  email: string;
  password: string;
}

form.addEventListener('submit', async event => {
  event.preventDefault();

  const formData = new FormData(form);

  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  const isFormValid = validateForm({
    email,
    password,
  });

  const submitButton = document.querySelector(
    '.login-form__submit',
  ) as HTMLButtonElement;
  if (isFormValid) {
    submitButton?.classList.remove('disabled');
    await new Promise(resolve => setTimeout(resolve, 0));
    alert('Login successful!');
  } else {
    submitButton?.classList.add('disabled');
  }
});

const validateForm = (data: LoginData): boolean => {
  const errors: { [key: string]: string } = {};

  if (!validateEmail(data.email)) {
    errors.email = 'Please enter a valid email address.';
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
