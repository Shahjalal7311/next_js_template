import type { NextPage } from 'next';
import type { ReactElement, ReactNode } from 'react';

export type NextPageWithLayout<P = {}> = NextPage<P> & {
  authenticationRequired?: boolean;
  getLayout?: (page: ReactElement) => ReactNode;
};

export interface GoogleMapLocation {
  lat?: number;
  lng?: number;
  street_number?: string;
  route?: string;
  street_address?: string;
  city?: string;
  state?: string;
  country?: string;
  zip?: string;
  formattedAddress?: string;
}

export interface Address {
  id: string;
  title: string;
  type: any;
  address: {
    __typename?: string;
    country: string;
    city: string;
    state: string;
    zip: string;
    street_address: string;
  };
  location: GoogleMapLocation;
}

export enum CouponType {
  FIXED = 'fixed',
  PERCENTAGE = 'percentage',
  FREE_SHIPPING = 'free_shipping',
}

export interface Coupon {
  id: string;
  name: string;
  type: CouponType;
  slug: string;
  amount?: string;
  code?: string;
}

export enum PaymentGateway {
  STRIPE = 'STRIPE',
  COD = 'CASH_ON_DELIVERY',
  CASH = 'CASH',
  FULL_WALLET_PAYMENT = 'FULL_WALLET_PAYMENT',
  PAYPAL = 'PAYPAL',
  MOLLIE = 'MOLLIE',
  RAZORPAY = 'RAZORPAY',
  SSLCOMMERZ = 'SSLCOMMERZ',
  PAYSTACK = 'PAYSTACK',
  XENDIT = 'XENDIT',
  IYZICO = 'IYZICO',
}

export interface HomePageProps {
  variables: {
    products: any;
    popularProducts?: any;
    bestSellingProducts?: any;
    categories: any;
    types: any;
  };
  layout: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  sku: string;
  author: Author;
  manufacturer: Manufacturer;
  tags: Tag[];
  is_digital: boolean;
  product_type: string;
  description: string;
  price: number;
  sale_price: number;
  min_price: number;
  max_price: number;
  image: Attachment;
  gallery: Attachment[];
  shop: Shop;
  unit: string;
  categories: Category[];
  quantity: number;
  total_reviews: number;
  ratings: number;
  in_wishlist: boolean;
  variations: object[];
  variation_options: object[];
  rating_count: RatingCount[];
  related_products: Product[];
  created_at: string;
  updated_at: string;
  language: string;
}

export interface Shop {
  id: string;
  name: string;
  slug: string;
  description: string;
  cover_image: Attachment;
}

export interface Author {
  id: string;
  name: string;
  slug: string;
}

export interface Manufacturer {
  id: string;
  name: string;
  slug: string;
}

export interface Tag {
  id: string;
  name: string;
  slug: string;
}

export interface Attachment {
  id: number;
  original: string;
  thumbnail: string;
  __typename?: string;
  slug?: string;
}
export interface RatingCount {
  rating: number;
  total: number;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: Attachment;
  parent_id?: number | null;
}

