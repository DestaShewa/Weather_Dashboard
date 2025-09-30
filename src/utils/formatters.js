export function formatTimeFromUnix(unix, locale = "en-US") {
  return new Date(unix * 1000).toLocaleTimeString(locale, {
    hour: "numeric",
    minute: "numeric",
  });
}

export function formatDateFromUnix(unix, locale = "en-US") {
  return new Date(unix * 1000).toLocaleDateString(locale, {
    weekday: "short",
    month: "short",
    day: "numeric",
  });
}

export function round(val) {
  return Math.round(val);
}
