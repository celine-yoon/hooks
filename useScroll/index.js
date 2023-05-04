import React from "react";
import { createRoot } from "react-dom/client";
import { useScroll } from "./useScroll";

const App = () => {
  const { x, y } = useScroll();

  return (
    <div className="App">
      <h1>
        We are in: {x} / {y}
      </h1>
    </div>
  );
};

export default App;

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<App />);
