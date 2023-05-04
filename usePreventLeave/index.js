import React from "react";
import { createRoot } from "react-dom/client";
import { usePreventLeave } from "./usePreventLeave";

const App = () => {
  const { enablePrevent, disablePrevent } = usePreventLeave();

  return (
    <div className="App">
      <button onClick={enablePrevent}>Protect</button>
      {/* Save changes */}
      <button onClick={disablePrevent}>Unprotect</button>
      {/* Leave without saving */}
    </div>
  );
};

export default App;

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<App />);
