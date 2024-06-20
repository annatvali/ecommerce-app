/* eslint-disable @typescript-eslint/ban-ts-comment */
import { UseFormRegister, RegisterOptions, FieldErrors } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import clsx from 'clsx';

interface FormData {
  [key: string]: string | number | boolean | undefined | null;
}
interface InputFieldProps {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  register: UseFormRegister<FormData>;
  errors: FieldErrors;
  registerOptions: RegisterOptions;
}
// @ts-ignore
const InputField = ({
  label,
  name,
  type,
  placeholder,
  register,
  errors,
  ...rest
}: InputFieldProps): React.ReactElement => {
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
        placeholder={placeholder}
        {...register(name, rest.registerOptions)}
        id={name}
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
};

export default InputField;
