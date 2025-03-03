"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
  ChartOptions,
  ChartData,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { useMemo } from "react";

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

export default function Chart({ data }: { data: any[] }) {
  // Use useMemo to optimize re-rendering
  const chartData: ChartData<any> = useMemo(
    () => ({
      labels: data?.map((entry) =>
        new Date(entry.timestamp).toLocaleTimeString(),
      ), // Format timestamps
      datasets: [
        {
          label: "Open Price",
          data: data?.map((entry) => entry.open),
          borderColor: "rgb(53, 162, 235)",
          fill: false,
        },
        {
          label: "Close Price",
          data: data?.map((entry) => entry.close),
          borderColor: "rgb(255, 99, 132)",
          fill: false,
        },
      ],
    }),
    [data],
  );

  return <Line data={chartData} options={options} />;
}
