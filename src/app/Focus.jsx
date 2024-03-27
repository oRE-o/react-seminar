// Focus input on button click
import { useRef } from "react";

export const Focus = () => {
  const inputRef = useRef();

  return (
    <>
      <input ref={inputRef} type="text" />
      <button
        onClick={() => {
          console.log(inputRef.current);
          inputRef.current.Focus;
        }}
      >
        Focus the input
      </button>
    </>
  );
};
