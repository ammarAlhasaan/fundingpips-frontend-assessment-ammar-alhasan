export async function fetchAllStocks() {
  const all = `https://api.polygon.io/v3/reference/tickers?type=CS&market=stocks&active=true&limit=100&apiKey=DnbfhNmwKypA3zlGQEiWapCT3G03lY8G`;
  const res = await fetch(all);

  if (!res.ok) console.log("Failed to fetch stock data");

  return res.json();
}

export async function fetchStockPrice(ticker: string) {
  const all = `https://api.polygon.io/v3/reference/tickers/${ticker}?apiKey=DnbfhNmwKypA3zlGQEiWapCT3G03lY8G`;
  const res = await fetch(all, {
    next: { revalidate: 60 },
  });

  if (!res.ok) console.log("Failed to fetch stock data");

  return res.json();
}

export async function fetchStockHistory(limit: number = 10) {
  try {
    // Simulate API request with a mock JSON file
    const response = await fetch("/mock/stockHistory.json");

    if (!response.ok) throw new Error("Failed to fetch stock history");

    const data = await response.json();

    // Apply the limit (return only the first `limit` items)
    return data.slice(0, limit);
  } catch (error) {
    console.error("Error fetching stock history:", error);

    return []; // Return an empty array on failure
  }
}

export async function fetchRandomStockHistory() {
  try {
    const response = await fetch("/mock/stockHistory.json");

    if (!response.ok) throw new Error("Failed to fetch stock history");

    const data = await response.json();

    if (data.length === 0) return null; // Prevent errors if data is empty

    // Select a random entry
    const randomEntry = data[Math.floor(Math.random() * data.length)];

    // Update timestamp to the current time
    const updatedEntry = {
      ...randomEntry,
      timestamp: new Date().toISOString(), // Set current timestamp
    };

    return updatedEntry;
  } catch (error) {
    console.error("Error fetching random stock history:", error);

    return null;
  }
}
