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

export interface ChartData {
  timestamp: string;
  open: number;
  high?: number;
  low?: number;
  close: number;
  volume?: number;
}

interface ChartProps {
  data: ChartData[];
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
      labels: data?.map((entry) => new Date(entry.timestamp).toLocaleTimeString()) || [], // ✅ Ensure labels is an array
      datasets: [
        {
          label: "Open Price",
          data: data?.map((entry) => entry.open) ?? [], // ✅ Ensure data is an array
          borderColor: "rgb(53, 162, 235)",
          fill: false,
        },
        {
          label: "Close Price",
          data: data?.map((entry) => entry.close) ?? [], // ✅ Ensure data is an array
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
