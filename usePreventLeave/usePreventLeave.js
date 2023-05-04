export const usePreventLeave = () => {
  const listener = (event) => {
    event.preventDefault();
    event.returnValue = "";
  };

  const enablePrevent = () => window.addEventListener("beforeunload", listener); //"beforeunload" : execute fn before closing a tab
  const disablePrevent = () =>
    window.removeEventListener("beforeunload", listener);

  return { enablePrevent, disablePrevent };
};
