import { apiUrl, projectKey } from '../utils/constants';
import { Product } from '../catalog/constants';

export const getProducts = async () => {
  const token = localStorage.getItem('access_token');
  const url = `${apiUrl}/${projectKey}/products?limit=20`;

  return fetch(url, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.results && Array.isArray(data.results)) {
        return data.results.map((item: Product) => item.masterData.current);
      } else {
        throw new Error('Unexpected response format');
      }
    })
    .catch((error) => {
      console.error('Error:', error);
      throw error;
    });
};
