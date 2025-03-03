"use cache";

import {fetchAllStocks} from "@/features/stocks/api";
import StockSearchClient from "./StockSearchClient";

export default async function StockListContainer() {
  const data = await fetchAllStocks();

  return <StockSearchClient stocks={data.results} />;
}
