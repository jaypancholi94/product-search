import { useProductSearch } from '@/context/product-search-context';
import { Skeleton } from '../skeleton';
import { memo } from 'react';
import React from 'react';

const ResultOverviewSkeleton: React.FC = memo((): JSX.Element => {
  return (
    <div className="mb-8 gap-1 flex flex-col">
      <Skeleton className="h-6 w-40" />
      <Skeleton className="h-5 w-32" />
    </div>
  );
});

ResultOverviewSkeleton.displayName = 'ResultOverviewSkeleton';

const ResultOverview: React.FC = memo((): JSX.Element | null => {
  const { search, loading, products } = useProductSearch();
  if (loading) {
    return <ResultOverviewSkeleton />;
  }
  if (!search) return null;
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold leading-none tracking-tight">
        Result for &quot;{search}&quot;
      </h2>
      <p className="text-sm text-gray-500">
        Total result found: {products.length}
      </p>
    </div>
  );
});

ResultOverview.displayName = 'ResultOverview';

export { ResultOverview };
