import React from "react";

export default function WeatherIcon({ code }) {
  if (!code) return null;
  const url = `https://openweathermap.org/img/wn/${code}@2x.png`;
  return <img src={url} alt="weather icon" className="w-16 h-16" />;
}
