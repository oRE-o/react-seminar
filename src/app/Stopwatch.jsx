// Create a stopwatch using setInterval and clearInterval.
import { useState } from "react";
import { useRef } from "react";

export const Stopwatch = () => {
  const intervalId = useRef(null);

  const [startTime, setStratTime] = useState(null);
  const [currentTime, setCurrentTime] = useState(null);
  const seconds = currentTime && startTime ? (currentTime - startTime) / 1000 : 0;
  return (
    <>
      <span>{seconds.toFixed(2)} seconds</span>
      <div>
        <button
          onClick={() => {
            const now = Date.now();
            setStratTime(now);
            setCurrentTime(now);

            intervalId.current = setInterval(() => {
              setCurrentTime(Date.now());
            }, 10);
          }}
        >
          Start
        </button>
        <button
          onClick={() => {
            clearInterval(intervalId.current);
          }}
        >
          Stop
        </button>
      </div>
    </>
  );
};
