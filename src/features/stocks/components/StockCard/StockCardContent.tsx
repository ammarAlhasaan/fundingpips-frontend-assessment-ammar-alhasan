"use client";
import {useEffect, useState} from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Link,
  SkeletonLoading,
  Suspense
} from "@/components/ui";
import {useWatchlistStore} from "@/features/stocks";
import Chart, {ChartData} from "./Chart";
import {fetchRandomStockHistory, fetchStockHistory} from "@/features/stocks/api";

export interface StockData {
  ticker: string;
  name: string;
  market: string;
  locale: string;
  primary_exchange: string;
  type: string;
  active: boolean;
  currency_name: string;
  cik: string;
  composite_figi: string;
  share_class_figi: string;
  market_cap: number;
  phone_number: string;
  address: {
    address1: string;
    address2?: string; // Optional
    city: string;
    state: string;
    postal_code: string;
  };
  description: string;
  sic_code: string;
  sic_description: string;
  ticker_root: string;
  homepage_url: string;
  total_employees: number;
  list_date: string;
  branding: {
    logo_url: string;
    icon_url: string;
  };
  share_class_shares_outstanding: number;
  weighted_shares_outstanding: number;
  round_lot: number;
}

export default function StockCardContent({details, ticker}: { details: StockData, ticker: string }) {


  const [chart, setChart] = useState<ChartData[]>([]);
  const {addStock, watchlist, removeStock} = useWatchlistStore();
  const isInWatchlist = watchlist.includes(details?.ticker);

  const currentValue = chart[chart.length - 1];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchStockHistory(20);

        setChart(response);
      } catch (error) {
        console.error("Error fetching stock data:", error);
      }
    };

    const fetchRandomData = async () => {
      try {
        const response = await fetchRandomStockHistory();
        if (!response) return;

        setChart((prev) => {
          if (!prev || prev.length === 0) return [response];

          const updatedChart = [...prev, response];

          return updatedChart.length > 20 ? updatedChart.slice(1) : updatedChart;
        });
      } catch (error) {
        console.error("Error fetching stock data:", error);
      }
    };

    fetchData();
    const intervalId = setInterval(fetchRandomData, 5000);

    return () => clearInterval(intervalId);
  }, [details?.ticker]);


  if (!details || !ticker) {
    return <Card className="flex h-[400px]">
      {!ticker ? <div className="flex-1 content-center text-center">
        <p className="text-content font-semibold">Search to see a result...</p>
      </div> : <SkeletonLoading/>}
    </Card>;
  }

  return (
    <Card className="flex w-full">
      <CardHeader>
        <div className="flex justify-between content-between flex-1">
          <div className="flex-1">
            <p className="text-md">
              {details.name} - ({details.ticker})
            </p>
          </div>
          <div className="">
            <span className="text-2xl font-semibold">{currentValue?.close} </span>
            <span className="text-xl font-semibold">USD</span>
          </div>
        </div>
      </CardHeader>
      <Divider/>
      <CardBody>
        <div className="flex">
          <div className="flex-1" style={{maxWidth: "100%"}}>
            <Suspense>
              <Chart key={details.ticker} data={chart}/>
            </Suspense>
          </div>
        </div>
        <div className="flex">
          <p className="mt-4 text-small text-content4">
            {details.description}
          </p>
        </div>


      </CardBody>
      <Divider/>
      <CardFooter className="justify-between">
        <Button
          color={isInWatchlist ? "primary" : "default"}
          size="sm"
          onPress={() => {
            if (isInWatchlist) {
              removeStock(details.ticker)
            } else {
              addStock(details.ticker)
            }
          }}
        >
          {isInWatchlist ? "Added to Watchlist" : "Add to Watchlist"}
        </Button>
        <Link isExternal showAnchorIcon href={details.homepage_url}>
          Visit {details.name} website
        </Link>
      </CardFooter>
    </Card>
  );
}
