'use client';

import React, { useState, useEffect } from 'react';
import { getProducts } from '../lib/products';
import { Product } from './constants';
import Pagination from './Pagination';
import ProductCard from './ProductCard';

const Catalog = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages] = useState(0);

  useEffect(() => {
    getProducts()
      .then((data) => {
        if (Array.isArray(data)) {
          setProducts(data);
        } else {
          setProducts([]);
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        setProducts([]);
      });
  }, []);

  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <main className="bg-gray-100 p-4">
      <div className="max-w-7xl mx-4 mx-auto px-4 md:px-12">
        <h1 className="text-2xl font-bold text-center my-8">Product Catalog</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-16">
          {products.map((product, index) => (
            <div
              key={product.id || index}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <ProductCard product={product} index={index} />
            </div>
          ))}
        </div>
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    </main>
  );
};

export default Catalog;
