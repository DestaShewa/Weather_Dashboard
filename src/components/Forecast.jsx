export default function Forecast({ data }) {
  if (!data || !data.list) return null;

  // Pick 1 forecast every 8 steps (24h)
  const dailyData = data.list.filter((_, index) => index % 8 === 0);

  return (
    <div className="max-w-4xl mx-auto mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
      {dailyData.map((item, idx) => (
        <div
          key={idx}
          className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow text-center"
        >
          <h3 className="font-bold">
            {new Date(item.dt_txt).toLocaleDateString("en-US", {
              weekday: "short",
            })}
          </h3>
          <p>🌡 {item.main.temp}°C</p>
          <p>{item.weather[0].main}</p>
        </div>
      ))}
    </div>
  );
}
