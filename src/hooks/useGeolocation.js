import { useEffect, useState } from "react";

export default function useGeolocation() {
  const [coords, setCoords] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError("Geolocation not supported");
      return;
    }
    const onSuccess = (pos) => {
      setCoords({ lat: pos.coords.latitude, lon: pos.coords.longitude });
    };
    const onErr = (err) => {
      setError(err.message);
    };
    navigator.geolocation.getCurrentPosition(onSuccess, onErr, {
      timeout: 10000,
    });
  }, []);

  return { coords, error };
}
