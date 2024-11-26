import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { SearchBox } from './index';

describe('SearchBox Component', () => {
  test('renders SearchBox component', () => {
    render(<SearchBox text="" setText={() => {}} />);
    const inputElement = screen.getByPlaceholderText(/search/i);
    expect(inputElement).toBeInTheDocument();
  });

  test('calls onChange handler when input value changes', () => {
    const handleChange = jest.fn();
    render(<SearchBox text="" setText={handleChange} />);
    const inputElement = screen.getByPlaceholderText(/search/i);
    fireEvent.change(inputElement, { target: { value: 'test' } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  test('input value updates correctly', () => {
    const SearchBoxWithState = () => {
      const [text, setText] = React.useState('');
      return <SearchBox text={text} setText={setText} />;
    };

    render(<SearchBoxWithState />);
    const inputElement = screen.getByPlaceholderText(/search/i);
    fireEvent.change(inputElement, { target: { value: 'test' } });
    expect(inputElement).toHaveValue('test');
  });
});
