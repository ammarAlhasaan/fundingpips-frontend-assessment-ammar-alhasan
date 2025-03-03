"use client";
import { useEffect, useState} from "react";
import {Card, CardBody, CardFooter, CardHeader, Link, Divider, Suspense, Button} from "@/components/ui";
import {useWatchlistStore} from "@/features/stocks";
import Chart from "./Chart";
import {fetchRandomStockHistory, fetchStockHistory} from "@/features/stocks/api";


export default function StockCardContent({details}: { details: any }) {
  const [chart, setChart] = useState<any[]>([]);
  const {addStock, watchlist} = useWatchlistStore();
  const isInWatchlist = watchlist.includes(details?.ticker);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

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
          if (prev.length === 0) return [response];

          const updatedChart = [...prev, response];

          return updatedChart.length > 20
            ? updatedChart.slice(1)
            : updatedChart;
        });
      } catch (error) {
        console.error("Error fetching stock data:", error);
      }
    };

    fetchData();
    intervalId = setInterval(fetchRandomData, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, [details?.ticker]);
  const currentValue = chart[chart.length - 1];

  if (!details) {
    return <div>Loading...</div>;
  }

  return (
    <Card className="flex">
      <CardHeader>
        <div className="flex justify-between content-between flex-1">
          <div className="flex-1">
            <p className="text-md">
              {details.name} - ({details.ticker})
            </p>
          </div>
          <div className="">
            <p className="text-2xl font-semibold">{currentValue?.close} USD</p>
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
          <span className="text-small text-default-500">
            {details.description}
          </span>
        </div>


      </CardBody>
      <Divider/>
      <CardFooter className="justify-between">
        <Button
          color={isInWatchlist ? "primary" : "default"}
          size="sm"
          onPress={() => addStock(details.ticker)}
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
