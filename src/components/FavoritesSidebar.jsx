import React from "react";

export default function FavoritesSidebar({ favorites, onSelect }) {
  return (
    <div className="w-40 bg-gray-100 dark:bg-gray-900 p-2 rounded shadow h-fit">
      <h4 className="font-bold mb-2">Favorites</h4>
      {favorites.length === 0 && <p className="text-sm">No favorites yet.</p>}
      <ul>
        {favorites.map((city, idx) => (
          <li
            key={idx}
            className="cursor-pointer p-1 hover:bg-gray-300 dark:hover:bg-gray-700 rounded"
            onClick={() => onSelect(city)}
          >
            {city}
          </li>
        ))}
      </ul>
    </div>
  );
}
