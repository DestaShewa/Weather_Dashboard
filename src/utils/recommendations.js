export function getRecommendation({
  weatherDesc = "",
  temp = 0,
  pop = 0,
  wind = 0,
  uvi = null,
  aqi = null,
}) {
  const desc = (weatherDesc || "").toLowerCase();

  if (aqi && aqi >= 4)
    return "😷 Air quality poor — consider wearing a mask if outdoors.";
  if (uvi !== null && uvi >= 8)
    return "☀️ High UV index — use sunscreen and protective clothing.";
  if (desc.includes("rain") || pop >= 0.5)
    return "☔ Take an umbrella — rain likely today.";
  if (temp >= 30) return "🥵 It's hot — drink water and avoid prolonged sun.";
  if (temp >= 18 && temp <= 25 && !desc.includes("cloud"))
    return "🏃 Great weather for outdoor activities.";
  if (wind > 10) return "💨 Windy — secure loose items and dress warmly.";
  return "🌤️ Typical conditions — have a good day!";
}
