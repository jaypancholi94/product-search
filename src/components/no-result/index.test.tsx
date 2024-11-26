import '@testing-library/jest-dom';
import React from 'react';
import { render } from '@testing-library/react';
import { NoResult } from './index';

describe('NoResult Component', () => {
  it('should render without crashing', () => {
    const { getByText, getByRole } = render(<NoResult />);
    expect(getByRole('icon')).toBeInTheDocument();
    expect(getByText('No Product Found')).toBeInTheDocument();
  });

  it('should display the correct icon', () => {
    const { container } = render(<NoResult />);
    const icon = container.querySelector('svg');
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveClass('text-gray-400');
  });

  it('should display the correct text', () => {
    const { getByText } = render(<NoResult />);
    const textElement = getByText('No Product Found');
    expect(textElement).toBeInTheDocument();
    expect(textElement).toHaveClass('text-2xl text-gray-400');
  });
});
