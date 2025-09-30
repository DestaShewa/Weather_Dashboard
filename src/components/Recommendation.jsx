import React from "react";

export default function Recommendation({ weather }) {
  if (!weather) return null;

  const temp = weather.main.temp;
  const desc = weather.weather[0].main.toLowerCase();
  let msg = "Have a nice day!";

  if (desc.includes("rain")) msg = "☔ Take an umbrella, rain expected today.";
  else if (desc.includes("clear") && temp >= 18)
    msg = "☀️ Great day for outdoor activities.";
  else if (temp < 10) msg = "🧥 It's cold outside, dress warmly.";

  return (
    <div className="bg-yellow-100 dark:bg-yellow-800 p-3 rounded mb-4">
      <p className="font-semibold">{msg}</p>
    </div>
  );
}
