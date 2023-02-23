import { useEffect, useState } from "react";
import ControlsButtons from "./ControlsButtons";
import Timer from "./Timer";

export default function StopWatch() {
  const [time, setTime] = useState<number>(0);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isPaused, setIsPaused] = useState<boolean>(true);

  useEffect(() => {
    let interval: number = 0;

    if (isActive && !isPaused) {
      interval = setInterval(() => {
        setTime(time => time + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isActive, isPaused]);

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(false);
  };
  const handleReset = () => {
    setIsActive(false);
    setTime(0);
  };
  const handlePauseResume = () => {
    setIsPaused(prev => !prev);
  };
  return (
    <>
      <Timer time={time} />
      <ControlsButtons
        isActive={isActive}
        isPaused={isPaused}
        handleStart={handleStart}
        handlePauseResume={handlePauseResume}
        handleReset={handleReset}
      />
    </>
  );
}
