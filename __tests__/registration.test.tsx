import { fireEvent, render, screen } from '@testing-library/react';
import Form from '../app/registration/page';

describe('Registration Form Component', () => {
  it('has input elements for Email, Password, First Name, Last Name, and Date of Birth', () => {
    render(<Form />);

    const inputs = [
      { label: 'Email', expected: true },
      { label: 'Password', expected: true },
      { label: 'First Name', expected: true },
      { label: 'Last Name', expected: true },
      { label: 'Date of Birth', expected: true },
    ];

    inputs.forEach(({ label, expected }) => {
      const inputElement = screen.queryByLabelText(label);
      if (expected) {
        expect(inputElement).toBeInTheDocument();
      } else {
        expect(inputElement).not.toBeInTheDocument();
      }
    });
  });
});

describe('Registration Form with empty inputs', () => {
  it('returns error messages for empty inputs', async () => {
    render(<Form />);

    const inputs = [
      { label: 'Email', expected: 'This field is required' },
      { label: 'Password', expected: 'This field is required' },
      { label: 'First Name', expected: 'This field is required' },
      { label: 'Last Name', expected: 'This field is required' },
      { label: 'Date of Birth', expected: 'This field is required' },
    ];

    inputs.forEach(async ({ label, expected }) => {
      const inputElement = screen.getByLabelText(label);

      fireEvent.submit(inputElement, '');
      const errorMessage = await screen.findByText(expected);
      expect(errorMessage).toBeInTheDocument();
    });
  });
});

describe('Registration Form with invalid inputs', () => {
  it('should display error messages for invalid inputs', async () => {
    render(<Form />);

    const submitButton = screen.getByRole('button', { name: /submit/i });

    const inputs = [
      {
        label: 'Email',
        value: 'example',
        expected: 'Email must be in the following format - example@email.com',
      },
      {
        label: 'Password',
        value: '123',
        expected:
          'Password must contain at least 8 characters long, at least 1 uppercase letter, 1 lowercase letter, and 1 number',
      },
      {
        label: 'First Name',
        value: '123',
        expected: 'First Name must contain only letters',
      },
      {
        label: 'Last Name',
        value: '123',
        expected: 'Last Name must contain only letters',
      },
    ];

    for (const { label, value, expected } of inputs) {
      const inputElement = screen.getByLabelText(label);

      fireEvent.change(inputElement, { target: { value: value } });
      fireEvent.submit(submitButton);

      const errorMessage = await screen.findByText(expected);
      expect(errorMessage).toBeInTheDocument();
    }
  });
});
