import { Star } from 'lucide-react';
import React, { memo } from 'react';

type ReviewProps = { rating: number; numberOfReviews: number };

const Review: React.FC<ReviewProps> = memo(
  ({ rating, numberOfReviews }): JSX.Element => {
    return (
      <div className="flex gap-1 items-center">
        {Array(5)
          .fill(0)
          .map((_, i) => (
            <Star
              key={i}
              className={`text-2xl ${
                i < rating ? 'fill-yellow-400' : 'text-gray-400'
              }`}
              size={16}
            />
          ))}
        <span className="text-gray-400">{numberOfReviews} reviews</span>
      </div>
    );
  }
);

Review.displayName = 'Review';
export { Review };
