import React from "react";
import { createRoot } from "react-dom/client";
import { useBeforeLeave } from "./useBeforeLeave";

const App = () => {
  const beforeLeave = () => console.log("Mouse left the page...");
  useBeforeLeave(beforeLeave);
  return (
    <div className="App">
      <h1> Alerts when mouse leaves the page from the top!</h1>
    </div>
  );
};

export default App;

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<App />);
