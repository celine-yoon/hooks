import defaultAxios from "axios";
import { useState, useEffect } from "react";

export const useAxios = (options, axiosInstance = defaultAxios) => {
  const [state, setState] = useState({
    loading: true,
    data: null,
    error: null
  });

  const [trigger, setTrigger] = useState(0);

  if (!options.url) {
    return;
  }

  const refetch = () => {
    setState({ ...state, loading: true });
    setTrigger(Date.now());
  };

  useEffect(() => {
    axiosInstance(options)
      .then((response) => {
        setState({ ...state, loading: false, data: response });
      })
      .catch((error) => {
        setState({ ...state, loading: false, error });
      });
  }, [trigger]);
  return { ...state, refetch };
};
