import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

export default function HourlyChart({ hourly }) {
  if (!hourly || hourly.length === 0) return null;

  const labels = hourly.map((h) => new Date(h.dt_txt).getHours() + ":00");
  const temps = hourly.map((h) => h.main.temp);
  const rain = hourly.map((h) => h.rain?.["3h"] || 0);

  const data = {
    labels,
    datasets: [
      {
        label: "Temperature °C",
        data: temps,
        borderColor: "rgba(59,130,246,1)",
        backgroundColor: "rgba(59,130,246,0.2)",
      },
      {
        label: "Rain mm",
        data: rain,
        borderColor: "rgba(16,185,129,1)",
        backgroundColor: "rgba(16,185,129,0.2)",
      },
    ],
  };

  return (
    <div className="bg-white dark:bg-gray-700 p-4 rounded shadow mb-4">
      <h3 className="text-xl font-bold mb-2">Next 24h Forecast</h3>
      <Line data={data} />
    </div>
  );
}
