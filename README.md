# Product Search

## Overview

A simple Next.js application that allows users to search for products in real time. The app fetches data from the DummyJSON Product Search API and displays relevant products with skeleton loaders during the loading phase. A debouncer has been implemented to reduce unnecessary API calls and enhance performance.

> Note: This App is only omptimise for Medium to XLarge Screen

## Technology Used

- **[Next.js](https://nextjs.org/)**: React framework for building fast and scalable web applications.
- **[React](https://react.dev/)**: JavaScript library for building interactive user interfaces.
- **[Tailwind CSS](https://tailwindcss.com/)**: Utility-first CSS framework for styling.
- **[Bun](https://bun.sh/)**: Fast JavaScript runtime and package manager.
- **[Vercel](https://vercel.com/)**: Deployment platform for frontend applications.
- **[Jest](https://jestjs.io/)**: Unit testing library

## Features

- 🔍 Real-Time Product Search: Type in the search box to find products instantly.
- ⏳ Skeleton Loading: Displays placeholders while data is being fetched.
- ⏱️ Debouncing: Minimises API calls by delaying requests until the user stops typing.
- 🌐 API Integration: Uses the DummyJSON Product Search API to fetch data.
- ⚡ Powered by Next.js: Includes server-side rendering for fast performance.

## Demo

Check out the live demo [here](https://example.com/demo).

## Getting Started

This project uses the [Bun](https://bun.sh) package manager. To get started, make sure you have Bun installed. (or use `npm` 😛)

### 1. Clone the Repository

```bash
git clone https://github.com/jaypancholi94/product-search.git
cd product-search
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

### 3. Run the Application

To start the app in development mode:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

The app will be available at <http://localhost:3000>.
