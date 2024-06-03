import {
  FieldError,
  UseFormRegister,
  RegisterOptions,
  FieldErrors,
} from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import clsx from 'clsx';

interface InputFieldProps {
  label: string;
  name: string;
  type: string;
  register: UseFormRegister<any>;
  errors: FieldErrors<any>;
  registerOptions: RegisterOptions;
}

export default function InputField({
  label,
  name,
  type,
  register,
  errors,
  ...rest
}: InputFieldProps): React.ReactElement {
  return (
    <div className="relative mb-8">
      <label
        htmlFor={name}
        className="text-sm font-medium text-gray-700 w-full"
      >
        {label}
      </label>
      <input
        type={type}
        {...register(name, rest.registerOptions)}
        className={clsx('px-3 py-2 border-2 rounded-md w-full', {
          'border-input-error': errors[name],
          'border-input-default': !errors[name],
        })}
      />
      <ErrorMessage
        errors={errors}
        name={name}
        render={({ message }) => (
          <p className="text-sm text-input-error absolute">{message}</p>
        )}
      />
    </div>
  );
}
