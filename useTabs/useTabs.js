import { useState } from "react";

export const content = [
  {
    tab: "Section 1",
    content: "This is the content of Section 1! Click Section 2"
  },
  {
    tab: "Section 2",
    content: "This is the content of Section 2! Click Section 1"
  }
];

export const useTabs = (initialTab, allTabs) => {
  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }
  const [currentIndex, setCurrentIndex] = useState(initialTab);
  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex
  };
};
