import { GoArrowUp } from "react-icons/go";

import "../Styles/scrollTopButton.css";
import FloatingButton from "./FloatingButton.jsx";

export default function ScrollTopButton() {
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
    <FloatingButton
      className={`scroll-top-button`}
      onClick={scrollTop}
      id='scroll-top-button'
      name='scroll-top-button'
    >
      <GoArrowUp />
    </FloatingButton>
  );
}
