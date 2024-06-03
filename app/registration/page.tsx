import React from 'react';
import Link from 'next/link';
import Form from '@/app/registration/registration';

const Registration = () => {
  return (
    <main>
      <div className="mx-2 sm:mx-4 md:mx-8 lg:mx-16 xl:mx-32 2xl:mx-64">
        <h1 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white-900">
          Create an account
        </h1>
        <Form />
      </div>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm"></div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <p className="mt-10 text-center text-sm text-gray-500">
            Already have an account?{' '}
            <Link
              href="/login"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Sign in
            </Link>
          </p>

          <p className="mt-10 text-center text-sm text-gray-500">
            Go to{' '}
            <Link
              href="/"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Main
            </Link>{' '}
            page
          </p>
        </div>
      </div>
    </main>
  );
};

export default Registration;
