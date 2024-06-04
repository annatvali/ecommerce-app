import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { FormProvider, useForm } from 'react-hook-form';
import InputField from '@/app/registration/InputField';
import Address from '@/app/registration/Address';
// import Form from '@/app/registration/registration';

describe('Registration Form', () => {
  it('renders correctly', async () => {
    const TestComponent = () => {
      const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const onSubmit = jest.fn();

      return (
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputField
            label="Email"
            name="email"
            type="email"
            placeholder="example@gmail.com"
            register={register}
            errors={errors}
            registerOptions={{
              required: 'This field is required',
              pattern: {
                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                message:
                  'Email must be in the following format - example@email.com',
              },
            }}
          />
          <button type="submit">Submit</button>
        </form>
      );
    };

    render(<TestComponent />);

    const input = screen.getByLabelText('Email');
    expect(input).toBeInTheDocument();

    userEvent.type(input, 'not-an-email');
    userEvent.click(screen.getByRole('button', { name: /submit/i }));

    expect(
      await screen.findByText(
        'Email must be in the following format - example@email.com',
      ),
    ).toBeInTheDocument();
  });

  it('renders correctly and shows error message when password is too short', async () => {
    const TestComponent = () => {
      const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const onSubmit = jest.fn();

      return (
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputField
            label="Password"
            name="password"
            type="password"
            placeholder="Enter your password"
            register={register}
            errors={errors}
            registerOptions={{
              required: 'This field is required',
              minLength: {
                value: 8,
                message: 'Password must be at least 8 characters',
              },
            }}
          />
          <button type="submit">Submit</button>
        </form>
      );
    };

    render(<TestComponent />);

    const input = screen.getByLabelText('Password');
    expect(input).toBeInTheDocument();

    userEvent.type(input, 'short');
    userEvent.click(screen.getByRole('button', { name: /submit/i }));

    expect(
      await screen.findByText('Password must be at least 8 characters'),
    ).toBeInTheDocument();
  });

  it('renders correctly and shows error message when firstName has invalid input', async () => {
    const TestComponent = () => {
      const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const onSubmit = jest.fn();

      return (
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputField
            label="First Name"
            name="firstName"
            type="text"
            placeholder="Enter your first name"
            register={register}
            errors={errors}
            registerOptions={{
              required: 'This field is required',
              pattern: {
                value: /^[a-zA-Z]+$/,
                message: 'First Name must contain only letters',
              },
            }}
          />
          <button type="submit">Submit</button>
        </form>
      );
    };

    render(<TestComponent />);

    const input = screen.getByLabelText('First Name');
    expect(input).toBeInTheDocument();

    userEvent.type(input, 'ksd521');
    userEvent.click(screen.getByRole('button', { name: /submit/i }));

    expect(
      await screen.findByText('First Name must contain only letters'),
    ).toBeInTheDocument();
  });

  it('renders correctly and shows error message when lastName has invalid input', async () => {
    const TestComponent = () => {
      const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const onSubmit = jest.fn();

      return (
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputField
            label="Last Name"
            name="lastName"
            type="text"
            placeholder="Enter your last name"
            register={register}
            errors={errors}
            registerOptions={{
              required: 'This field is required',
              pattern: {
                value: /^[a-zA-Z]+$/,
                message: 'Last Name must contain only letters',
              },
            }}
          />
          <button type="submit">Submit</button>
        </form>
      );
    };

    render(<TestComponent />);

    const input = screen.getByLabelText('Last Name');
    expect(input).toBeInTheDocument();

    userEvent.type(input, '1234dsf');
    userEvent.click(screen.getByRole('button', { name: /submit/i }));

    expect(
      await screen.findByText('Last Name must contain only letters'),
    ).toBeInTheDocument();
  });

  it('renders correctly and shows error message when dateOfBirth is not a valid date', async () => {
    const TestComponent = () => {
      const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const onSubmit = jest.fn();

      return (
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputField
            label="Date of Birth"
            name="dateOfBirth"
            type="date"
            placeholder="Enter your date of birth"
            register={register}
            errors={errors}
            registerOptions={{
              required: 'This field is required',
            }}
          />
          <button type="submit">Submit</button>
        </form>
      );
    };

    render(<TestComponent />);

    const input = screen.getByLabelText('Date of Birth');
    expect(input).toBeInTheDocument();

    userEvent.type(input, 'not-a-date');
    userEvent.click(screen.getByRole('button', { name: /submit/i }));

    expect(
      await screen.findByText('This field is required'),
    ).toBeInTheDocument();
  });
  it('should render without crashing', () => {
    const TestComponent = () => {
      const methods = useForm();
      return (
        <FormProvider {...methods}>
          <Address />
        </FormProvider>
      );
    };

    render(<TestComponent />);
  });
});
