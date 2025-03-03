"use cache";

import {fetchStockPrice} from "@/features/stocks/api";
import StockCardContent from "./StockCardContent";
export default async function StockCard({ ticker }: { ticker: string }) {
  const data = await fetchStockPrice(ticker);

  return <StockCardContent details={data.results} ticker={ticker} />;
}
