"use client";

import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Link,
} from "@/components/ui";
import {useWatchlistStore} from "@/features/stocks";
import {useRouter} from "next/navigation";

export default function Watchlist() {
  const router = useRouter();
  const { watchlist, removeStock, resetWatchlist } = useWatchlistStore();

  return (
    <Card className="w-full mx-auto">
      <CardHeader className="flex gap-3">
        <div className="flex flex-col">
          <p className="text-md">Your Watchlist</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        {watchlist.length === 0 ? (
          <p className="text-gray-500">No stocks in watchlist</p>
        ) : (
          <ul>
            {watchlist.map((ticker) => (
              <li
                key={ticker}
                className="flex justify-between items-center py-2"
              >
                <button
                  className="flex-1 text-start"
                  onClick={() => {
                    router.push(ticker ? `?ticker=${encodeURIComponent(ticker)}` : '?', {scroll: false});
                  }}
                >
                  {ticker}
                </button>
                <button
                  className="text-danger hover:text-danger-300"
                  onClick={() => removeStock(ticker)}
                >
                  X
                </button>
              </li>
            ))}
          </ul>
        )}
      </CardBody>

      {watchlist?.length > 0 && (
        <>
          <Divider/>
          <CardFooter>
            <Link
              color="danger"
              onPress={() => {
                resetWatchlist();
              }}
            >
              Reset Watchlist
            </Link>
          </CardFooter>
        </>
      )}
    </Card>
  );
}
