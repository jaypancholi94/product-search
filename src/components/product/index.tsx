import Image from 'next/image';
import { Review } from '../review';
import { Price } from '../price';
import { ShieldCheck } from 'lucide-react';
import React, { memo } from 'react';

type ProductProps = {
  thumbnail: string;
  title: string;
  warranty: string;
  rating: number;
  price: number;
  discount: number;
  category: string;
  numberOfReviews: number;
};
const Product: React.FC<ProductProps> = memo(
  ({
    thumbnail,
    title,
    warranty,
    rating,
    price,
    discount,
    numberOfReviews,
    category,
  }): JSX.Element => {
    return (
      <div className="px-3 py-2 bg-gray-50 rounded-lg w-full flex gap-3 border">
        <Image
          src={thumbnail}
          className="h-36 w-36 bg-cover rounded-lg border"
          width={150}
          height={150}
          alt="Product Image"
        />
        <div className="w-full flex flex-col gap-2 overflow-hidden">
          <h4 className="font-bold text-xl uppercase text-nowrap">{title}</h4>
          <span className="rounded-full bg-gray-300 px-2 text-gray-600 capitalize w-fit">
            {category.replace('-', ' ')}
          </span>
          <div className="flex gap-1 items-center">
            <ShieldCheck />
            <span>{warranty}</span>
          </div>
          <div className="flex w-full justify-between">
            <Review rating={rating} numberOfReviews={numberOfReviews} />
            <Price price={price} discount={discount} className="items-end" />
          </div>
        </div>
      </div>
    );
  }
);

Product.displayName = 'Product';

export { Product };
