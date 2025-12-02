import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    /* scroll-behavior: smooth; */
  }

  /* html {
    scroll-behavior: smooth;
  }  */

  body {
    font-family: "Roboto", sans-serif;
    background: 
      ${({ $theme }) => ($theme === "white" ? "white" : "black")} ;
    color: 
    ${({ $theme }) => ($theme === "white" ? "black" : "lightgrey")}
  }

  :root {
    --NavBar-background-color: 
      ${({ $theme }) => ($theme === "white" ? "skyblue" : "black")} ;
      // background color
    --background-color: 
     ${({ $theme }) => $theme} ;
     // font color
    --font-color: 
      ${({ $theme }) => ($theme === "white" ? "black" : "lightgrey")} ;
    --font-color-opposite: 
      ${({ $theme }) => ($theme === "white" ? "white" : "black")} ;

    --nav-a-color-hover:
      ${({ $theme }) => ($theme === "white" ? "blue" : "tomato")} ;
    --video-card-question-score-color: 
      ${({ $theme }) => ($theme === "white" ? "darkblue" : "tomato")} ;
    --scroll-button-background-color: 
      ${({ $theme }) => ($theme === "white" ? "lightcoral" : "darkgrey")};

    --sign-up-form__label-background-color: 
      ${({ $theme }) =>
        $theme === "white" ? `rgba(255, 255, 255, 0.5)` : "rgba(0, 0, 0, 0.3)"};
    --sign-up-form-input-font-color: 
      ${({ $theme }) => ($theme === "white" ? "black" : "lightgrey")};
    --sign-up-form-input__place-holder-font-color: 
      ${({ $theme }) =>
        $theme === "white" ? "rgba(0, 0, 0, 0.5)" : "darkgrey"};
    --sign-up-form-blur-color:
      ${({ $theme }) =>
        $theme === "white" ? `rgba(255, 255, 255, 0.3)` : `rgba(0, 0, 0, 0.5)`};

    ---navbar-resize-default-width: 100px;
    --navbar-resize-700px-width: 70px;
    --navbar-resize-399px-width: 56px;

    // footer ;
    --footer--background-color : 
    ${({ $theme }) => ($theme === "white" ? "teal" : "darkgrey")} ;
    --footer__curved-div--background-color:
    ${({ $theme }) => ($theme === "white" ? "brown" : "lightgrey")}    
  }
`;
