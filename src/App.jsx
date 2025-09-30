import React from "react";
import Dashboard from "./pages/Dashboard";
import DarkModeToggle from "./components/DarkModeToggle";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-4">
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold">Weather Dashboard</h1>
        <DarkModeToggle />
      </header>
      <Dashboard />
    </div>
  );
}

export default App;
