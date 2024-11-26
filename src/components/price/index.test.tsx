import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Price } from './index';

describe('Price Component', () => {
  it('renders without crashing', () => {
    const { container } = render(<Price price={100} />);
    expect(container).toBeInTheDocument();
  });

  it('displays the correct price', () => {
    const { getByText } = render(<Price price={100} />);
    expect(getByText('100')).toBeInTheDocument();
  });

  it('displays discount percentage', () => {
    const { getByText } = render(<Price price={100} discount={20} />);
    expect(getByText('save 20 %')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = render(
      <Price price={100} className="custom-class" />
    );
    expect(container.firstChild).toHaveClass('custom-class');
  });
});
