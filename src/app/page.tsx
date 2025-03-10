"use client";
import {Link} from "@/components/ui";


export default function Home() {
  return (
    <div
      className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-3xl font-bold text-center sm:text-left">
          Welcome to Stock Tracker
        </h1>
        <p className="text-gray-600 text-lg text-center sm:text-left">
          Track real-time stock prices and manage your watchlist easily.
        </p>
        <Link href="/stocks">
          Explore Stocks 🚀
        </Link>
      </main>
    </div>
  );
}
