import { calculateDiscount, cn } from '@/utils';
import { DollarSign } from 'lucide-react';
import React, { memo } from 'react';

type PriceProps = { price: number; discount?: number; className?: string };
type PriceTagProps = { price: number; isCrossed?: boolean };

const PriceTag: React.FC<PriceTagProps> = memo(
  ({ price, isCrossed }): JSX.Element => {
    return (
      <div
        className={cn(
          'flex items-center',
          isCrossed && 'line-through text-gray-400'
        )}
      >
        <DollarSign size={isCrossed ? 16 : 20} />
        <span className={cn('text-xl font-bold', isCrossed && 'text-sm')}>
          {price.toLocaleString(undefined, { maximumFractionDigits: 2 })}
        </span>
      </div>
    );
  }
);
const Price: React.FC<PriceProps> = memo(
  ({ price, discount, className }): JSX.Element => {
    return (
      <div className={cn('flex flex-col', className)}>
        {discount && (
          <div className="text-sm bg-red-500 w-fit px-2 rounded-md">
            save {discount} %
          </div>
        )}
        <div className="flex gap-1">
          {discount && <PriceTag price={calculateDiscount(price, discount)} />}
          <PriceTag price={price} isCrossed={!!discount} />
        </div>
      </div>
    );
  }
);

PriceTag.displayName = 'PriceTag';
Price.displayName = 'Price';
export { Price };
