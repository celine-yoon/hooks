import React from "react";
import { createRoot } from "react-dom/client";
import { useInput } from "./useInput";

const App = () => {
  const validator = (value) => !value.includes("@");
  //  const maxLen = value => value.length <10;    length validator
  const name = useInput("Celine", validator);
  return (
    <div className="App">
      <h1>Hello</h1>
      <input placeholder="Name" {...name.props} />
    </div>
  );
};

export default App;

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<App />);
