'use client';

import React from 'react';
import { FormProvider, useForm, useFormContext } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import Address from './Address';
import { FormInputs } from './constants';
import { createCustomer } from '@/app/lib/customer';
import InputField from './InputField';
import clsx from 'clsx';

const Form = () => {
  const formMethods = useForm<FormInputs>({
    defaultValues: {
      addresses: [
        {
          country: '',
          city: '',
          postalCode: '',
          streetName: '',
          streetNumber: '',
        },
      ],
    },
  });
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
    reset,
  } = formMethods;
  const onSubmit = async (data: FormInputs) => {
    try {
      await createCustomer(data);
      reset();
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <FormProvider {...formMethods}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full min-w-md"
        noValidate
      >
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

        <InputField
          label="Password"
          type="password"
          name="password"
          placeholder="Pass123!"
          register={register}
          errors={errors}
          registerOptions={{
            required: 'This field is required',
            pattern: {
              value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/g,
              message:
                'Password must contain at least 8 characters long, at least 1 uppercase letter, 1 lowercase letter, and 1 number',
            },
          }}
        />

        <InputField
          label="First Name"
          name="firstName"
          type="text"
          placeholder="John"
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

        <InputField
          label="Last Name"
          name="lastName"
          type="text"
          placeholder="Doe"
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
        <div className="relative mb-8">
          <label
            htmlFor="dateOfBirth"
            className="text-sm font-medium text-gray-700 w-full"
          >
            Date of Birth
          </label>
          <input
            type="date"
            {...register('dateOfBirth', {
              required: 'This field is required',
              validate: (value) => {
                const selectedDate = new Date(value);
                const currentDate = new Date();
                currentDate.setFullYear(currentDate.getFullYear() - 18);
                return (
                  selectedDate <= currentDate ||
                  'You must be at least 18 years old to register on the platform'
                );
              },
            })}
            className={clsx('px-3 py-2 border-2 rounded-md w-full', {
              'border-input-error': errors['dateOfBirth'],
              'border-input-default': !errors['dateOfBirth'],
            })}
          />
          <ErrorMessage
            errors={errors}
            name="dateOfBirth"
            render={({ message }) => (
              <p className="text-sm text-red-500 absolute">{message}</p>
            )}
          />
        </div>
        <Address />
        <div className="relative mb-8 flex">
          <input type="checkbox" {...register('defaultAddress')} />
          <label
            htmlFor="defaultAddress"
            className={`text-sm font-medium w-full ml-2 ${watch('sameBillingShipping') || watch('differentShippingAddress') ? 'text-gray-400' : 'text-gray-700'}`}
          >
            Set as default address
          </label>
        </div>
        <div className="relative mb-8 flex">
          <input
            type="checkbox"
            {...register('differentShippingAddress')}
            disabled={watch('sameBillingShipping')}
          />
          <label
            htmlFor="differentShippingAddress"
            className={`text-sm font-medium w-full ml-2 ${watch('sameBillingShipping') ? 'text-gray-400' : 'text-gray-700'}`}
          >
            Set a different Shipping Address
          </label>
        </div>
        <div className="relative mb-8 flex">
          <input
            type="checkbox"
            {...register('sameBillingShipping')}
            disabled={watch('differentShippingAddress')}
          />
          <label
            htmlFor="sameBillingShipping"
            className={`text-sm font-medium w-full ml-2 ${watch('differentShippingAddress') ? 'text-gray-400' : 'text-gray-700'}`}
          >
            Use the same address for billing and shipping
          </label>
        </div>
        {watch('differentShippingAddress') && <Address />}
        <div className="flex justify-center">
          <input
            type="submit"
            className="cursor-pointer text-primary hover:text-white border border-primary hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-primary dark:text-primary dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
          />
        </div>
      </form>
    </FormProvider>
  );
};

export default Form;
