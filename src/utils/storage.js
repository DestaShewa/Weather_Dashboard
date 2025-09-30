export function getFavorites() {
  try {
    return JSON.parse(localStorage.getItem("favorites") || "[]");
  } catch {
    return [];
  }
}
export function saveFavorites(list) {
  localStorage.setItem("favorites", JSON.stringify(list));
}

export function getLastCity() {
  return localStorage.getItem("last_city") || "";
}
export function saveLastCity(city) {
  localStorage.setItem("last_city", city);
}

export function getTheme() {
  return localStorage.getItem("theme") || "light";
}
export function saveTheme(theme) {
  localStorage.setItem("theme", theme);
}
