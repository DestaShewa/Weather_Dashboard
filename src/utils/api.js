import axios from "axios";

const API_KEY = "YOUR_OPENWEATHERMAP_KEY";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

// Safe fetch helper
async function safeFetch(url) {
  try {
    const res = await axios.get(url);
    return res.data;
  } catch (err) {
    console.error(
      "API fetch error:",
      err.response?.data?.message || err.message
    );
    return null;
  }
}

// Current weather by city
export async function getCurrentWeather(city) {
  if (!city) return null;
  const url = `${BASE_URL}/weather?q=${encodeURIComponent(
    city
  )}&appid=${API_KEY}&units=metric`;
  return await safeFetch(url);
}

// Weather by coordinates
export async function getCurrentWeatherByCoords(lat, lon) {
  const url = `${BASE_URL}/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  return await safeFetch(url);
}

// 5-day forecast
export async function getForecast(city) {
  if (!city) return null;
  const url = `${BASE_URL}/forecast?q=${encodeURIComponent(
    city
  )}&appid=${API_KEY}&units=metric`;
  return await safeFetch(url);
}

// Air Quality + UV
export async function getAirQuality(lat, lon) {
  const url = `${BASE_URL}/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
  return await safeFetch(url);
}
