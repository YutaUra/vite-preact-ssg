import { useState } from "react";

export const App = () => {
  const [count, setCount] = useState(100);
  return (
    <div>
      <h1>Hello World</h1>

      <p>Count: {count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
      <button onClick={() => setCount((prev) => prev - 1)}>Decrement</button>
    </div>
  );
};
