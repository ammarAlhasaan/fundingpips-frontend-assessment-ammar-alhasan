
export interface StockTrend {
  timestamp: string;
  open: number;
  high?: number;
  low?: number;
  close: number;
  volume?: number;
}
