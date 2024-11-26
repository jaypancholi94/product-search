import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Product } from './index';

describe('Product Component', () => {
  const productProps = {
    thumbnail: '/path/to/image.jpg',
    title: 'Sample Product',
    warranty: '2 years',
    rating: 4.5,
    price: 100,
    discount: 10,
    category: 'electronics',
    numberOfReviews: 20,
  };

  it('should render product title', () => {
    render(<Product {...productProps} />);
    expect(screen.getByText('Sample Product')).toBeInTheDocument();
  });

  it('should render product category', () => {
    render(<Product {...productProps} />);
    expect(screen.getByText('electronics')).toBeInTheDocument();
  });

  it('should render product warranty', () => {
    render(<Product {...productProps} />);
    expect(screen.getByText('2 years')).toBeInTheDocument();
  });

  it('should render product rating and number of reviews', () => {
    render(<Product {...productProps} />);
    expect(screen.getByText('20 reviews')).toBeInTheDocument();
  });

  it('should render product price and discount', () => {
    render(<Product {...productProps} />);
    expect(screen.getByText('100')).toBeInTheDocument();
    expect(screen.getByText('90')).toBeInTheDocument();
    expect(screen.getByText('save 10 %')).toBeInTheDocument();
  });

  it('should render product image', () => {
    render(<Product {...productProps} />);
    const image = screen.getByAltText('Product Image');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute(
      'src',
      '/_next/image?url=%2Fpath%2Fto%2Fimage.jpg&w=384&q=75'
    );
  });
});
