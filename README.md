# Stock Tracker - Frontend Assignment

This is a **Next.js** project for a **real-time stock tracking application**. The application allows users to:
- **Search for stocks**
- **View live stock price updates**
- **Analyze historical price trends**
- **Manage a watchlist of selected stocks**

---

## Project Structure
```
src/
│── __tests__/          # Test files (if applicable)
│── app/                # Next.js App Router
│   ├── stocks/         # Stocks-related pages
│   ├── layout.tsx      # Main layout file
│   ├── page.tsx        # Home page
│   ├── providers.tsx   # Context and Providers setup
│
├── components/         # Reusable UI components
│   ├── ui/             # UI Components (Navbar, Loaders, etc.)
│   │   ├── index.ts    # Export all UI components
│   │   ├── Navbar.tsx  # Navbar component
│   │   ├── SkeletonLoading.tsx  # Skeleton loading UI
│   │   ├── Suspense.tsx  # Custom Suspense Wrapper
│
├── features/           # Feature-based structure
│   ├── stocks/         # Stocks-related logic
│   │   ├── api/        # API calls for fetching stock data
│   │   ├── components/ # Components related to stocks
│   │   ├── hooks/      # Custom React hooks for stocks
│   │   ├── services/   # Business logic for stocks
│   │   ├── store/      # State management (Zustand/Redux)
│   │   ├── types/      # TypeScript types
│   │   ├── index.ts    # Feature exports
│
├── hooks/              # Global custom hooks
│   ├── index.ts        # Export all hooks
│
├── store/              # Global state management
│   ├── index.ts        # Export store modules
│
├── utils/              # Utility functions (helpers, formatters, etc.)
│   ├── index.ts        # Export utilities
│
├── .env                # Environment variables
```

---

## 🚀 Getting Started

### 1 - Install Dependencies
```sh
npm install
# or
yarn install
```


### 2 - Run the Development Server
```sh
npm run dev
# or
yarn dev
```

### 3 - Access the App
- Open **http://localhost:3000/** in your browser.
- Visit **http://localhost:3000/stocks** to view stock data.

### 4 - vercel Link
- Visit **https://fundingpips-frontend-assessment-ammar-alhasan.vercel.app/** to view stock data.

---

## 📜 Notes
- The project follows a feature-based structure to enhance scalability.
- **HeroUI** is used for a better and more consistent UI experience.
- Some data has been mocked for testing purposes.
- Certain components, like the stock list, are cached since they do not change frequently.
- Real-time stock data is simulated by fetching updates every 5 seconds. However, using WebSockets would be a more efficient approach.
