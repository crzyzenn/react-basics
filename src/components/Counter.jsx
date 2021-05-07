import React, { useState } from "react";

export default function Counter() {
  // Since React 16.08 -> hooks was added
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <button onClick={handleDecrement} style={{ marginRight: 20 }}>
        Decrement
      </button>
      <h4 style={{ marginRight: 20 }}>{count}</h4>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}
