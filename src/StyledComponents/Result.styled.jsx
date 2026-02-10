import Styled from "styled-components";

export const ResultDiv = Styled.div`
  display: flex ;
  flex-direction: column ;
  gap: 30px ;

  padding: 50px 50px ;
  padding-top: 100px ; 

  /* & > p.result-div__score {
    font-size: 30px ;
    padding-bottom: 30px ;
  } */

  & > div.result-div__analyse-section {
    text-align: center ;
    border-bottom: 2px solid darkgrey ;
    padding-bottom: 20px ;

    & > h1.analyse-section__heading {
      font-size: 50px ;
      padding-bottom: 20px ;
    }

    & > p.analyse-section__score-text {
      font-size: 22px ;
    }
  }

  @media screen and (max-width: 1399px) {
    padding-left: 25px ;
    padding-right: 25px ;
  }
  @media screen and (max-width: 1099px) {
    padding-left: 15px ;
    padding-right: 15px ;
  }

  @media screen and (max-width: 799px) {
    /* padding: 0px 20px ; */
    padding-top: 50px;

    /* & > p.result-div__score {
      font-size: 25px ;
    } */

    & > div.result-div__analyse-section {
      padding-bottom: 10px ;

      & > h1.analyse-section__heading {
        font-size: 40px ;
        padding-bottom: 15px ;
      }
      & > p.analyse-section__score-text {
        font-size: 20px ;
      }
    }
  }
  @media screen and (max-width: 499px) {
    padding: 20px 10px ;
    padding-top: 30px;

    /* & > p.result-div__score {
      font-size: 20px ;
      padding-bottom: 15px ;
    } */

    & > div.result-div__analyse-section {
      padding-bottom: 8px ;
      text-align: left ;

      & > h1.analyse-section__heading {
        font-size: 30px ;
        padding-bottom: 10px ;
      }
      & > p.analyse-section__score-text {
        font-size: 18px ;
      }
    }
  }
`;

export const ScoreDiv = Styled.div`
  display: grid ;
  grid-template-columns: repeat(2, 1fr) ;
  justify-items: center ;
  align-items: center ;

  & > p.score-div__score-text {
    font-size: 30px ;
  }

  & > div.score-div__score-circle {
    background: conic-gradient(brown var(--percentage), transparent 0%);
    height: 300px ;
    width: 300px ;
    border-radius: 50% ;

    display: grid ;
    place-items: center ;
    position: relative ;

    & > span {
      z-index: 2 ;
      font-size: 40px ;
    }

    &::before {
      content: '' ;
      position: absolute ;
      z-index: 1 ;
      
      background: var(--background-color) ;
      height: 280px ;
      width: 280px ;
      border-radius: 50% ;
    }
    &::after {
      content: '' ;
      position: absolute ;
      z-index: -1 ;
      
      background: lightgrey ;
      height: 300px ;
      width: 300px ;
      border-radius: 50% ;
    }
  }

  @media screen and (max-width: 749px) {
    justify-items: stretch ;
    padding: 0px 20px ;

    & > p.score-div__score-text {
      font-size: 25px ;
    }

    & > div.score-div__score-circle {
      height: 220px ;
      width: 220px ;
      justify-self: end ;

      & > span {
        font-size: 35px ;
      }
      &::before {
        height: 200px ;
        width: 200px ;
      }
      &::after {
        height: 220px ;
        width: 220px ;
      }
    }
  }
  @media screen and (max-width: 629px) {
    padding: 0px ;
  }
  @media screen and (max-width: 590px) {
    grid-template-columns: 1fr ;
    gap: 50px ;
    justify-items: center ;
    padding-top: 20px;
    padding-bottom: 10px;

    & > p.score-div__score-text {
      font-size: 30px ;
    }

    & > div.score-div__score-circle {
      height: 270px ;
      width: 270px ;
      justify-self: center ;

      & > span {
        font-size: 35px ;
      }
      &::before {
        height: 250px ;
        width: 250px ;
      }
      &::after {
        height: 270px ;
        width: 270px ;
      }
    }
  }
  @media screen and (max-width: 364px) {
    /* grid-template-columns: 1fr ;
    justify-items: center ; */
    gap: 35px ;

    & > p.score-div__score-text {
      font-size: 23px ;
    }

    & > div.score-div__score-circle {
      height: 220px ;
      width: 220px ;
      justify-self: center ;

      & > span {
        font-size: 35px ;
      }
      &::before {
        height: 200px ;
        width: 200px ;
      }
      &::after {
        height: 220px ;
        width: 220px ;
      }
    }
  }
`;

export const AnswerDiv = Styled.div`
  background: var(--answer-page__answer-div--background) ;
  border-radius: 10px ;
  
  padding: 15px ;
  font-size: 25px ;

  & p.answer-div__heading-text {
    padding-bottom: 20px ;
    font-size: 30px ;

    & > svg {
      margin-right: 10px ;
      font-size: 20px ;
    }
  }

  & div.answer-div__answer-section {
    display: grid ;
    grid-template-columns: repeat(2, 1fr) ;
    gap: 20px ;
    text-align: center ;

    & h3 {
      margin-bottom: 10px ;
    }

    & div.answer-section__user-answers {
      display: flex ;
      flex-direction: column ;
      gap: 20px ;
      /* color: black ; */

      & > p {
        padding: 15px ;  
        background-color: var(--answer-section__answers--background) ;
        border-radius: 5px ;
        transition: background-color 0.15s ;
        cursor: pointer ;

        &:hover {
          background-color: var(--answer-section__answers--background--hover) ;
        }
      }
    }

    & div.answer-section__real-answers {
      display: flex ;
      flex-direction: column ;
      gap: 20px ;

      & > p {
        padding: 15px ;  
        background-color: var(--answer-section__answers--background) ;
        border-radius: 5px ;
        transition: background-color 0.15s ;
        cursor: pointer ;

        &:hover {
          background-color: var(--answer-section__answers--background--hover) ;
        }
      }
    }
  }

  & > div.answer-div__go-to-home-page-div {
    text-align: center ;
    padding-bottom: 20px ;
    padding-top: 60px ;

    & > button {
      margin-top: 20px ;
      font-size: 20px ;
      background-color: darkgray ;
      border: none ;
      padding: 10px ;
      border-radius: 3px ;
      cursor: pointer ;
      transition: background-color 0.2s ;

      &:hover {
        background-color: hsl(0, 0%, 60%) ;
      }
    }

    @media screen and (max-width: 419px) {
      font-size: 18px ;

      & > button {
        font-size: 18px ;
        padding: 7px ;
      }
    }
  }

  @media screen and (max-width: 1099px) {
    font-size: 22px ;

    & div.answer-div__answer-section {
      text-align: left ;
      gap: 15px ;

      & h3 {
        margin-bottom: 0px ;
      }

      & div.answer-section__user-answers,
      & div.answer-section__real-answers {
        gap: 15px ;

        & p {
          padding: 10px ;
          border-radius: 3px ;
        }
      }
    }
  }
  @media screen and (max-width: 659px) {
    padding: 15px 10px ;
    border-radius: 5px ;

    & div.answer-div__answer-section {
      grid-template-columns: 1fr ;
      gap: 25px ;

      & div.answer-section__user-answers,
      & div.answer-section__real-answers {
        gap: 20px ;

        & h3 {
          margin-bottom: -15px ;
        }

        & p {
          padding: 13px ;
        }
      }
    }
  }

`;
