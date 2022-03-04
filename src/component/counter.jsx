import { useState } from "react";

export function Counter({ value }) {
  const [counter, setCounter] = useState(value);
  console.log(counter);

  const handleChange = (value) => {
    setCounter(counter + value);
  };

  const doubleValue = (value) => {
    setCounter(counter * value);
  };
  return (
    <div>
      <h1>Counter:{counter}</h1>

      <button
        onClick={() => {
          handleChange(1);
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          handleChange(-1);
        }}
      >
        Decrement
      </button>

      <button
        onClick={() => {
          doubleValue(2);
        }}
      >
        Double
      </button>
    </div>
  );
}
