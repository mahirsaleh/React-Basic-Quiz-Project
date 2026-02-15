import styled from "styled-components";

import backgroundImage from "../assets/images/Medina.jpg";

export const SignUpDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center 65%;
  background-repeat: no-repeat;
  background-attachment: fixed;

  height: 100svh;
  width: 100%;
  margin-top: -100px;

  /* @media screen and (max-height: 800px) {
    height: calc(100svh + 50px);
    
    & form {
      margin-top: 100px ;
    }
  } */

  @media screen and (max-width: 700px) {
    margin-top: 0;
    height: calc(100svh - var(--navbar-resize-700px-width));
  }

  @media screen and (max-width: 399px) {
    height: calc(100svh - var(--navbar-resize-399px-width));
  }
`;

export const SignUpForm = styled.form`
  // adjusting center for Navbar
  margin-top: 100px ;

  @media screen and (max-width: 700px) {
    margin-top: var(---navbar-resize-700px-width);
  }

  @media screen and (max-width: 399px) {
    margin-top: var(---navbar-resize-399px-width);
  } 

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 30px;

  background-color: var(--sign-up-form-blur-color);
  backdrop-filter: blur(5px);
  padding: 30px 60px;
  width: 50%;
  border-radius: 20px;

  & > div.heading {
    font-size: 35px;
    font-weight: bold;
    margin-bottom: 15px;
  }

  & > div.heading,
  & > p.sign-up-div__lower-text {
    align-self: center;
    color: var(--font-color);
  }

  & input,
  & label {
    font-size: 25px;
  }

  & > label {
    display: flex;
    align-items: center;

    border: 2px solid grey;
    padding: 5px;
    width: 100%;
    position: relative;
    background-color: var(--sign-up-form__label-background-color);
    border-radius: 5px;

    & > input {
      border: none;
      background-color: transparent;
      color: var(--sign-up-form-input-font-color);
      letter-spacing: 1.5px;
      width: 90%;

      &:focus {
        outline: none;
      }
      &::placeholder {
        color: var(--sign-up-form-input__place-holder-font-color);
      }
    }

    & > svg {
      position: absolute;
      right: 3%;
    }
  }

  & > label.input-section__password-lable > button.password-label__eyeButton,
  &
    > label.input-section__confirm-password-lable
    > button.confirm-password-label__eyeButton {
    background: transparent;
    box-shadow: ${({ $theme }) =>
      $theme === "white"
        ? "inset 0.3px 0px 5px black"
        : "inset 0.3px 0px 5px lightgrey"};
    border: none;
    cursor: pointer;

    position: absolute;
    inset: 0% 0% 0% 90%;
    display: grid;
    place-items: center;

    & > svg {
      font-size: 22px;
      color: var(--font-color);

      @media screen and (max-width: 420px) {
        font-size: 18px;
      }
    }
  }

  & > label.input-section__terms-checkbox-lable {
    border: none;
    text-align-last: center;
    user-select: none;
    cursor: pointer;

    & > input {
      width: 20px;
      height: 20px;
      margin-right: 20px;
      cursor: pointer;
    }
  }

  & > button {
    align-self: center;
    width: 100%;
    padding: 10px;
    font-size: 25px;
    cursor: pointer;
    background-color: var(--scroll-button-background-color);
    font-weight: bold;
    border-radius: 5px;

    &:hover {
      opacity: 0.9;
    }
  }

  & > .sign-up-div__lower-text {
    font-size: 22px;
    margin-top: 10px;
    text-align-last: center;

    & > a {
      text-decoration: none;
      transition: color 0.2s linear;
      color: var(--a-tag-font-color);

      &:hover {
        color: var(--a-tag-font-color-hover);
      }
    }
  }

  @media screen and (max-width: 1199px) {
    width: 80%;
  }
  @media screen and (max-width: 699px) {
    width: 80%;
    padding: 30px 20px;

    & input,
    & label {
      font-size: 20px;
    }

    & > label.input-section__terms-checkbox-lable {
      font-size: 16px;
    }

    & > button {
      font-size: 20px;
      padding: 5px;
    }

    & > .sign-up-div__lower-text {
      font-size: 16px;
    }
  }
  @media screen and (max-width: 518px) {
    width: 96%;
    border-radius: 10px;
    /* padding: 40px 0px; */
    gap: 25px;

    & input,
    & label {
      font-size: 18px;
      width: 100%;
    }

    & > div.heading {
      font-size: 30px;
      margin-bottom: 5px;
    }

    & > button {
      font-size: 18px;
    }
  }
  @media screen and (max-width: 389px) {

    & div.heading {
      font-size: 22px ;
    }

    & .sign-up-div__lower-text,
    & .terms-checkbox-label__text {
      font-size: 14px;
    }
  }

  @media screen and (max-height: 739px) {
    padding: 20px  ;
  }
`;
