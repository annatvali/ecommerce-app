import React from 'react';
import { PencilSquareIcon, ArrowPathIcon } from '@heroicons/react/24/outline';
import { ProfileFieldProps, ProfileFields } from './constants';
import Skeleton from './Skeleton';

const ProfileField: React.FC<ProfileFieldProps> = ({
  isLoading,
  isEditing,
  label,
  value,
  field,
  handleInputChange,
  handleBlur,
  handleEditClick,
  handleUpdateClick,
}) => (
  <div className="flex justify-between items-center gap-4 p-2">
    {isLoading ? (
      <Skeleton />
    ) : isEditing ? (
      <div className="max-w-120 flex gap-8">
        <p className="text-xl font-bold text-blue-800">{label}: </p>
        <input
          type={field === ProfileFields.Password ? 'password' : 'text'}
          value={value}
          onChange={handleInputChange(field)}
          onBlur={handleBlur(field)}
          className="border-2 rounded-md px-2"
        />
      </div>
    ) : (
      <div className="w-120 flex items-center gap-2">
        <p className="text-xl font-bold text-blue-800">{label}: </p>
        <p>{value}</p>
      </div>
    )}
    <div className="flex items-center gap-2">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded"
        onClick={() => handleEditClick(field)}
      >
        <PencilSquareIcon className="h-5 w-5" />
      </button>
      <button
        onClick={() => handleUpdateClick(field)}
        className="flex items-center gap-2 text-sm font-normal bg-emerald-500 hover:bg-emerald-700 text-white font-bold py-2 px-2 rounded"
      >
        <span className="hidden sm:block">update</span>
        <ArrowPathIcon className="h-5 w-5" />
      </button>
    </div>
  </div>
);

export default ProfileField;
