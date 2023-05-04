import { useEffect } from "react";

export const useBeforeLeave = (onBeforeFn) => {
  if (typeof onBeforeFn !== "function") {
    return;
  }

  const handle = (event) => {
    const { clientY } = event;
    if (clientY <= 0) {
      onBeforeFn();
    }
  };

  useEffect(() => {
    document.addEventListener("mouseleave", handle);
    return () => document.removeEventListener("mouseleave", handle);
  }, []);
};
