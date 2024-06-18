import {
  CategoryOrderHints,
  CategoryReference,
  // CategoryResourceIdentifier,
  // CustomFieldsDraft,
  LastModifiedBy,
  LocalizedString,
  ProductCatalogData,
  ProductPriceModeEnum,
  ProductTypeReference,
  ProductVariant,
  ReviewRatingStatistics,
  SearchKeywords,
  StateReference,
  TaxCategoryReference,
} from '@commercetools/platform-sdk';

interface AssetDimentions {
  w: number;
  h: number;
}

interface Image {
  dimensions: AssetDimentions;
  url: string;
}

interface Value {
  type: string;
  fractionDigits: number;
  centAmount: number;
  currencyCode: string;
}

interface Price {
  value: Value;
  id: string;
}

interface Attributes {
  name: string;
  value: {
    en: string;
    de: string;
  };
}

export interface MasterVariant {
  attributes: Attributes[];
  id: number;
  images: Image[];
  prices: Price[];
  sku: string;
}

export interface Product {
  name: LocalizedString;
  id: string;
  version: number;
  key?: string;
  productType: ProductTypeReference;
  masterData: ProductCatalogData;
  taxCategory?: TaxCategoryReference;
  state?: StateReference;
  reviewRatingStatistics?: ReviewRatingStatistics;
  priceMode?: ProductPriceModeEnum;
  createdAt: DateTime;
  lastModifiedAt: LastModifiedBy;
}

export interface ProductData {
  name: LocalizedString;
  categories: CategoryReference[];
  categoryOrderHints?: CategoryOrderHints;
  description?: LocalizedString;
  slug: LocalizedString;
  metaTitle?: LocalizedString;
  metaDescription?: LocalizedString;
  metaKeywords?: LocalizedString;
  masterVariant: ProductVariant;
  variants: ProductVariant[];
  searchKeywords: SearchKeywords;
}

// type Name = {
//   [key: string]: string;
// };

// interface Slug {
//   en: string;
//   [key: string]: string;
// }

// interface ProductType {
//   id: string;
//   typeId: string;
// }

// interface TaxCategory {
//   id: string;
//   typeId: string;
// }

// interface Description {
//   "de-DE": string;
//   "en-US": string;
//   "en-GB": string;
// }

// interface assetSource {
//   key?: string;
//   uri: string;
//   dimentions?: AssetDimentions;
//   contentType?: string;
// }

// interface TypeResourceIdentifier {
//   id: string;
//   key?: string;
//   typeId: string;
// }

// type Time = string;
type DateTime = string;

// interface Reference {
//   id: string;
//   type: string;
// }

// interface CentPrecisionMoney {
//   amount: number;
//   currency: string;
// }

// type CustomFieldValue =
//   | boolean
//   | number
//   | string
//   | LocalizedString
//   | CentPrecisionMoney
//   | Date
//   | Time
//   | DateTime
//   | Reference
//   | CustomFieldValue[];

// interface FieldContainer {
//   [name: string]: CustomFieldValue;
// }

// interface Asset {
//   id: string;
//   key?: string;
//   sources: assetSource[];
//   name: LocalizedString;
//   description: LocalizedString;
//   tags: string[];
//   custom: CustomFieldsDraft;

// }

// interface assetDraft {
//   key?: string;
//   sources: assetSource[];
//   name: LocalizedString;
//   description?: LocalizedString;
//   tags?: string[];
//   custom?: CustomFieldsDraft;
// }

// interface assetSource {
//   key?: string;
//   uri: string;
//   dimentions?: AssetDimentions;
//   contentType?: string;
// }
