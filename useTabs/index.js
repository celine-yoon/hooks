import React from "react";
import { createRoot } from "react-dom/client";
import { content, useTabs } from "./useTabs";

const App = () => {
  const { currentItem, changeItem } = useTabs(0, content);
  return (
    <div className="App">
      {content.map((section, index) => (
        <button key={index} onClick={() => changeItem(index)}>
          {section.tab}
        </button>
      ))}
      <div>{currentItem.content}</div>
    </div>
  );
};

export default App;

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<App />);
