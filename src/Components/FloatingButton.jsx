import { useEffect, useEffectEvent, useRef, useState } from "react";

export default function FloatingButton({ children, ...props }) {
  const [isShow, setIsShow] = useState(false);
  const timerRef = useRef(null);

  const scrollEventHandler = useEffectEvent(function () {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    if (window.scrollY > 100) {
      setIsShow(true);

      timerRef.current = setTimeout(() => {
        setIsShow(false);
      }, 2000);
    } else {
      setIsShow(false);
    }
  });

  useEffect(() => {
    window.addEventListener("scroll", scrollEventHandler, { passive: true });

    return () => window.removeEventListener("scroll", scrollEventHandler);
  }, []);

  return (
    <button
      type="button"
      disabled={!isShow}
      style={
        isShow
          ? {
              opacity: 1,
              cursor: "pointer",
            }
          : {}
      }
      {...props}
    >
      {children}
    </button>
  );
}
