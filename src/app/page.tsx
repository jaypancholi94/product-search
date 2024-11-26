'use client';

import { NoResult } from '@/components/no-result';
import { Product } from '@/components/product';
import { ProductSkeletonContainer } from '@/components/product-skeleton';
import { ResultOverview } from '@/components/result-overview';
import { SearchBox } from '@/components/search-box';
import { useProductSearch } from '@/context/product-search-context';
import { Package } from 'lucide-react';
import React from 'react';

export default function Home() {
  const { search, setSearch, loading, products } = useProductSearch();
  return (
    <main>
      <div className="container h-dvh flex flex-col items-center">
        <div className="flex gap-2 items-center py-4">
          <Package size={50} className="text-primary" />
          <h1 className="text-lg font-bold sm:text-4xl">Product Search</h1>
        </div>
        <SearchBox text={search} setText={setSearch} />
        <div className="w-full flex flex-col gap-2 py-10">
          <ResultOverview />
          {loading ? (
            <ProductSkeletonContainer numberOfRender={5} />
          ) : (
            products.map(
              ({
                id,
                thumbnail,
                title,
                warrantyInformation,
                rating,
                price,
                discountPercentage,
                category,
                reviews,
              }) => (
                <Product
                  key={id}
                  thumbnail={thumbnail}
                  title={title}
                  rating={rating}
                  price={price}
                  discount={discountPercentage}
                  category={category}
                  numberOfReviews={reviews.length}
                  warranty={warrantyInformation}
                />
              )
            )
          )}
          {products.length === 0 && !loading && <NoResult />}
        </div>
      </div>
    </main>
  );
}
