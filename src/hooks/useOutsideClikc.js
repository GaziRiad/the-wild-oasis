import { useEffect, useRef } from "react";

function useOutsideClikc(handler, listenCapturing = true) {
  const ref = useRef();
  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        handler();
      }
    }

    // True to make it only listens in the capturing phase not in the bubble phase !!
    document.addEventListener("click", handleClick, listenCapturing);

    return () =>
      document.removeEventListener("click", handleClick, listenCapturing);
  }, [handler, listenCapturing]);

  return { ref };
}

export default useOutsideClikc;
