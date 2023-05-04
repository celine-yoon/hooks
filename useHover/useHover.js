import { useEffect, useRef } from "react";

export const useHover = (onHoverFn) => {
  if (typeof onHoverFn !== "function") {
    return;
  }

  const element = useRef();
  useEffect(() => {
    if (element.current) {
      element.current.addEventListener("mouseenter", onHoverFn);
    }
    return () => {
      if (element.current) {
        element.current.removeEventListener("mouseenter", onHoverFn);
      }
    };
  }, []);
  return element;
};
