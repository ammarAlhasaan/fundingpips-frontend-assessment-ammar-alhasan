"use client";
import {useEffect, useState} from "react";
import Fuse from "fuse.js";
import {Autocomplete, AutocompleteItem} from "@/components/ui";
import {useRouter, useSearchParams} from "next/navigation";

export default function StockSearchContent({stocks}: { stocks: any[] }) {
  const router = useRouter();
  const searchParams = useSearchParams()

  const ticker = searchParams.get('ticker') || ""

  const [filteredStocks, setFilteredStocks] = useState(stocks);


  useEffect(() => {
    if (!ticker) {
      setFilteredStocks(stocks); // Reset to all stocks when input is empty
      return;
    }

    const fuse = new Fuse(stocks, {
      keys: ["ticker", "name"],
      threshold: 0.3,
    });

    const result = fuse.search(ticker).map((res) => res.item);
    setFilteredStocks(result);

  }, [ticker, stocks]);

  return (
    <div className="relative w-full">
      <Autocomplete
        items={filteredStocks}
        label="Stocks"
        placeholder="Type to search..."
        variant="bordered"
        onSelectionChange={(event) => {
          router.push(event ? `?ticker=${encodeURIComponent(event)}` : '?', {scroll: false});
        }}
        defaultSelectedKey={ticker}
        selectedKey={ticker}
      >
        {(stock) => (
          <AutocompleteItem
            textValue={stock.ticker + ' - ' + stock.name}
            id={stock.ticker}
            key={stock.ticker} className="capitalize">
            {stock.ticker} - {stock.name}
          </AutocompleteItem>
        )}
      </Autocomplete>
    </div>
  );
}
