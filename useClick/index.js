import React from "react";
import { createRoot } from "react-dom/client";
import { useClick } from "./useClick";

const App = () => {
  const sayHello = () => console.log("I just clicked useRef element!");
  const title = useClick(sayHello);
  return (
    <div className="App">
      <h1 ref={title}>Hello</h1>
    </div>
  );
};

export default App;

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<App />);
