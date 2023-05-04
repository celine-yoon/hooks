import { useState, useEffect } from "react";

export const useNetwork = (onChangeFn) => {
  const [status, setStatus] = useState(navigator.onLine || true);
  const handleChange = () => {
    if (typeof onChangeFn === "function") {
      onChangeFn(navigator.onLine);
    }
    setStatus(navigator.onLine);
  };
  useEffect(() => {
    window.addEventListener("online", handleChange);
    window.addEventListener("offline", handleChange);
    return () => {
      window.removeEventListener("online", handleChange);
      window.removeEventListener("offline", handleChange);
    };
  }, []);
  return status;
};
