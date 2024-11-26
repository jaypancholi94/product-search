import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Review } from './index';

describe('Review Component', () => {
  it('renders correctly with given rating and number of reviews', () => {
    const { container, getByText } = render(
      <Review rating={3} numberOfReviews={10} />
    );
    const stars = container.querySelectorAll('.text-2xl');
    expect(stars.length).toBe(5);
    expect(stars[0]).toHaveClass('fill-yellow-400');
    expect(stars[1]).toHaveClass('fill-yellow-400');
    expect(stars[2]).toHaveClass('fill-yellow-400');
    expect(stars[3]).toHaveClass('text-gray-400');
    expect(stars[4]).toHaveClass('text-gray-400');
    expect(getByText('10 reviews')).toBeInTheDocument();
  });

  it('renders correctly with zero rating', () => {
    const { container, getByText } = render(
      <Review rating={0} numberOfReviews={5} />
    );
    const stars = container.querySelectorAll('.text-2xl');
    expect(stars.length).toBe(5);
    stars.forEach((star) => {
      expect(star).toHaveClass('text-gray-400');
    });
    expect(getByText('5 reviews')).toBeInTheDocument();
  });

  it('renders correctly with full rating', () => {
    const { container, getByText } = render(
      <Review rating={5} numberOfReviews={20} />
    );
    const stars = container.querySelectorAll('.text-2xl');
    expect(stars.length).toBe(5);
    stars.forEach((star) => {
      expect(star).toHaveClass('fill-yellow-400');
    });
    expect(getByText('20 reviews')).toBeInTheDocument();
  });
});
