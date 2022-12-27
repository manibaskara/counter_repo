import { useState, useRef, useEffect, useCallback } from "react";

type UseCounterReturnType = {
  count: number;
  isCounterRunning: boolean;
  onButtonClick: () => void;
  resetCounter: () => void;
};

export const useCounter = (): UseCounterReturnType => {
  const [count, setCount] = useState(0);
  const [isCounterRunning, setIsCounterRunning] = useState(false);
  const intervalRef: { current: NodeJS.Timeout | null } = useRef(null);

  const resetCounter = useCallback((): void => {
    setCount(0);
    setIsCounterRunning(false);
    if (intervalRef.current) clearInterval(intervalRef.current);
  }, []);

  useEffect(() => {
    return resetCounter;
  }, [resetCounter]);

  const onButtonClick = (): void => {
    if (!isCounterRunning) {
      intervalRef.current = setInterval((): void => {
        setCount((prevCount) => prevCount + 1);
      }, 1000);
      setIsCounterRunning(true);
    } else {
      setIsCounterRunning(false);
      if (intervalRef.current) clearInterval(intervalRef.current);
    }
  };

  return {
    count,
    isCounterRunning,
    onButtonClick,
    resetCounter
  };
};
