import { useEffect, useEffectEvent, useState } from "react";

import { GoArrowUp } from "react-icons/go";
import "../Styles/scrollTopButton.css";

export default function ScrollTopButton() {

  const [isShow, setIsShow] = useState(false);

  const showButton = useEffectEvent(function () {
    if (window.scrollY > 100) {
      setIsShow(true);
    } else {
      setIsShow(false);
    }
  });

  useEffect(() => {
    window.addEventListener("scroll", showButton, { passive: true });

    return () => window.removeEventListener("scroll", showButton);
  }, []);

  const scrollTop = function () {
    scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });

    if (window.scrollY < 400) {
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 100);
    } else {
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 250);
    }
  };

  return (
    <button
      disabled={!isShow}
      className={`${isShow ? "showing" : ""} scroll-top-button`}
      type="button"
      onClick={scrollTop}
    >
      <GoArrowUp />
    </button>
  );
}
