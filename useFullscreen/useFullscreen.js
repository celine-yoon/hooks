import { useRef } from "react";

export const useFullscreen = (onFullFn) => {
  const element = useRef();
  const runFn = (isFull) => {
    if (onFullFn && typeof onFullFn === "function") {
      onFullFn(isFull);
    }
  };
  const triggerFull = () => {
    if (element.current) {
      if (element.current.requestFullscreen) {
        element.current.requestFullscreen(); // Request Fullscreen w/ element
      } else if (element.current.mozRequestFullScreen) {
        element.current.mozRequestFullScreen();
      } else if (element.current.webkitRequestFullscreen) {
        element.current.webkitRequestFullscreen();
      } else if (element.current.msRequestFullscreen) {
        element.current.msRequestFullscreen();
      }
      runFn(true);
    }
  };
  const exitFull = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen(); // Request exit Fullscreen via document
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
      runFn(false);
    }
  };
  return { element, triggerFull, exitFull };
};
