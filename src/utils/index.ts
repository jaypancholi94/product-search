import { URL } from '@/constant';
import { Product } from '@/context/product-search-context';
import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const fetchProducts = async (search: string): Promise<Product[]> => {
  try {
    const response = await fetch(`${URL}${search}`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data.products;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

export const calculateDiscount = (price: number, discount: number) => {
  return price - (price * discount) / 100;
};

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
