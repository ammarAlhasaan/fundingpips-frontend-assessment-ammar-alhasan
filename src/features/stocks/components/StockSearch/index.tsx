"use cache";

import {fetchAllStocks} from "@/features/stocks/api";
import StockSearchContent from "./StockSearchContent";

export default async function StockListContainer() {
  const data = await fetchAllStocks();

  return <StockSearchContent stocks={data.results} />;
}
