import { useState } from "react";

const useCount = (initialCount: number, maxCount: number, minCount: number) => {
  const [count, setCount] = useState(initialCount);

  const increment = () => {
    maxCount > count ? setCount(count + 1) : setCount(count);
  };

  const decrement = () => {
    minCount < count ? setCount(count - 1) : setCount(count);
  };

  const reset = () => {
    setCount(initialCount);
  };

  return {
    count,
    increment,
    decrement,
    reset,
  };
};

export default useCount;
