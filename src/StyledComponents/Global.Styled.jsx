import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    /* scroll-behavior: smooth; */
  }

  html {
    /* scroll-behavior: smooth; */
    /* width */
    ::-webkit-scrollbar {
      width: 8px;
    }
    /* Track */
    ::-webkit-scrollbar-track {
      background: ${({ $theme }) =>
        $theme === "white" ? "darkgray" : "hsl(0, 0%, 30%)"}; 
    }
    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: ${({ $theme }) =>
        $theme === "white" ? "darkcyan" : "hsl(0, 0%, 50%)"};
      border-radius: 999999px;
    }
    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: ${({ $theme }) =>
        $theme === "white" ? "hsl(180, 100%, 35%)" : "darkgray"};; 
    }
    /* Handle on active */
    ::-webkit-scrollbar-thumb:active {
      background: ${({ $theme }) =>
        $theme === "white"
          ? "linear-gradient(45deg, skyblue, lightgreen)"
          : "brown"};; 
    }
  } 

  body {
    font-family: "Roboto", sans-serif;
    background: 
      ${({ $theme }) => ($theme === "white" ? "hsl(0, 0%, 93%)" : "black")} ;
    color: 
    ${({ $theme }) => ($theme === "white" ? "black" : "lightgrey")} ;
  }

  :root {
    --NavBar-background-color: 
      ${({ $theme }) => ($theme === "white" ? "skyblue" : "black")} ;
      // background color
    --background-color: 
      ${({ $theme }) => ($theme === "white" ? "hsl(0, 0%, 93%)" : "black")} ;
     // font color
    --font-color: 
      ${({ $theme }) => ($theme === "white" ? "black" : "lightgrey")} ;
    --font-color-opposite: 
      ${({ $theme }) => ($theme === "white" ? "white" : "black")} ;

      // a tag fon't color ;
    --a-tag-font-color: 
      ${({ $theme }) => ($theme === "white" ? "blue" : "tomato")} ;
    --a-tag-font-color-hover: 
      ${({ $theme }) => ($theme === "white" ? "darkblue" : "lightblue")} ;

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

    --navbar-resize-default-width: 100px;
    --navbar-resize-700px-width: 70px;
    --navbar-resize-399px-width: 56px;

    // Quiz Page ;
    --progressContainer__progress-bar--background-color: 
    ${({ $theme }) => ($theme === "white" ? "skyblue" : "hsl(0, 0%, 15%)")} ;
    --progressContainer__buttons-background-color: 
    ${({ $theme }) => ($theme === "white" ? "darkcyan" : "hsl(0, 0%, 35%)")} ;
    --progressContainer__buttons-background-color-hover: 
    ${({ $theme }) =>
      $theme === "white" ? "hsl(180, 100%, 20%)" : "hsl(0, 0%, 42%)"} ;

    // Result (Answer) Page
    --answer-page__answer-div--background: 
      ${({ $theme }) =>
        $theme === "white" ? "hsl(0, 0%, 97%)" : "hsl(0, 0%, 15%)"} ;
    --answer-section__answers--background: 
      ${({ $theme }) =>
        $theme === "white" ? "lightgrey" : "hsl(0, 0%, 30%)"} ;
    --answer-section__answers--background--hover: 
      ${({ $theme }) =>
        $theme === "white" ? "hsl(0, 0%, 72%)" : "hsl(0, 0%, 40%)"} ;

    // footer ;
    --footer--background-color : 
    ${({ $theme }) => ($theme === "white" ? "teal" : "darkgrey")} ;
    --footer__curved-div--background-color:
    ${({ $theme }) => ($theme === "white" ? "brown" : "lightgrey")}    
  }
`;
