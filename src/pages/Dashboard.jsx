import React, { useState, useEffect } from "react";
import axios from "axios";

import SearchBar from "../components/SearchBar";
import WeatherCard from "../components/WeatherCard";
import ForecastList from "../components/ForecastList";
import HourlyChart from "../components/HourlyChart";
import Recommendation from "../components/Recommendation";
import AQICard from "../components/AQICard";
import FavoritesSidebar from "../components/FavoritesSidebar";
import MapView from "../components/MapView";
import Spinner from "../components/Spinner";

const API_KEY = "c9cd67199ee76a413ba775c33176b8fa";

export default function Dashboard() {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [hourly, setHourly] = useState([]);
  const [aqi, setAqi] = useState(null);
  const [loading, setLoading] = useState(false);
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );

  const fetchWeather = async (city) => {
    if (!city) return;
    try {
      setLoading(true);

      // Current weather
      const { data: weatherData } = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      setWeather(weatherData);

      // Forecast (5-day / 3-hour)
      const { data: forecastData } = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
      );
      setForecast(forecastData.list);

      // Hourly next 24h
      setHourly(forecastData.list.slice(0, 8));

      // Air Quality (requires lat/lon)
      const { data: aqiData } = await axios.get(
        `https://api.openweathermap.org/data/2.5/air_pollution?lat=${weatherData.coord.lat}&lon=${weatherData.coord.lon}&appid=${API_KEY}`
      );
      setAqi(aqiData);

      setLoading(false);
    } catch (err) {
      console.error("API fetch error:", err);
      alert("City not found or API error.");
      setLoading(false);
    }
  };

  const handleSearch = (city) => {
    fetchWeather(city);
    if (!favorites.includes(city)) {
      const updated = [...favorites, city];
      setFavorites(updated);
      localStorage.setItem("favorites", JSON.stringify(updated));
    }
  };

  // Optional: auto-detect user's location
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        try {
          const { data } = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
          );
          handleSearch(data.name);
        } catch (err) {
          console.error(err);
        }
      });
    }
  }, []);

  return (
    <div className="flex flex-col md:flex-row gap-4">
      {/* Favorites Sidebar */}
      <FavoritesSidebar
        favorites={favorites}
        onSelect={(city) => fetchWeather(city)}
      />

      {/* Main Content */}
      <div className="flex-1">
        <SearchBar onSearch={handleSearch} />
        {loading && <Spinner />}
        {weather && (
          <>
            <WeatherCard weather={weather} />
            <Recommendation weather={weather} />
            <AQICard aqi={aqi} />
            <ForecastList forecast={forecast} hourly={hourly} />
            <HourlyChart hourly={hourly} />
            <MapView
              lat={weather.coord.lat}
              lon={weather.coord.lon}
              city={weather.name}
            />
          </>
        )}
      </div>
    </div>
  );
}
