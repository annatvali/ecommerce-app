'use client';

import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PhotoIcon, ArrowUpTrayIcon } from '@heroicons/react/24/outline';
import Skeleton from './Skeleton';
import ProfileField from './ProfileField';
import { ProfileFields } from './constants';
import { useProfile } from './useProfile';

const Profile = () => {
  const {
    customerData,
    isEditing,
    language,
    handleInputChange,
    handleEditClick,
    handleUpdateClick,
    handleBlur,
    handleAvatarUpload,
    handleLanguageChange,
  } = useProfile();

  const profileFields = [
    { label: 'First Name', field: ProfileFields.FirstName },
    { label: 'Last Name', field: ProfileFields.LastName },
    { label: 'Email', field: ProfileFields.Email },
    { label: 'Password', field: ProfileFields.Password },
    { label: 'Date of Birth', field: ProfileFields.DateOfBirth },
  ];

  return (
    <div className="flex flex-col items-center my-32">
      <ToastContainer />
      <div>
        <h1 className="text-4xl font-bold text-blue-800 mb-16">
          Profile Settings
        </h1>
        <div className="flex flex-col justify-center items-center mb-16">
          <PhotoIcon className="h-24 w-24 text-gray-400 border-2 rounded-md p-2 mb-4" />
          <input
            type="file"
            id="avatar"
            name="avatar"
            accept="image/*"
            onChange={handleAvatarUpload}
            className="hidden"
          />
          <label
            htmlFor="avatar"
            className="mt-2 inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-700 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out cursor-pointer"
          >
            <ArrowUpTrayIcon className="h-5 w-5 mr-2" />
            Upload Profile Image
          </label>
          <div className="mb-4 text-gray-700 mt-8">
            <label htmlFor="language" className="mr-2 font-bold">
              Language:
            </label>
            <select
              id="language"
              value={language}
              onChange={handleLanguageChange}
              className="text-gray-700 bg-gray-200 border-none rounded px-3 py-2 shadow-md outline-none cursor-pointer"
            >
              <option value="EN">English</option>
              <option value="KA">Georgian</option>
            </select>
          </div>
        </div>
      </div>
      {customerData ? (
        <div>
          {profileFields.map(({ label, field }) => (
            <ProfileField
              key={field}
              label={label}
              value={customerData[field]}
              isEditing={isEditing[field]}
              field={field}
              handleInputChange={handleInputChange}
              handleBlur={handleBlur}
              handleEditClick={handleEditClick}
              handleUpdateClick={handleUpdateClick}
              isLoading={false}
            />
          ))}
        </div>
      ) : (
        <Skeleton />
      )}
    </div>
  );
};

export default Profile;
