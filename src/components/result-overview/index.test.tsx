import React from 'react';
import { render, screen } from '@testing-library/react';
import { useProductSearch } from '@/context/product-search-context';
import { ResultOverview } from './index';
import '@testing-library/jest-dom';

jest.mock('@/context/product-search-context');

describe('ResultOverview', () => {
  it('renders null when there is no search term', () => {
    (useProductSearch as jest.Mock).mockReturnValue({
      search: '',
      loading: false,
      products: [],
    });

    const { container } = render(<ResultOverview />);

    expect(container.firstChild).toBeNull();
  });

  it('renders results when search term is present and loading is false', () => {
    (useProductSearch as jest.Mock).mockReturnValue({
      search: 'test',
      loading: false,
      products: [{ id: 1 }, { id: 2 }],
    });

    render(<ResultOverview />);

    expect(screen.getByText('Result for "test"')).toBeInTheDocument();
    expect(screen.getByText('Total result found: 2')).toBeInTheDocument();
  });
});
