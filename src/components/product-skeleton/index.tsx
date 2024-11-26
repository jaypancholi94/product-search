import { memo } from 'react';
import { Skeleton } from '../skeleton';
import React from 'react';

const ProductSkeleton: React.FC = memo((): JSX.Element => {
  return (
    <div className="px-3 py-2 rounded-lg bg-gray-50 w-full flex gap-3 border">
      <Skeleton className="!h-36 !w-36 rounded-lg border" />
      <div className="w-full flex flex-col gap-2">
        <Skeleton className="h-7 w-80" />
        <Skeleton className="rounded-full h-6 w-16" />
        <div className="flex gap-1">
          <Skeleton className="rounded-lg h-6 w-6" />
          <Skeleton className="rounded-lg h-6 w-16" />
        </div>

        <div className="flex w-full justify-between items-center">
          <div className="flex gap-1">
            <Skeleton className="rounded-lg h-4 w-4" />
            <Skeleton className="rounded-lg h-4 w-4" />
            <Skeleton className="rounded-lg h-4 w-4" />
            <Skeleton className="rounded-lg h-4 w-4" />
            <Skeleton className="rounded-lg h-4 w-4" />
            <Skeleton className="rounded-lg h-4 w-16" />
          </div>
          <div className="flex flex-col items-end gap-1">
            <Skeleton className="h-5 w-24" />
            <div className="flex gap-1">
              <Skeleton className="h-6 w-16" />
              <Skeleton className="h-6 w-16" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
ProductSkeleton.displayName = 'ProductSkeleton';

const ProductSkeletonContainer: React.FC<{ numberOfRender: number }> = memo(
  ({ numberOfRender }): JSX.Element => {
    return (
      <>
        {Array.from({ length: numberOfRender }).map((_, index) => (
          <ProductSkeleton key={index} />
        ))}
      </>
    );
  }
);
ProductSkeletonContainer.displayName = 'ProductSkeletonContainer';

export { ProductSkeleton, ProductSkeletonContainer };
