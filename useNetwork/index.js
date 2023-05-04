import React from "react";
import { createRoot } from "react-dom/client";
import { useNetwork } from "./useNetwork";

const App = () => {
  const handleNetworkChange = (isOnline) => {
    console.log(isOnline ? "We just went online" : "We just got offline");
  };
  const onLine = useNetwork(handleNetworkChange);

  return (
    <div className="App">
      <h1>{onLine ? "Online" : "Offline"}</h1>
    </div>
  );
};

export default App;

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<App />);
