import { useRef } from "react";

/** Run heavy logic every N frames (default: every 2nd frame). */
export function useFrameSkip(interval = 2) {
  const frame = useRef(0);
  const shouldRun = () => {
    frame.current += 1;
    return frame.current % interval === 0;
  };
  return shouldRun;
}
