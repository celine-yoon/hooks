import { useEffect, useRef } from "react";

export const useClick = (onClickFn) => {
  if (typeof onClickFn !== "function") {
    return;
  }

  const element = useRef();
  useEffect(() => {
    if (element.current) {
      element.current.addEventListener("click", onClickFn);
    }
    return () => {
      if (element.current) {
        element.current.removeEventListener("click", onClickFn);
      }
    };
  }, []);
  return element;
};
