export const useConfirm = (message = "", onConfirmFn, onCancelFn) => {
  if (!onConfirmFn || typeof onConfirmFn !== "function") {
    return;
  }
  if (onCancelFn && typeof onCancelFn !== "function") {
    return; //not mandatory fn
  }
  const confirmAction = () => {
    if (confirm(message)) {
      onConfirmFn();
    } else {
      onCancelFn();
    }
  };
  return confirmAction;
};
