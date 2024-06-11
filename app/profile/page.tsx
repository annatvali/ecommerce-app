'use client';

import React, { useEffect, useState } from 'react';
import { getCustomerData } from '../lib/customer';
import { FormInputs } from '../registration/constants';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  PencilSquareIcon,
  ArrowPathIcon,
  ArrowUpTrayIcon,
  PhotoIcon,
} from '@heroicons/react/24/outline';

const Profile = () => {
  const [customerData, setCustomerData] = useState<FormInputs | null>(null);
  const [isEditing, setIsEditing] = useState({
    firstName: false,
    lastName: false,
    email: false,
    password: false,
    dateOfBirth: false,
  });
  const [language, setLanguage] = useState('EN');

  useEffect(() => {
    const fetchCustomerData = async () => {
      try {
        const data = await getCustomerData();
        setCustomerData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCustomerData();
  }, []);

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    field: keyof FormInputs,
  ) => {
    if (customerData) {
      setCustomerData({ ...customerData, [field]: event.target.value });
    }
  };

  const handleEditClick = (field: keyof typeof isEditing) => {
    setIsEditing({ ...isEditing, [field]: true });
  };

  const handleUpdateClick = async (field: keyof typeof isEditing) => {
    setIsEditing({ ...isEditing, [field]: false });
    toast.success('Value updated successfully!');
  };

  const handleBlur = (field: keyof typeof isEditing) => {
    setIsEditing({ ...isEditing, [field]: false });
  };

  const handleAvatarUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Handle the avatar upload here
    console.log(event.target.files);
  };

  const handleLanguageChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setLanguage(event.target.value);
  };

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
          <div className="flex justify-between items-center gap-4 p-2">
            {isEditing.firstName ? (
              <div className="max-w-120 flex gap-8">
                <p className="text-xl font-bold text-blue-800">Frist Name: </p>
                <input
                  type="text"
                  value={customerData.firstName}
                  onChange={(event) => handleInputChange(event, 'firstName')}
                  onBlur={() => handleBlur('firstName')}
                  className="border-2 rounded-md px-2"
                />
              </div>
            ) : (
              <div className="w-120 flex items-center gap-2">
                <p className="text-xl font-bold text-blue-800">First Name: </p>
                <p>{customerData.firstName}</p>
              </div>
            )}
            <div className="flex items-center gap-2">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded"
                onClick={() => handleEditClick('firstName')}
              >
                <PencilSquareIcon className="h-5 w-5" />
              </button>
              <button
                className="flex items-center gap-2 text-sm font-normal bg-emerald-500 hover:bg-emerald-700 text-white font-bold py-2 px-2 rounded"
                onClick={() => handleUpdateClick('firstName')}
              >
                <span>update</span>
                <ArrowPathIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
          <div className="flex justify-between items-center gap-4 p-2">
            {isEditing.lastName ? (
              <div className="max-w-120 flex gap-8">
                <p className="text-xl font-bold text-blue-800">Last Name: </p>
                <input
                  type="text"
                  value={customerData.lastName}
                  onChange={(event) => handleInputChange(event, 'lastName')}
                  onBlur={() => handleBlur('lastName')}
                  className="border-2 rounded-md px-2"
                />
              </div>
            ) : (
              <div className="w-120 flex items-center gap-2">
                <p className="text-xl font-bold text-blue-800">Last Name: </p>
                <p>{customerData.lastName}</p>
              </div>
            )}
            <div className="flex items-center gap-2">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded"
                onClick={() => handleEditClick('firstName')}
              >
                <PencilSquareIcon className="h-5 w-5" />
              </button>
              <button
                onClick={() => handleUpdateClick('lastName')}
                className="flex items-center gap-2 text-sm font-normal bg-emerald-500 hover:bg-emerald-700 text-white font-bold py-2 px-2 rounded"
              >
                <span>update</span>
                <ArrowPathIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
          <div className="flex justify-between items-center gap-4 p-2">
            {isEditing.email ? (
              <div className="max-w-120 flex gap-8">
                <p className="text-xl font-bold text-blue-800">Email: </p>
                <input
                  type="text"
                  value={customerData.email}
                  onChange={(event) => handleInputChange(event, 'email')}
                  onBlur={() => handleBlur('email')}
                  className="border-2 rounded-md px-2"
                />
              </div>
            ) : (
              <div className="w-120 flex items-center gap-2">
                <p className="text-xl font-bold text-blue-800">Email: </p>
                <p>{customerData.email}</p>
              </div>
            )}
            <div className="flex items-center gap-2">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded"
                onClick={() => handleEditClick('email')}
              >
                <PencilSquareIcon className="h-5 w-5" />
              </button>
              <button
                onClick={() => handleUpdateClick('email')}
                className="flex items-center gap-2 text-sm font-normal bg-emerald-500 hover:bg-emerald-700 text-white font-bold py-2 px-2 rounded"
              >
                <span>update</span>
                <ArrowPathIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
          <div className="flex justify-between items-center gap-4 w-full p-2">
            <div className="w-64">
              {isEditing.password ? (
                <div>
                  <span>Password: </span>
                  <input
                    type="password"
                    value={customerData.password}
                    onChange={(event) => handleInputChange(event, 'password')}
                    onBlur={() => handleBlur('password')}
                    className="border-2 rounded-md px-2"
                  />
                </div>
              ) : (
                <div className="w-120 flex items-center gap-2">
                  <p className="text-xl font-bold text-blue-800">Password: </p>
                  <p>******</p>
                </div>
              )}
            </div>
            <div className="flex space-x-2">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded"
                onClick={() => handleEditClick('password')}
              >
                <PencilSquareIcon className="h-5 w-5" />
              </button>
              <button
                onClick={() => handleUpdateClick('email')}
                className="flex items-center gap-2 text-sm font-normal bg-emerald-500 hover:bg-emerald-700 text-white font-bold py-2 px-2 rounded"
              >
                <span>update</span>
                <ArrowPathIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
          <div className="flex justify-between items-center gap-4 p-2">
            {isEditing.dateOfBirth ? (
              <div className="max-w-120 flex gap-8">
                <p className="text-xl font-bold text-blue-800">
                  Date of Birth:{' '}
                </p>
                <input
                  type="date"
                  value={customerData.dateOfBirth}
                  onChange={(event) => handleInputChange(event, 'dateOfBirth')}
                  onBlur={() => handleBlur('dateOfBirth')}
                  className="border-2 rounded-md px-2"
                />
              </div>
            ) : (
              <div className="w-120 flex items-center gap-2">
                <p className="text-xl font-bold text-blue-800">dateOfBirth: </p>
                <p>{customerData.dateOfBirth}</p>
              </div>
            )}
            <div className="flex items-center gap-2">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded"
                onClick={() => handleEditClick('dateOfBirth')}
              >
                <PencilSquareIcon className="h-5 w-5" />
              </button>
              <button
                onClick={() => handleUpdateClick('email')}
                className="flex items-center gap-2 text-sm font-normal bg-emerald-500 hover:bg-emerald-700 text-white font-bold py-2 px-2 rounded"
              >
                <span>update</span>
                <ArrowPathIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Profile;
