import React from "react";
import { createRoot } from "react-dom/client";
import { useFadeIn } from "./useFadeIn";

const App = () => {
  const fadeInH1 = useFadeIn(1, 2);
  const fadeInP = useFadeIn(5, 5);
  return (
    <div className="App">
      <h1 {...fadeInH1}>Hello</h1>
      <p {...fadeInP}>This will fade in</p>
    </div>
  );
};

export default App;

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<App />);
