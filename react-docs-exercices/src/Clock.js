import React from "react";
import { useState, useEffect } from "react";

export default function Clock() {
  const [date, setDate] = useState(new Date());
  const tick = () => setDate(new Date());

  useEffect(() => {
    const timerClock = setInterval(tick,1000)
    return () => {
      clearInterval(timerClock);
    }
  }, [])
  return (
    <div>
      <h1>Il est {date.toLocaleTimeString()}</h1>
    </div>
  );
}
