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
  margin-top: -100px;
  width: 100%;

  @media screen and (max-width: 700px) {
    margin-top: 0;
  }

  `;

export const SignUpForm = styled.form`
  // adjusting center for Navbar
  margin-top: var(---navbar-resize-default-width);
  @media screen and (max-width: 700px) {
    height: var(--calc-svh-height-for-navbar-resize-700px-width);
  }
  
  @media screen and (max-width: 399px) {
    height: var(--calc-svh-height-for-navbar-resize-399px-width);
  }

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 30px;

  background-color: var(--sign-up-form-blur-color);
  backdrop-filter: blur(5px);
  padding: 50px 60px;
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

  & > label.input-section__terms-checkbox-lable {
    border: none;
    text-align-last: center;
    user-select: none;

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
  @media screen and (max-width: 419px) {
    width: 96%;
    border-radius: 10px;
    padding: 40px 5px;
    gap: 25px;

    & input,
    & label {
      font-size: 18px;
    }

    & > div.heading {
      font-size: 30px;
      margin-bottom: 5px;
    }

    & > button {
      font-size: 18px;
    }
  }
  @media screen and (max-width: 329px) {
    & .sign-up-div__lower-text,
    & .terms-checkbox-label__text {
      font-size: 14px;
    }
  }
`;
