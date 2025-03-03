"use client";
import {
  CategoryScale,
  Chart as ChartJS,
  ChartOptions,
  Filler,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import {Line} from "react-chartjs-2";
import {useMemo} from "react";
import {StockTrend} from "@/features/stocks/types";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
);

// Chart.js options
export const options: ChartOptions<"line"> = {
  responsive: true,
  animation: {
    duration: 300, // Smooth animations for new data
  },
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Stock Price History",
    },
  },
};


interface ChartProps {
  data: StockTrend[];
}

export default function Chart({data}: ChartProps) {
  const chartData: {
    datasets: ({ borderColor: string; data: number[]; label: string; fill: boolean } | {
      borderColor: string;
      data: number[];
      label: string;
      fill: boolean
    })[];
    labels: string[]
  } = useMemo(
    () => ({
      labels: data?.map((entry) => new Date(entry.timestamp).toLocaleTimeString()) || [],
      datasets: [
        {
          label: "Open Price",
          data: data?.map((entry) => entry.open) ?? [],
          borderColor: "rgb(53, 162, 235)",
          fill: false,
        },
        {
          label: "Close Price",
          data: data?.map((entry) => entry.close) ?? [],
          borderColor: "rgb(255, 99, 132)",
          fill: false,
        },
      ],
    }),
    [data],
  );

  return <Line
    data={chartData}
    options={options}/>;
}
