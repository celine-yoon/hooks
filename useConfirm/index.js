import React from "react";
import { createRoot } from "react-dom/client";
import { useConfirm } from "./useConfirm";

const App = () => {
  const deleteCode = () => console.log("No more coding :(");
  const abort = () => console.log("Yay! More coding!");
  const confirmDelete = useConfirm("Are you sure?", deleteCode, abort);
  return (
    <div className="App">
      <button onClick={confirmDelete}>
        Coding is frustrating. No more coding!
      </button>
    </div>
  );
};

export default App;

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<App />);
