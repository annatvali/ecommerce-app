import React from 'react';
import Image from 'next/image';
import { Product } from './constants';

interface ProductCardProps {
  product: Product;
  index: number;
}
const ProductCard: React.FC<ProductCardProps> = ({ product, index }) => (
  <div
    key={product.id || index}
    className="bg-white shadow-lg rounded-lg overflow-hidden"
  >
    <div className="relative h-56">
      {product.masterData?.current?.masterVariant?.images?.[0]?.url ? (
        <Image
          layout="fill"
          objectFit="cover"
          src={product.masterData.current.masterVariant.images[0]?.url ?? ''}
          alt={product.masterData.current.name['en'] || 'Product image'}
        />
      ) : (
        <div className="flex items-center justify-center h-full bg-gray-200">
          <span>No Image Available</span>
        </div>
      )}
    </div>
    <div className="p-4">
      <h3 className="text-lg font-semibold text-center">
        {product.name['en-US']}
      </h3>
      {product.masterData?.current?.masterVariant.prices && (
        <p className="mt-2">
          Price: $
          {product.masterData.current.masterVariant.prices.filter(
            (price) => price.country === 'US',
          )[0]?.value.centAmount / 100}{' '}
          {
            product.masterData.current.masterVariant.prices.filter(
              (price) => price.country === 'US',
            )[0]?.value.currencyCode
          }
        </p>
      )}
    </div>
  </div>
);

export default ProductCard;
