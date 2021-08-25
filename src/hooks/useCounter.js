import { useState } from "react";

const useCounter = (initialState = 10) => {
  const [state, setState] = useState(initialState);

  const increment = () => {
    setState(state);
  };
  const decrement = () => {
    setState(state);
  };
  const reset = () => {
    setState(initialState);
  };

  return {
    state,
    increment,
    decrement,
    reset,
  };
};

export default useCounter;
