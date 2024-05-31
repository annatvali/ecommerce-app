'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { useFormState } from 'react-dom';

// interface dataDraft {
//   email: string;
//   firstName: string;
//   lastName: string;
//   password: string;
//   addresses: [{
//     streetName: string;
//     streetNumber: string;
//     postalCode: string;
//     city: string;
//     country: string;
//   }];
// }

interface Address {
  streetName: string;
  streetNumber: string;
  postalCode: string;
  city: string;
  country: string;
}

interface FormInputs {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  addresses: Address[];
}

export default function Form() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormInputs>({
    criteriaMode: 'all',
  });
  const onSubmit = (data: FormInputs) => console.log(data);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 w-full"
      noValidate
    >
      <div className="flex flex-col">
        <div className="relative mb-8">
          <label
            htmlFor="email"
            className="text-sm font-medium text-gray-700 w-full"
          >
            Email
          </label>
          <input
            type="email"
            {...register('email', {
              required: 'This field is required',
              pattern: {
                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                message:
                  'Email must be in the following format - example@email.com',
              },
            })}
            className="px-3 py-2 border border-gray-300 rounded-md w-full"
          />
          <ErrorMessage
            errors={errors}
            name="email"
            render={({ message }) => (
              <p className="text-sm text-red-500 absolute">{message}</p>
            )}
          />
        </div>
        <div className="relative mb-8">
          <label
            htmlFor="firstName"
            className="text-sm font-medium text-gray-700 w-full"
          >
            First Name
          </label>
          <input
            type="text"
            {...register('firstName', {
              required: 'This field is required',
              pattern: {
                value: /^[a-zA-Z]+$/,
                message: 'First Name must contain only letters',
              },
            })}
            className="px-3 py-2 border border-gray-300 rounded-md w-full"
          />
          <ErrorMessage
            errors={errors}
            name="firstName"
            render={({ message }) => (
              <p className="text-sm text-red-500 absolute">{message}</p>
            )}
          />
        </div>
        <div className="relative mb-8">
          <label
            htmlFor="lastName"
            className="text-sm font-medium text-gray-700 w-full"
          >
            Last Name
          </label>
          <input
            {...register('lastName', {
              required: 'This field is required',
              pattern: {
                value: /^[a-zA-Z]+$/,
                message: 'Last Name must contain only letters',
              },
            })}
            className="px-3 py-2 border border-gray-300 rounded-md w-full"
          />
          <ErrorMessage
            errors={errors}
            name="lastName"
            render={({ message }) => (
              <p className="text-sm text-red-500 absolute">{message}</p>
            )}
          />
        </div>
        <div className="relative mb-8">
          <label
            htmlFor="password"
            className="text-sm font-medium text-gray-700 w-full"
          >
            Last Name
          </label>
          <input
            type="password"
            {...register('password', {
              required: 'This field is required',
              pattern: {
                value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/g,
                message:
                  'Password must contain at least 8 characters long, at least 1 uppercase letter, 1 lowercase letter, and 1 number',
              },
            })}
            className="px-3 py-2 border border-gray-300 rounded-md w-full"
          />
          <ErrorMessage
            errors={errors}
            name="password"
            render={({ message }) => (
              <p className="text-sm text-red-500 absolute">{message}</p>
            )}
          />
        </div>
      </div>
      <div className="flex justify-center">
        <input
          type="submit"
          className="cursor-pointer text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
        />
      </div>
    </form>
  );
}
