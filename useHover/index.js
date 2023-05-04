import React from "react";
import { createRoot } from "react-dom/client";
import { useHover } from "./useHover";

const App = () => {
  const onHover = () => console.log("Somebody hovered!");
  const element = useHover(onHover);

  return (
    <div className="App">
      <h1 ref={element}>Hello</h1>
    </div>
  );
};

export default App;

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<App />);
