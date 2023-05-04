import React from "react";
import { createRoot } from "react-dom/client";
import { useScroll } from "./useScroll";

const App = () => {
  const { x, y } = useScroll();
  console.log(x, y);
  return (
    <div className="App" style={{ width: "1000vw", height: "1000vh" }}>
      <h1
        style={{
          position: "fixed",
          color: y > 10 || x > 10 ? "red" : "blue",
        }}
      >
        We are in: {x} / {y}
      </h1>
    </div>
  );
};

export default App;

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<App />);
