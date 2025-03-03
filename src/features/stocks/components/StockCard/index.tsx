"use cache";

import {fetchStockPrice} from "@/features/stocks/api";
import StockCardContent from "./StockCardContent";
export default async function StockCard({ ticker }: any) {
  const data = await fetchStockPrice(ticker);

  // Send data to the client component
  return <StockCardContent details={data.results} />;
}
