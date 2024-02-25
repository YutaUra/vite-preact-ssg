import { useState } from "preact/hooks";

export const Counter = () => {
  const [count, setCount] = useState(100);
  return (
    <div>
      <h2>Counter</h2>

      <p>Count: {count}</p>
      <button type="button" onClick={() => setCount((prev) => prev + 1)}>
        Increment
      </button>
      <button type="button" onClick={() => setCount((prev) => prev - 1)}>
        Decrement
      </button>
    </div>
  );
};
