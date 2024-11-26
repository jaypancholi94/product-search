import { calculateDiscount, fetchProducts, cn } from './index';

describe('calculateDiscount', () => {
  it('should calculate the correct discount', () => {
    const price = 100;
    const discount = 20;
    const expectedPrice = 80;
    expect(calculateDiscount(price, discount)).toBe(expectedPrice);
  });

  it('should return the same price if discount is 0', () => {
    const price = 100;
    const discount = 0;
    const expectedPrice = 100;
    expect(calculateDiscount(price, discount)).toBe(expectedPrice);
  });

  it('should return 0 if discount is 100', () => {
    const price = 100;
    const discount = 100;
    const expectedPrice = 0;
    expect(calculateDiscount(price, discount)).toBe(expectedPrice);
  });

  it('should handle negative discount', () => {
    const price = 100;
    const discount = -20;
    const expectedPrice = 120;
    expect(calculateDiscount(price, discount)).toBe(expectedPrice);
  });
});

describe('fetchProducts', () => {
  it('should fetch products successfully', async () => {
    const search = 'test';
    const mockProducts = [{ id: 1, name: 'Product 1' }];
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ products: mockProducts }),
      })
    ) as jest.Mock;

    const products = await fetchProducts(search);
    expect(products).toEqual(mockProducts);
  });

  it('should throw an error if fetch fails', async () => {
    const search = 'test';
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: false,
        status: 404,
      })
    ) as jest.Mock;

    await expect(fetchProducts(search)).rejects.toThrow(
      'HTTP error! Status: 404'
    );
  });
});

describe('cn', () => {
  it('should merge class names correctly', () => {
    const className1 = 'class1';
    const className2 = 'class2';
    const expectedClassName = 'class1 class2';
    expect(cn(className1, className2)).toBe(expectedClassName);
  });

  it('should handle conditional class names', () => {
    const className1 = 'class1';
    const className2 = false;
    const expectedClassName = 'class1';
    expect(cn(className1, className2)).toBe(expectedClassName);
  });
});
