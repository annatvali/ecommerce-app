'use client';

import React, { useState, useEffect } from 'react';
import { apiUrl as host, projectKey } from '../utils/constants';

interface Product {
  id: string;
  name: string;
  description: string;
  // add other properties as needed
}

const Catalog = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const token = localStorage.getItem('access_token');
    fetch(`${host}/${projectKey}/products`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setProducts(data.results);
      });
  }, []);

  return (
    <main>
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h1 className="mt-10 text-center text-3xl font-bold leading-9 tracking-tight text-white-900">
          Catalog content
        </h1>
        {products.map((product) => (
          <div key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Catalog;
