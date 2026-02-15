import styled from "styled-components";

export const QuizContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 40px;
  margin-top: 30px;
  gap: 30px;

  & > .quiz-container__heading-section {
    display: flex;
    flex-direction: column;
    gap: 20px;

    & > .heading-section__header {
      font-size: 40px;
    }

    & > .heading-section__lower-text {
      font-size: 25px;
    }
  }

  @media screen and (max-width: 1200px) {
    padding: 20px;
    gap: 25px;
  }

  @media screen and (max-width: 800px) {
    padding: 20px 15px;
    gap: 20px;

    & > .quiz-container__heading-section {
      & > .heading-section__header {
        font-size: 35px;
      }

      & > .heading-section__lower-text {
        font-size: 22px;
      }
    }
  }

  @media screen and (max-width: 600px) {
    padding: 5px 10px;
    gap: 15px;
  }

  @media screen and (max-width: 399px) {
    padding: 0px 5px;
    gap: 15px;

    & > .quiz-container__heading-section {
      & > .heading-section__header {
        font-size: 30px;
      }

      & > .heading-section__lower-text {
        font-size: 22px;
      }
    }
  }
`;

export const OptionContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  margin-top: 20px;

  /* & > label.wrong {
    background-color: hsl(0, 100%, 20%);
    color: hsl(0, 0%, 80%);
  }
  & > label.right {
    background-color: hsl(120, 73.4375%, 20%);
    color: hsl(0, 0%, 85%);
  } */

  & > label {
    /* background-color: hsl(0, 0%, 65%); */
    background-color: var(--answer-section__answers--background);
    /* color: black; */
    font-size: 25px;
    cursor: pointer;
    border-radius: 10px;

    display: grid;
    grid-template-columns: 20px 1fr;
    align-items: center;
    gap: 30px;
    padding: 20px;
    transition: background-color 0.2s ease-in-out;

    &:hover {
      background-color: var(--answer-section__answers--background--hover);
    }

    & > input {
      height: 20px;
      width: 20px;
      accent-color: teal;
      flex-basis: 40px;
    }
  }

  @media screen and (max-width: 1200px) {
    gap: 20px;
  }

  @media screen and (max-width: 800px) {
    gap: 15px;

    & > label {
      font-size: 22px;
      padding: 10px;
      gap: 20px;
      border-radius: 5px;
    }
  }
  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 25px;
  }
  @media screen and (max-width: 399px) {
    & > label {
      font-size: 20px;
    }
  }
`;

export const ProgressContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: center;

  background-color: var(--progressContainer__progress-bar--background-color);
  padding: 15px;
  margin-top: 100px;

  & > button {
    background-color: var(--progressContainer__buttons-background-color);
    color: var(--font-color-opposite);
    font-size: 20px;
    font-weight: bold;
    padding: 10px 15px;

    cursor: pointer;
    border: 2px solid black;
    border-radius: 5px;
    transition: background-color 0.15s linear;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    &:hover {
      background-color: var(
        --progressContainer__buttons-background-color-hover
      );
    }

    & > svg {
      stroke-width: 3px;
      transition: transform 0.2s linear;
    }
  }

  & > button.progressContainer__back-button:hover > svg {
    transform: translateX(-3px);
  }

  & > button.progressContainer__forward-button:hover > svg {
    transform: translateX(3px);
  }

  & > button.progressContainer__forward-button {
    margin-left: auto;
  }

  & > .progressContainer__progress-bar {
    background-color: rgba(0, 0, 0, 0.4);
    flex: 70%;
    position: relative;
    height: 5px;
    border-radius: 999999px;

    &::before {
      content: "";
      position: absolute;
      inset: 0;
      right: ${({ $progressBar }) => `${100 - $progressBar}%`};

      background-color: hsl(9.130434782608695, 100%, 30%);
    }

    &::after {
      content: "";
      position: absolute;
      right: ${({ $progressBar }) => `${100 - ($progressBar + 1)}%`};
      top: calc(0% - 7.5px);

      padding: 10px;
      border-radius: 99999px;
      background-color: hsl(9.130434782608695, 100%, 30%);
      cursor: pointer;
    }

    & > span {
      position: absolute;
      bottom: 500%;
      right: ${({ $progressBar }) => `calc(${100 - $progressBar}% - 17px)`};

      background-color: var(--progressContainer__buttons-background-color);
      color: var(--font-color-opposite);
      padding: 5px 8px;
      font-size: 20px;
      border-radius: 5px;
      opacity: 0;
      transition: opacity 0.15s linear;
      pointer-events: none;
    }

    &:hover > span {
      opacity: 1;
    }
  }

  @media screen and (max-width: 1050px) {
    padding: 10px;

    & > .progressContainer__progress-bar {
      flex: 50%;
    }

    & > button {
      font-size: 18px;
      padding: 10px;

      & > svg {
        stroke-width: 2px;
      }
    }
  }

  @media screen and (max-width: 800px) {
    margin-top: 50px;

    & > .progressContainer__progress-bar {
      height: 3px;

      &::before {
        height: 3px;
      }
      &::after {
        padding: 7px;
        right: ${({ $progressBar }) => `calc(${100 - ($progressBar + 1)}% - 5px)`};
        top: calc(0% - 5px);
      }

      & > span {
        font-size: 16px;
        padding: 5px;
        right: ${({ $progressBar }) => `calc(${100 - $progressBar}% - 17px)`};

        bottom: 30px;
      }
    }
  }

  @media screen and (max-width: 560px) {
    gap: 5px;
    margin-top: 30px;

    & > button {
      padding: 5px;
      gap: 5px;
    }
  }

  @media screen and (max-width: 450px) {
    & > .progressContainer__progress-bar {
      display: none;
    }
  }
`;

export const CircularProgressContainer = styled.div`
  display: none;

  @media screen and (max-width: 450px) {
    display: grid;
    place-items: center;
    margin-top: 35px;
    position: relative;

    & > .inner-circle {
      display: grid;
      place-items: center;
      position: relative;

      box-shadow:
        2px 3px 15px grey,
        -1px -1px 5px grey;
      border-radius: 9999px;
      transform: rotateZ(270deg);

      & svg {
        height: 250px;
        width: 250px;
      }

      & circle {
        cx: 125px;
        cy: 125px;
        r: 118px;
        fill: transparent;

        stroke: hsl(9.130434782608695, 100%, 30%);
        stroke-width: 14px;
        stroke-dasharray: 741.4176;
        stroke-dashoffset: ${({ $progress }) =>
          `calc(741.4176 * (1 - ${$progress / 100}))`};
      }

      &::before {
        content: "";
        position: absolute;
        height: 222px;
        width: 222px;
        background-color: transparent;
        border-radius: 999999px;
        box-shadow:
          inset 3px 3px 8px grey,
          inset -2px -2px 6px grey;
      }
    }
    & span {
      position: absolute;
      font-size: 35px;
      left: 45%;
    }
  }
`;

export const QuizVidoeIframe = styled.div`
  display: grid;
  place-items: center;
  margin-top: 20px;

  & > iframe {
    border: none;
    height: 350px;
    width: 600px;
    border: 3px solid grey;

    @media screen and (max-width: 650px) {
      width: 100%;
      /* height: 300px; */
    }
  }
`;
