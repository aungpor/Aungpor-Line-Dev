import { useCallback, useEffect, useRef, useState } from "react";

interface CountdownState {
  timeRemaining: number;
  isRunning: boolean;
  isCompleted: boolean;
  formattedTime: string;
  pause: () => void;
  resume: () => void;
  reset: () => void;
}

/**
 * A countdown hook that continues running even when browser tabs are switched
 * @param initialTimeInSeconds Initial countdown time in seconds
 * @param onComplete Optional callback function that runs when countdown reaches zero
 * @returns Countdown state and control functions
 */
export function useCountdown(
  initialTimeInSeconds: number,
  onComplete?: () => void,
  ishour?: boolean,
): CountdownState {
  const [timeRemaining, setTimeRemaining] =
    useState<number>(initialTimeInSeconds);
  const [isRunning, setIsRunning] = useState<boolean>(true);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  // Use refs to maintain values across renders and tab visibility changes
  const endTimeRef = useRef<number>(Date.now() + initialTimeInSeconds * 1000);
  const intervalIdRef = useRef<NodeJS.Timeout | null>(null);
  const onCompleteRef = useRef<(() => void) | undefined>(onComplete);

  // Update the ref when onComplete changes
  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  // Format time as MM:SS
  const formatTime = useCallback((seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
      .toString()
      .padStart(2, "0")}`;
  }, []);

  const formatTimeHour = useCallback((seconds: number): string => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;
  }, []);

  // Function to calculate and update time remaining
  const updateRemainingTime = useCallback(() => {
    if (!isRunning || isCompleted) return;

    const now = Date.now();
    const newTimeRemaining = Math.max(
      0,
      Math.ceil((endTimeRef.current - now) / 1000),
    );

    setTimeRemaining(newTimeRemaining);

    if (newTimeRemaining <= 0 && !isCompleted) {
      setIsCompleted(true);
      setIsRunning(false);

      if (onCompleteRef.current) {
        onCompleteRef.current();
      }
    }
  }, [isRunning, isCompleted]);

  // Control functions
  const pause = useCallback(() => {
    setIsRunning(false);
  }, []);

  const resume = useCallback(() => {
    if (isCompleted) return;

    // Recalculate end time based on current remaining time
    endTimeRef.current = Date.now() + timeRemaining * 1000;
    setIsRunning(true);
  }, [timeRemaining, isCompleted]);

  const reset = useCallback(() => {
    setTimeRemaining(initialTimeInSeconds);
    endTimeRef.current = Date.now() + initialTimeInSeconds * 1000;
    setIsCompleted(false);
    setIsRunning(true);
  }, [initialTimeInSeconds]);

  let countdownString = "00:00";
  if (timeRemaining > 0) {
    countdownString =
      Math.floor(timeRemaining / 60)
        .toString()
        .padStart(2, "0") +
      ":" +
      (timeRemaining % 60).toString().padStart(2, "0");
  }

  // Set up the timer
  useEffect(() => {
    if (isRunning) {
      // Set up timer that updates using both requestAnimationFrame and setInterval
      // for maximum compatibility across tab visibility states

      // For visible tabs: use requestAnimationFrame for smoother updates
      let frameId: number;
      const tick = () => {
        updateRemainingTime();
        if (isRunning && !isCompleted) {
          frameId = requestAnimationFrame(tick);
        }
      };
      frameId = requestAnimationFrame(tick);

      // For background tabs: use setInterval as backup
      intervalIdRef.current = setInterval(updateRemainingTime, 1000);

      return () => {
        cancelAnimationFrame(frameId);
        if (intervalIdRef.current) {
          clearInterval(intervalIdRef.current);
          intervalIdRef.current = null;
        }
      };
    }
  }, [isRunning, isCompleted, updateRemainingTime]);

  // Handle tab visibility changes
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (!document.hidden) {
        // When tab becomes visible, immediately update time
        updateRemainingTime();
      }
    };

    // Listen for visibility changes
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [updateRemainingTime]);

  // Always clean up on unmount
  useEffect(() => {
    return () => {
      if (intervalIdRef.current) {
        clearInterval(intervalIdRef.current);
      }
    };
  }, []);

  return {
    timeRemaining,
    isRunning,
    isCompleted,
    formattedTime: ishour
      ? formatTimeHour(timeRemaining)
      : formatTime(timeRemaining),
    pause,
    resume,
    reset,
  };
}

export default useCountdown;
