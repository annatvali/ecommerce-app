// import React from 'react';
// import Image from 'next/image';
// import { Product, ProductData } from './constants';
// import Link from 'next/link';

// interface ProductCardProps {
//   product: ProductData;
//   index: number;
// }
// const ProductCard: React.FC<ProductCardProps> = ({ product, index }) => (
//   <Link href={`/catalog/id=${index}`} passHref>
//     <div key={product.id || index}>
//       <div className="relative h-56">
//         {product.masterVariant?.images?.[0]?.url ? (
//           <Image
//             layout="fill"
//             objectFit="cover"
//             src={product.masterVariant.images[0]?.url ?? ''}
//             alt={product.masterVariant.name['en-US'] || 'Product image'}
//           />
//         ) : (
//           <div className="flex items-center justify-center h-full bg-gray-200">
//             <span>No Image Available</span>
//           </div>
//         )}
//       </div>
//       <div className="p-4">
//         <h3 className="text-lg font-semibold text-center">
//           {product.name['en-US']}
//         </h3>
//         {product.masterVariant.prices && (
//           <p className="mt-2">
//             Price: $
//             {product.masterVariant.prices.filter(
//               (price) => price.country === 'US',
//             )[0]?.value.centAmount / 100}{' '}
//             {
//               product.masterVariant.prices.filter(
//                 (price) => price.country === 'US',
//               )[0]?.value.currencyCode
//             }
//           </p>
//         )}
//       </div>
//     </div>
//   </Link>
// );

// export default ProductCard;
import React from 'react';
import Image from 'next/image';
import { ProductData } from './constants';
import Link from 'next/link';

interface ProductCardProps {
  product: ProductData;
  id: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, id }) => (
  <Link href={`/catalog/${id}`} passHref>
    <div
      key={product.masterVariant.id || id}
      className="flex flex-col border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <div className="relative h-60 flex items-center overflow-hidden">
        {product.masterVariant?.images?.[0]?.url ? (
          <div className="absolute inset-0 w-full h-full p-2">
            <Image
              className="w-full h-full object-cover"
              width={product.masterVariant.images[0].dimensions.w}
              height={product.masterVariant.images[0].dimensions.h}
              src={product.masterVariant.images[0].url}
              alt={product.name['en-US'] || 'Product image'}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,..."
            />
          </div>
        ) : (
          <div className="flex items-center justify-center h-full w-full bg-gray-200">
            <span>No Image Available</span>
          </div>
        )}
      </div>
      <div className="p-4 flex flex-col justify-between flex-grow h-60">
        <h3 className="text-lg font-semibold text-center mb-2">
          {product.name['en-US']}
        </h3>
        <p className="text-sm text-gray-600 line-clamp-3 mb-4">
          {product.description?.['en-US']}
        </p>
        {product.masterVariant?.prices && (
          <p className="mt-2 text-center text-xl font-bold text-green-600">
            $
            {product.masterVariant.prices.filter(
              (price) => price.country === 'US',
            )[0]?.value.centAmount / 100 || 'N/A'}{' '}
            {product.masterVariant.prices.filter(
              (price) => price.country === 'US',
            )[0]?.value.currencyCode || ''}
          </p>
        )}
      </div>
    </div>
  </Link>
);

export default ProductCard;
