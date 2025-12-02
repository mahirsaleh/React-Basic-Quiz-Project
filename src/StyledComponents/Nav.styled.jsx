import Styled from "styled-components";

export const Nav = Styled.nav`
  background: var(--NavBar-background-color) ;
  font-size: 22px ;
  padding: 10px 30px ;
  box-shadow: ${({ $isVisible }) =>
    $isVisible === "show" ? "2px 3px 8px grey" : "none"} ;
  z-index: 10000;

  display: flex ;
  flex-direction: row ;
  align-items: center ;
  justify-content: space-between ;

  position: fixed ;
  top: 0 ;
  left: 0;
  width: 100% ;
  z-index: 100000 ;

  /* transform: translateY(100%) */
  transform: ${({ $isVisible }) =>
    $isVisible === "show" ? "translateY(0)" : "translateY(-100%)"} ;
  transition: transform 0.2s ;

  & .Nav__right-section {
    display: flex ;
    align-items: center ;
    gap: 20px ;
  }

  & a {
    text-decoration: none ;
    color: var(--font-color) ;
    transition: color 0.3s ;
  }
  & a:hover {
    color: var(--nav-a-color-hover) ;
  }

  & > div.Nav__logo-div {
    display: flex ;
    flex-direction: row ;
    align-items: center ;
    gap: 10px ;

    & > a.logo-div__name {
      font-size: 35px ;
    }

    & > a:first-child, & > a:first-child > img {
      height: 80px ;
      width:80px ;
      border-radius: 50% ;
    }
  }

  @media screen and (max-width: 700px) {
    font-size: 18px ;
    padding: 5px 15px ;

    & .Nav__right-section {
      gap: 10px ;
    }

    & > div.Nav__logo-div {
      & > a.logo-div__name {
        font-size: 25px ;
      }

      & > a:first-child, 
      & > a:first-child > img {
        height: 60px ;
        width: 60px ;
        
      }
    }
  }
  @media screen and (max-width: 399px) {
    padding: 3px ;
    font-size: 16px ;

    & > div.Nav__logo-div {
      gap: 5px ;

      & > a.logo-div__name {
        font-size: 20px ;
      }

      & > a:first-child, 
      & > a:first-child > img {
        height: 50px ;
        width: 50px ;
        
      }
    }
  }
`;

export const NavAccountDiv = Styled.div`
  display: flex ;
  align-items: center ;
  gap: 10px ;

  & svg {
    height: 30px ;
    width: 30px ;
  }

  @media screen and (max-width: 700px) {
    & svg {
      height: 25px ;
      width: 25px ;
    }
  }
  @media screen and (max-width: 399px) {
    gap: 5px ;
  }
`;

export const NavThemeDiv = Styled.div`
  display: grid ;
  place-items: center ;
  margin-top: 1px ;
  
  font-size: 25px ;
  cursor: pointer;
  position: relative ;
  user-select: none ;

  & .toolTip {
    font-size: 20px ;
    position: absolute ;
    top: 150% ;
    color: black ;

    background: lightgrey ;
    padding: 5px ;
    pointer-events: none ;
    border-radius: 9999px ;
    border: 2px solid ;
    border-color: black ;

    z-index: 10000 ;
    opacity: 0 ;
    transition: opacity 0.2s linear ;
  }

  &:hover .toolTip {
    opacity: 1 ;
  }

  @media screen and (max-width: 700px) {
    & .toolTip {
      font-size: 16px ;
      padding: 3px ;
      right: -50% ;
    }
  }
  @media screen and (max-width: 399px) {
    & .toolTip {
      right: 0%  ;
    }
  }

`;
