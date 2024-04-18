import { usePrevious } from "@uidotdev/usehooks";
import { useState } from "react";

const Previous = () => {
  const [count, setCount] = useState(0);

  const prevCount = usePrevious(count);

  return (
    <div>
      <h2>Previous</h2>
      <h3>
        Now: {count}, before: {prevCount}
      </h3>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default Previous;
