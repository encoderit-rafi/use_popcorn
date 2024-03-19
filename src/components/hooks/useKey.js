import { useEffect } from "react";

export function useKey(key, fn) {
  useEffect(() => {
    function callback(e) {
      if (e.key === key) {
        fn();
        // onClick();
        // console.log("🚀 ~ callback ~ Escape:");
      }
    }
    document.addEventListener("keydown", callback);
    return function () {
      document.removeEventListener("keydown", callback);
    };
  }, [key, fn]);
}
