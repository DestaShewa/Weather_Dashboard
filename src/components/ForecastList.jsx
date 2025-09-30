import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastList({ forecast, hourly }) {
  if (!forecast || forecast.length === 0) return null;

  // Daily forecast – pick 1 per day
  const daily = forecast.filter((_, i) => i % 8 === 0);

  return (
    <div className="mb-4">
      {/* Daily Forecast */}
      <h3 className="text-xl font-bold mb-2">5-Day Forecast</h3>
      <div className="grid grid-cols-5 gap-2 mb-4">
        {daily.map((f, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-gray-700 p-2 rounded shadow text-center"
          >
            <p>{new Date(f.dt_txt).toLocaleDateString()}</p>
            <WeatherIcon code={f.weather[0].icon} />
            <p>{Math.round(f.main.temp)}°C</p>
            <p className="capitalize">{f.weather[0].main}</p>
          </div>
        ))}
      </div>

      {/* Hourly Forecast */}
      {hourly && hourly.length > 0 && (
        <div>
          <h3 className="text-xl font-bold mb-2">Hourly Forecast</h3>
          <div className="grid grid-cols-6 gap-2 overflow-x-auto pb-2">
            {hourly.map((h, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-gray-700 p-2 rounded shadow text-center min-w-[80px]"
              >
                <p>{new Date(h.dt_txt).getHours()}:00</p>
                <WeatherIcon code={h.weather[0].icon} />
                <p>{Math.round(h.main.temp)}°C</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
