import React from "react";

export default function AQICard({ aqi }) {
  if (!aqi || !aqi.list) return null;

  const index = aqi.list[0].main.aqi;
  let aqiMsg = "Air quality is good 😃";
  if (index === 2) aqiMsg = "Air quality is fair 🙂";
  if (index === 3) aqiMsg = "Air quality is moderate 😐";
  if (index === 4) aqiMsg = "Air quality is poor 😷";
  if (index === 5) aqiMsg = "Air quality is very poor ⚠️";

  return (
    <div className="bg-red-100 dark:bg-red-800 p-3 rounded mb-4">
      <p className="font-semibold">
        AQI: {index} – {aqiMsg}
      </p>
    </div>
  );
}
