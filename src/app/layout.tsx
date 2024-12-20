import type { Metadata } from 'next';
import React, { Suspense } from 'react';
import './globals.css';
import { ProductSearchProvider } from '@/context/product-search-context';

export const metadata: Metadata = {
  title: 'Product Search',
  description: 'Search for your favorite products',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <Suspense>
          <ProductSearchProvider>{children}</ProductSearchProvider>
        </Suspense>
      </body>
    </html>
  );
}
