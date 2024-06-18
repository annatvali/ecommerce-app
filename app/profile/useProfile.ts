import { useState, useEffect } from 'react';
import { getCustomerData } from '../lib/customer';
import { INITIAL_EDITING_STATE, ProfileFields } from './constants';
import { FormInputs } from '../registration/constants';
import { toast } from 'react-toastify';

export const useProfile = () => {
  const [customerData, setCustomerData] = useState<FormInputs | null>(null);
  const [isEditing, setIsEditing] = useState({ ...INITIAL_EDITING_STATE });
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

  const handleInputChange =
    (field: ProfileFields) => (event: React.ChangeEvent<HTMLInputElement>) => {
      if (customerData) {
        setCustomerData({ ...customerData, [field]: event.target.value });
      }
    };

  const handleEditClick = async (field: ProfileFields): Promise<void> => {
    setIsEditing({ ...isEditing, [field]: true });
  };

  const handleUpdateClick = async (field: ProfileFields): Promise<void> => {
    setIsEditing({ ...isEditing, [field]: false });
    toast.success('Value updated successfully!');
  };

  const handleBlur = (field: ProfileFields) => () => {
    setIsEditing({ ...isEditing, [field]: false });
  };

  const handleAvatarUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.files);
  };

  const handleLanguageChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setLanguage(event.target.value);
  };

  return {
    customerData,
    isEditing,
    language,
    handleInputChange,
    handleEditClick,
    handleUpdateClick,
    handleBlur,
    handleAvatarUpload,
    handleLanguageChange,
  };
};
