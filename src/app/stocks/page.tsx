import {StockCard, StockSearch, Watchlist} from "@/features/stocks";


export default async function StocksPage(
  {
    searchParams,
  }: {
    searchParams: Promise<{ ticker: string }>;
  }) {
  const ticker = (await searchParams).ticker;

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Stock Tracker</h1>
      <div className="mb-5">
        <StockSearch/>
      </div>
      <div className="flex flex-col sm:flex-row gap-4">
        {/* Make StockCardContainer larger */}
        <div className="flex-1">
          <StockCard ticker={ticker}/>
        </div>

        {/* Make Watchlist smaller but still flexible */}
        <div className="flex-1">
          <Watchlist/>
        </div>
      </div>
    </main>
  );
}
