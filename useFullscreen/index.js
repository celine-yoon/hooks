import React from "react";
import { createRoot } from "react-dom/client";
import { useFullscreen } from "./useFullscreen";

const App = () => {
  const onChange = (isFull) =>
    console.log(isFull ? "We are in Fullscreen" : "We are not in Fullscreen");
  const { element, triggerFull, exitFull } = useFullscreen(onChange);

  return (
    <div className="App">
      <div ref={element} style={{ height: "1000vh" }}>
        <button onClick={triggerFull}>Make Fullscreen</button>
        <button onClick={exitFull}>Exit Fullscreen</button>
        <img src="https://images.unsplash.com/photo-1619382803627-a1d7b7218224?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2233&q=80" />
      </div>
    </div>
  );
};

export default App;

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<App />);
