import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { ProductSkeletonContainer } from './index';

describe('ProductSkeletonContainer', () => {
  it('should render the correct number of ProductSkeleton components', () => {
    const numberOfRender = 5;
    const { container } = render(
      <ProductSkeletonContainer numberOfRender={numberOfRender} />
    );
    const productSkeletons = container.querySelectorAll(
      '.px-3.py-2.rounded-lg.bg-gray-50.w-full.flex.gap-3.border'
    );
    expect(productSkeletons.length).toBe(numberOfRender);
  });
});
