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
        const response = data.results.map(
          (product: Product) => product.masterData.current,
        );
        console.log(response);
        return response;
      } else {
        throw new Error('Unexpected response format');
      }
    })
    .catch((error) => {
      console.error('Error:', error);
      throw error;
    });
};

export const getProductById = async (productId: string) => {
  const token = localStorage.getItem('access_token');
  const url = `${apiUrl}/${projectKey}/products/${productId}`;
  // const url = `${apiUrl}/${projectKey}/products/${id}?priceCurrency=${priceCurrency}&priceCountry=${priceCountry}`;

  return fetch(url, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => {
      if (data && data.masterData) {
        console.log(data.masterData.current);
        return data.masterData.current;
      } else {
        throw new Error('Unexpected response format');
      }
    })
    .catch((error) => {
      console.error('Error:', error);
      throw error;
    });
};
