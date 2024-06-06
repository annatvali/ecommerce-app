import { ErrorMessage } from '@hookform/error-message';
import { Controller, useFormContext } from 'react-hook-form';
import Select from 'react-select';
import { countries, postalCodeFormats, Addresses } from './constants';
import clsx from 'clsx';

const Address = () => {
  const {
    register,
    formState: { errors },
    control,
    watch,
    setValue,
  } = useFormContext<Addresses>();
  const countryCode = watch('countryCode');
  const selectedCountry = countries.find((c) => c.countryCode === countryCode);
  const cityOptions = selectedCountry ? selectedCountry.cities : [];

  return (
    <fieldset className="border-2 border-gray-300 rounded-md py-4 px-12 mt-2 mb-8">
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
            name="countryCode"
            control={control}
            rules={{ required: 'This field is required' }}
            render={({ field }) => (
              <Select
                instanceId="countryCode"
                {...field}
                options={countries}
                getOptionLabel={(option) => option.label}
                getOptionValue={(option) => option.countryCode}
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
                styles={{
                  control: (provided) => ({
                    ...provided,
                    borderColor: errors['countryCode'] ? 'red' : 'default',
                  }),
                }}
              />
            )}
          />
          <ErrorMessage
            errors={errors}
            name="countryCode"
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
                instanceId="city"
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
                styles={{
                  control: (provided) => ({
                    ...provided,
                    borderColor: errors['countryCode'] ? 'red' : 'default',
                  }),
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
            placeholder="12345"
            {...register('postalCode', {
              required: 'This field is required',
              pattern: {
                value: countryCode
                  ? postalCodeFormats[
                      countryCode as keyof typeof postalCodeFormats
                    ]
                  : /.*/,
                message: 'Invalid postal code format for selected country',
              },
            })}
            className={clsx('px-3 py-2 border-2 rounded-md w-full', {
              'border-input-error': errors['postalCode'],
              'border-input-default': !errors['postalCode'],
            })}
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
            placeholder="Main Street"
            {...register('streetName', {
              required: 'This field is required',
              pattern: {
                value: /^[a-zA-Z\s]+$/,
                message: 'Street Name must contain only letters',
              },
            })}
            className={clsx('px-3 py-2 border-2 rounded-md w-full', {
              'border-input-error': errors['postalCode'],
              'border-input-default': !errors['postalCode'],
            })}
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
            placeholder="12"
            {...register('streetNumber', {
              required: 'This field is required',
              pattern: {
                value: /^[0-9]+$/,
                message: 'Street Number must contain only numbers',
              },
            })}
            className={clsx('px-3 py-2 border-2 rounded-md w-full', {
              'border-input-error': errors['postalCode'],
              'border-input-default': !errors['postalCode'],
            })}
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
};

export default Address;
