import useCount from "../hooks/useCount";

type CounterProps = {
  initialCount: number;
  maxCount: number;
  minCount: number;
};

const Counter = ({ initialCount, maxCount, minCount }: CounterProps) => {
  const { count, increment, decrement, reset } = useCount(
    initialCount,
    maxCount,
    minCount
  );

  return (
    <div>
      <h2>Count</h2>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Counter;
