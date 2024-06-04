import { useEffect, useRef } from "react";

const events = ["mousedown", "touchStart"];

const useClickAway = (handler: (e: Event) => void) => {
  const ref = useRef(null);
  const savedHandler = useRef(handler);

  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    const element = ref.current as HTMLElement | null;
    if (!element) return;

    const handleEvent = (e: Event) => {
      !element.contains(e.target as Node) && savedHandler.current(e);
    };
    for (const eventName of events) {
      document.addEventListener(eventName, handleEvent);
    }
    return () => {
      for (const eventName of events) {
        document.removeEventListener(eventName, handleEvent);
      }
    };
  }, [ref]);

  return ref;
};

export default useClickAway;
