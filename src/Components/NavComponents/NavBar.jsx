import { Link } from 'react-router-dom' ;

import { useEffect, useRef, useState } from "react";
import { Nav } from "../../StyledComponents/Nav.styled.jsx";
import logo from "../../assets/Icons/logo.png";
import NavAccount from "./NavAccount.jsx";
import NavThemeButton from "./NavThemeButton";

export default function NavBar() {
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(window.scrollY);

  useEffect(() => {
    const lastScrollYDownBeforeHide = 50;
    const lastScrollYUpBeforeShow = 10;

    const scrollFunction = () => {
      const currentScrollY = window.scrollY;

      
      if (currentScrollY <= lastScrollYDownBeforeHide) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY.current) {
        setIsVisible(false);
      } else if (
        currentScrollY - lastScrollY.current <
        -lastScrollYUpBeforeShow
      ) {
        setIsVisible(true);
      }
      // else {
      //   setIsVisible(true)
      // }

      lastScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", scrollFunction, { passive: true });

    return () => window.removeEventListener("scroll", scrollFunction);
  }, []);

  return (
    <Nav $isVisible={isVisible ? "show" : "hide"}>
      {/* logo */}
      <div className="Nav__logo-div">
        <Link 
          className="logo-div__logo" 
          to="/"
        >
          <img src={logo} alt="Mahir" />
        </Link>
        <Link
          className="logo-div__name" 
          to="/"
        >
          Mahir Saleh
        </Link>
      </div>

      <div className="Nav__right-section">
        <NavAccount />
        <NavThemeButton />
      </div>
    </Nav>
  );
}
