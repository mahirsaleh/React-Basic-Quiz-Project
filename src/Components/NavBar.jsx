// import { NavLink } from 'react-router-dom' ;

import { useEffect, useRef, useState } from "react";
import logo from "../assets/Icons/logo.png";
import { Nav } from "../StyledComponents/Nav.styled.jsx";
import NavAccount from "./NavAccount.jsx";
import NavThemeButton from "./NavThemeButton";

export default function NavBar() {
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(window.scrollY);

  useEffect(() => {

    const lastScrollYDownBeforeHide = 50 ;
    const lastScrollYUpBeforeShow = 10 ;

    
    const scrollFunction = () => {
      const currentScrollY = window.scrollY;

      console.log((currentScrollY - lastScrollY.current) < lastScrollYUpBeforeShow)
    
      if (currentScrollY <= lastScrollYDownBeforeHide) {
        setIsVisible(true) ;
      }
      else if (currentScrollY > lastScrollY.current) {
        setIsVisible(false) ;
      } 
      else if ((currentScrollY - lastScrollY.current) < -lastScrollYUpBeforeShow) {
        setIsVisible(true)
      }
      // else {
      //   setIsVisible(true)
      // }

      lastScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", scrollFunction);

    return () => window.removeEventListener("scroll", scrollFunction);
  }, []);

  return (
    <Nav $isVisible={isVisible ? "show" : "hide"}>
      {/* logo */}
      <div className="Nav__logo-div">
        <a className="logo-div__logo" href="">
          <img src={logo} alt="Mahir" />
        </a>
        <a className="logo-div__name" href="">
          Mahir Saleh
        </a>
      </div>

      <div className="Nav__right-section">
        <NavAccount />
        <NavThemeButton />
      </div>
    </Nav>
  );
}
