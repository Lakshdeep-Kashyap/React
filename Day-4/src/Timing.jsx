import { useEffect, useState } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(true);

  useEffect(() => {
    let interval;

    if (running) {
      console.log("⏱️ Timer started");
      interval = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    } else {
      setSeconds(0);
      console.log("🧹 Timer stopped");
    }

    return () => {
      clearInterval(interval);
      console.log("Cleanup done");
    };
  }, [running]);

  return (
    <>
      <h2>Seconds: {seconds}</h2>
      <button onClick={() => setRunning(!running)}>
        {running ? "Stop" : "Start"}
      </button>
    </>
  );
}

export default Timer;
