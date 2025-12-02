import styled from "styled-components";

import backgroundImage from "../assets/images/Medina Wallpaper.jpg";

const LogInFormContainer = styled.div`
  width: 100%;
  height: 100svh;
  margin-top: -100px;
  color: black;

  display: grid;
  place-items: center;

  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;

  @media screen and (max-width: 700px) {
    margin-top: 0px;
    & > form {
      margin-top: var(---navbar-resize-700px-width);
    }
  }
  @media screen and (max-width: 399px) {
    /* margin-top: -(var(--navbar-resize-399px-width)); */
    & > form {
      margin-top: var(---navbar-resize-399px-width);
    }
  }

  & > form {
    // adjusting center for Navbar
    margin-top: var(---navbar-resize-default-width);

    /* @media screen and (max-width: 700px) {
      margin-top: var(---navbar-resize-700px-width);
    }
    @media screen and (max-width: 399px) {
      margin-top: var(---navbar-resize-399px-width);
    } */

    display: flex;
    flex-direction: column;
    gap: 50px;
    width: 50%;

    padding: 40px 30px;
    border-radius: 20px;
    background-color: var(--sign-up-form-blur-color);
    backdrop-filter: blur(5px);

    & input,
    & label {
      font-size: 25px;
    }

    & > h1 {
      font-size: 35px;
      align-self: center;
      /* margin-bottom: 10px; */
      color: var(--sign-up-form-input-font-color);
    }

    & > label {
      display: flex;
      align-items: center;

      border: 2px solid grey;
      padding: 5px;
      width: 100%;
      position: relative;
      border-radius: 5px;
      background-color: rgba(255, 255, 255, 0.5);

      & > input {
        border: none;
        background-color: transparent;
        color: black;
        font-weight: bold;
        letter-spacing: 1.2px;
        width: 90%;

        &:focus {
          outline: none;
        }
        &::placeholder {
          color: rgba(0, 0, 0, 0.5);
          font-weight: bold;
        }
      }

      & > svg {
        position: absolute;
        right: 3%;
      }
    }

    & > label.input-section__email-lable > svg {
      stroke-width: 2.5px;
    }

    & > button {
      font-size: 22px;
      font-weight: bold;
      padding: 6px 0px;
      margin-bottom: 15px;
      cursor: pointer;

      background-color: rgba(255, 255, 255, 0.4);
      border: 3px solid darkgrey;
      border-radius: 5px;
      transition: 0.2s;

      &:hover {
        background-color: rgba(255, 255, 255, 0.5);
      }
    }

    @media screen and (max-width: 1199px) {
      width: 80%;
    }
    @media screen and (max-width: 699px) {
      width: 80%;
      padding: 25px 20px;
      gap: 40px;

      /* & input,
      & label {
        font-size: 20px;
      } */

      & > label.input-section__terms-checkbox-lable {
        font-size: 16px;
      }

      & > button {
        font-size: 20px;
        padding: 5px;
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

      & > h1 {
        font-size: 30px;
        margin-bottom: 5px;
      }

      & > button {
        font-size: 18px;
      }
    }
  }
`;

export default LogInFormContainer;
