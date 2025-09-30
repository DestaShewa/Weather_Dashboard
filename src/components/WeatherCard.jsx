import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherCard({ weather }) {
  if (!weather) return null;
  const { main, weather: w, wind, name } = weather;

  return (
    <div className="bg-blue-100 dark:bg-gray-800 p-6 rounded-xl shadow-md mb-4">
      <h2 className="text-2xl font-bold mb-2">{name}</h2>
      <div className="flex items-center gap-4">
        <WeatherIcon code={w[0].icon} />
        <div>
          <p className="text-xl capitalize">{w[0].description}</p>
          <p className="text-3xl font-bold">{Math.round(main.temp)}°C</p>
          <p>Humidity: {main.humidity}%</p>
          <p>Wind: {wind.speed} m/s</p>
        </div>
      </div>
    </div>
  );
}
