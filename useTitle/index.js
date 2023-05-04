import React from "react";
import { createRoot } from "react-dom/client";
import { useTitle } from "../useTitle";

const App = () => {
  const titleUpdater = useTitle("Loading...");
  setTimeout(() => titleUpdater("Home"), 3000);
  return (
    <div className="App">
      <div>Look at my title... It will turn "Home" in 3sec!</div>
    </div>
  );
};

export default App;

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<App />);
