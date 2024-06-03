import { ErrorMessage } from '@hookform/error-message';
import { Controller, useFormContext } from 'react-hook-form';
import Select from 'react-select';
import { countries, postalCodeFormats } from './constants';
import { Addresses } from './constants';

export default function Address() {
  const {
    register,
    formState: { errors },
    control,
    watch,
    setValue,
  } = useFormContext<Addresses>();
  const country = watch('country');
  const selectedCountry = countries.find((c) => c.countryCode === country);
  const cityOptions = selectedCountry ? selectedCountry.cities : [];

  return (
    <fieldset className="border-2 border-gray-300 rounded-md p-4 mt-2 mb-8">
      <legend className="text-xl font-semibold px-2">Address</legend>
      <div>
        {/* Country */}
        <div className="relative mb-8">
          <label
            htmlFor="country"
            className="text-sm font-medium text-gray-700 w-full"
          >
            Country
          </label>
          <Controller
            name="country"
            control={control}
            rules={{ required: 'This field is required' }}
            render={({ field }) => (
              <Select
                {...field}
                options={countries}
                isSearchable
                value={countries.find(
                  (option) => option.countryCode === field.value,
                )}
                onChange={(option) => {
                  if (option) {
                    field.onChange(option.countryCode);
                    setValue('city', '');
                  } else {
                    field.onChange(null);
                  }
                }}
              />
            )}
          />
          <ErrorMessage
            errors={errors}
            name="country"
            render={({ message }) => (
              <p className="text-sm text-red-500 absolute">{message}</p>
            )}
          />
        </div>

        {/* City */}
        <div className="relative mb-8">
          <label
            htmlFor="city"
            className="text-sm font-medium text-gray-700 w-full"
          >
            City
          </label>
          <Controller
            name="city"
            control={control}
            rules={{ required: 'This field is required' }}
            render={({ field }) => (
              <Select
                {...field}
                options={cityOptions}
                isSearchable
                value={cityOptions.find(
                  (option) => option.value === field.value,
                )}
                onChange={(option) => {
                  if (option) {
                    field.onChange(option.value);
                  } else {
                    field.onChange(null);
                  }
                }}
              />
            )}
          />
          <ErrorMessage
            errors={errors}
            name="city"
            render={({ message }) => (
              <p className="text-sm text-red-500 absolute">{message}</p>
            )}
          />
        </div>

        {/* Postal Code */}
        <div className="relative mb-8">
          <label
            htmlFor="postalCode"
            className="text-sm font-medium text-gray-700 w-full"
          >
            Postal Code
          </label>
          <input
            type="text"
            {...register('postalCode', {
              required: 'This field is required',
              pattern: {
                value: country
                  ? postalCodeFormats[country as keyof typeof postalCodeFormats]
                  : /.*/,
                message: 'Invalid postal code format for selected country',
              },
            })}
            className="px-3 py-2 border border-gray-300 rounded-md w-full"
          />
          <ErrorMessage
            errors={errors}
            name="postalCode"
            render={({ message }) => (
              <p className="text-sm text-red-500 absolute">{message}</p>
            )}
          />
        </div>

        {/* Street Name */}
        <div className="relative mb-8">
          <label
            htmlFor="streetName"
            className="text-sm font-medium text-gray-700 w-full"
          >
            Street Name
          </label>
          <input
            type="text"
            {...register('streetName', {
              required: 'This field is required',
              pattern: {
                value: /^[a-zA-Z\s]+$/,
                message: 'Street Name must contain only letters',
              },
            })}
            className="px-3 py-2 border border-gray-300 rounded-md w-full"
          />
          <ErrorMessage
            errors={errors}
            name="streetName"
            render={({ message }) => (
              <p className="text-sm text-red-500 absolute">{message}</p>
            )}
          />
        </div>

        {/* Street Number */}
        <div className="relative mb-8">
          <label
            htmlFor="streetNumber"
            className="text-sm font-medium text-gray-700 w-full"
          >
            Street Number
          </label>
          <input
            type="text"
            {...register('streetNumber', {
              required: 'This field is required',
              pattern: {
                value: /^[0-9]+$/,
                message: 'Street Number must contain only numbers',
              },
            })}
            className="px-3 py-2 border border-gray-300 rounded-md w-full"
          />
          <ErrorMessage
            errors={errors}
            name="streetNumber"
            render={({ message }) => (
              <p className="text-sm text-red-500 absolute">{message}</p>
            )}
          />
        </div>
      </div>
    </fieldset>
  );
}
