import { useEffect, useRef } from "react";

export function useOutsideClick(handler, listenCapturing = true) {
  //use for clicking outside to close the modal
  const ref = useRef();

  //use for clicking outside to close the modal
  useEffect(
    function () {
      function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) {
          handler();
        }
      }
      document.addEventListener("click", handleClick, listenCapturing);

      return () =>
        document.removeEventListener("click", handleClick, listenCapturing);
    },
    [handler, listenCapturing]
  );

  return ref;
}
