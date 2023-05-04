import React from "react";
import { createRoot } from "react-dom/client";
import { useNotification } from "./useNotification";

const App = () => {
  const triggerNotif = useNotification("Can I take a break in Bangkok?", {
    body: "Let's book a flight!",
  });
  return (
    <div className="App">
      <button onClick={triggerNotif}>Do you need a break?</button>
    </div>
  );
};

export default App;

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<App />);
