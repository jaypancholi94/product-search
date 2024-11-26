'use client';
import { fetchProducts } from '@/utils';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

type ProductSearchContextProps = {
  search: string;
  setSearch: (search: string) => void;
  loading: boolean;
  products: Product[];
  error: string | null;
};

type ProductSearchProviderProps = { children: ReactNode };

type Review = {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
};

export type Product = {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand?: string;
  sku: string;
  weight: number;
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: Review[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: {
    createdAt: string;
    updatedAt: string;
    barcode: string;
    qrCode: string;
  };
  images: string[];
  thumbnail: string;
};

const ProductSearchContext = createContext<ProductSearchContextProps | null>(
  null
);

export const ProductSearchProvider = ({
  children,
}: ProductSearchProviderProps) => {
  const pathname = usePathname();
  const { replace } = useRouter();
  const searchParams = useSearchParams();

  const [search, setSearch] = useState<string>(
    searchParams.get('search') ?? ''
  );
  const [loading, setLoading] = useState<boolean>(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    try {
      setError(null);
      const data = await fetchProducts(search);
      setProducts(data);
      setLoading(false);
    } catch (e) {
      console.error('Error handling search:', e);
      if (e instanceof Error) {
        setError(e.message);
      } else {
        setError('An unknown error occurred');
      }
      setLoading(false);
    }
  }, [search]);

  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    setLoading(true);
    if (search === '') {
      params.delete('search');
    } else {
      params.set('search', search);
    }
    replace(`${pathname}?${params.toString()}`);

    const handleDebounce = setTimeout(() => {
      fetchData();
    }, 1000);

    return () => {
      clearTimeout(handleDebounce);
    };
  }, [search]);

  return (
    <ProductSearchContext.Provider
      value={{ search, setSearch, loading, products, error }}
    >
      {children}
    </ProductSearchContext.Provider>
  );
};

export const useProductSearch = () => {
  const context = useContext(ProductSearchContext);
  if (!context) {
    throw new Error(
      'useProductSearch must be used within a ProcuctSearchProvider'
    );
  }
  return context;
};
