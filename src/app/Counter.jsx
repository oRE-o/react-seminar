// Increment the count when the button is clicked
import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <button
        onClick={() => {
          setCount((curr) => curr + 1);
        }}
      >
        {" "}
        Clicked {count} times
      </button>
    </>
  );
};
