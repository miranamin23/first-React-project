import { useState, useEffect, useRef } from "react";

function ExpoGrow({ setScore, multiplier }) {
  const [time, setTime] = useState(0);
  const intervalRef = useRef(null);
  const multiplierRef = useRef(multiplier);

  useEffect(() => {
    multiplierRef.current = multiplier;
  }, [multiplier]);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
      setScore((prevScore) => prevScore + multiplierRef.current);
    }, 1000);

    return () => clearInterval(intervalRef.current);
  }, [setScore]);

  return <p>{time} Sekunden</p>;
}

export default ExpoGrow;
