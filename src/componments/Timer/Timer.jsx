// Timer.jsx
import { useState, useRef } from "react";
import Button from "../Button/button";
import SmallButton from "../Button/SmallButton";

function Timer() {
  const [timeLeft, setTimeLeft] = useState(1500); // Focus
  const [breakLeft, setBreakLeft] = useState(900); // Long break
  const [shortBreakLeft, setShortBreakLeft] = useState(300); // Short break
  const [isRunning, setIsRunning] = useState(false);
  const [mode, setMode] = useState("focus");
  const [focusCount, setFocusCount] = useState(0);

  const intervalRef = useRef(null);

  const clearTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setIsRunning(false);
  };

  const startTimer = () => {
    if (intervalRef.current !== null) return;
    setIsRunning(true);

    if (mode === "focus") {
      intervalRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearTimer();
            nextSession();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else if (mode === "shortBreak") {
      intervalRef.current = setInterval(() => {
        setShortBreakLeft((prev) => {
          if (prev <= 1) {
            clearTimer();
            nextSession();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else if (mode === "longBreak") {
      intervalRef.current = setInterval(() => {
        setBreakLeft((prev) => {
          if (prev <= 1) {
            clearTimer();
            nextSession();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
  };

  const stopTimer = () => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
      setIsRunning(false);
    }
  };

  const resetTimer = () => {
    clearTimer();
    setFocusCount(0);

    switch (mode) {
      case "focus":
        setTimeLeft(1500);
        break;
      case "shortBreak":
        setShortBreakLeft(300);
        break;
      case "longBreak":
        setBreakLeft(900);
        break;
    }
  };

  const startFocus = () => {
    clearTimer();
    setMode("focus");
    setTimeLeft(1500);
  };

  const startShortBreak = () => {
    clearTimer();
    setMode("shortBreak");
    setShortBreakLeft(300);
  };

  const startLongBreak = () => {
    clearTimer();
    setMode("longBreak");
    setBreakLeft(900);
  };

  const nextSession = () => {
    if (mode === "focus") {
      setFocusCount((prev) => prev + 1);
      if ((focusCount + 1) % 4 === 0) {
        setMode("longBreak");
        setBreakLeft(900);
      } else {
        setMode("shortBreak");
        setShortBreakLeft(300);
      }
    } else {
      setMode("focus");
      setTimeLeft(1500);
    }
  };

  const getDisplayTime = () => {
    let time = 0;
    if (mode === "focus") time = timeLeft;
    else if (mode === "shortBreak") time = shortBreakLeft;
    else time = breakLeft;

    const minutes = String(Math.floor(time / 60)).padStart(2, "0");
    const seconds = String(time % 60).padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  return (
    <section className="pomodoro-wrapper">
      <section className="time-display">
        <p>{getDisplayTime()}</p>
      </section>

      <section className="start-stop__btns">
        {isRunning ? (
          <Button onClick={stopTimer} type="stop" text="Stop" />
        ) : (
          <Button onClick={startTimer} type="start" text="Start" />
        )}
        <Button onClick={startFocus} type="focus" text="Focus" />
        <section className="small-btns__wrapper">
            <SmallButton onClick={startShortBreak} type="short-break" text="Short Break" />
        <SmallButton onClick={startLongBreak} type="long-break" text="Long Break" />
        </section>
        
        <Button onClick={resetTimer} type="reset" text="Reset" />
      </section>
    </section>
  );
}

export default Timer;
