const API_KEY = "c9cd67199ee76a413ba775c33176b8fa"; // 🔑 Replace with your OpenWeatherMap key
const BASE_URL = "https://api.openweathermap.org/data/2.5/";

export async function getCurrentWeather(city) {
  try {
    const response = await fetch(
      `${BASE_URL}weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    if (!response.ok) throw new Error("City not found");
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function getForecast(city) {
  try {
    const response = await fetch(
      `${BASE_URL}forecast?q=${city}&appid=${API_KEY}&units=metric`
    );
    if (!response.ok) throw new Error("Forecast not available");
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}
