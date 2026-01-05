import { useContext, useLayoutEffect, useReducer } from "react";
import { Link } from "react-router-dom";

import { FaEye, FaEyeSlash, FaLock, FaUserAlt } from "react-icons/fa";
import { FiAtSign } from "react-icons/fi";
import { TbLockCheck } from "react-icons/tb";

import ThemeContext from "../ThemeContext.jsx";

import {
  SignUpDiv,
  SignUpForm,
} from "../../StyledComponents/SignUp.Styled.jsx";

const initialState = {
  nameInput: "",
  emailInput: "",
  passwordInput: "",
  confirmPasswordInput: "",
  termsCheckbox: false,
  isPasswordButtonShow: false,
  isPasswordEyeClosed: true,
  isConfirmPasswordButtonShow: false,
  isConfirmPasswordEyeClosed: true,
};

const reducer = function (prevState, { type, data }) {
  switch (type) {
    case "nameInput":
      return { ...prevState, nameInput: data };
    case "emailInput":
      return { ...prevState, emailInput: data };
    case "passwordInput":
      return { ...prevState, passwordInput: data };
    case "confirmPasswordInput":
      return { ...prevState, confirmPasswordInput: data };
    case "termsCheckbox":
      return { ...prevState, termsCheckbox: data };
    case "isPasswordButtonShow":
      return { ...prevState, isPasswordButtonShow: data };
    case "isPasswordEyeClosed":
      return { ...prevState, isPasswordEyeClosed: data };
    case "isConfirmPasswordButtonShow":
      return { ...prevState, isConfirmPasswordButtonShow: data };
    case "isConfirmPasswordEyeClosed":
      return { ...prevState, isConfirmPasswordEyeClosed: data };
  }
};

export default function SignUp() {
  const [reducerState, dispatch] = useReducer(reducer, initialState);

  const { theme } = useContext(ThemeContext);

  // Page Title useLayoutEffect ;
  useLayoutEffect(() => {
    document.title = "Quiz Project | SignUp";
  }, []);

  return (
    <SignUpDiv>
      <SignUpForm
        $theme={theme}
        action=""
        id="sign-up-form"
        name="sign-up-form"
      >
        <div className="heading">Create An Account</div>

        <label
          className="input-section__name-lable"
          htmlFor="name-label__name-input"
        >
          <input
            required
            autoComplete="off"
            type="text"
            name="name-input"
            id="name-label__name-input"
            placeholder="Enter Name"
            value={reducerState.nameInput}
            onChange={(event) =>
              dispatch({
                type: "nameInput",
                data: event.target.value,
              })
            }
          />
          <FaUserAlt />
        </label>

        <label
          className="input-section__email-lable"
          htmlFor="email-label__email-input"
        >
          <input
            required
            autoComplete="off"
            type="email"
            name="email-input"
            id="email-label__email-input"
            placeholder="Enter Email"
            value={reducerState.emailInput}
            onChange={(event) =>
              dispatch({
                type: "emailInput",
                data: event.target.value,
              })
            }
          />
          <FiAtSign />
        </label>

        <label
          className="input-section__password-lable"
          htmlFor="password-label__password-input"
          onFocus={() => {
            dispatch({
              type: "isPasswordButtonShow",
              data: true,
            });
          }}
          onBlur={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) {
              dispatch({
                type: "isPasswordButtonShow",
                data: !reducerState.isPasswordButtonShow,
              });
            }
          }}
        >
          <input
            required
            autoComplete="off"
            type={reducerState.isPasswordEyeClosed ? "password" : "text"}
            name="password-input"
            id="password-label__password-input"
            placeholder="Enter password"
            value={reducerState.passwordInput}
            onChange={(event) =>
              dispatch({
                type: "passwordInput",
                data: event.target.value,
              })
            }
          />
          {reducerState.isPasswordButtonShow ? (
            <button
              type="button"
              className="password-label__eyeButton"
              onClick={() => {
                dispatch({
                  type: "isPasswordEyeClosed",
                  data: !reducerState.isPasswordEyeClosed,
                });
              }}
            >
              {reducerState.isPasswordEyeClosed ? <FaEyeSlash /> : <FaEye />}
            </button>
          ) : (
            <FaLock />
          )}
        </label>

        <label
          className="input-section__confirm-password-lable"
          htmlFor="confirm-password-label__confirm-password-input"
          onFocus={() => {
            dispatch({
              type: "isConfirmPasswordButtonShow",
              data: true,
            });
          }}
          onBlur={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) {
              dispatch({
                type: "isConfirmPasswordButtonShow",
                data: !reducerState.isConfirmPasswordButtonShow,
              });
            }
          }}
        >
          <input
            required
            autoComplete="off"
            type={reducerState.isConfirmPasswordEyeClosed ? "password" : "text"}
            name="confirm-password-input"
            id="confirm-password-label__confirm-password-input"
            placeholder="Confirm password"
            value={reducerState.confirmPasswordInput}
            onChange={(event) =>
              dispatch({
                type: "confirmPasswordInput",
                data: event.target.value,
              })
            }
          />
          {reducerState.isConfirmPasswordButtonShow ? (
            <button
              type="button"
              className="confirm-password-label__eyeButton"
              onClick={() => {
                dispatch({
                  type: "isConfirmPasswordEyeClosed",
                  data: !reducerState.isConfirmPasswordEyeClosed,
                });
              }}
            >
              {reducerState.isConfirmPasswordEyeClosed ? (
                <FaEyeSlash />
              ) : (
                <FaEye />
              )}
            </button>
          ) : (
            <TbLockCheck />
          )}
        </label>

        <label className="input-section__terms-checkbox-lable">
          <input
            type="checkbox"
            name="input-checkbox"
            id="checkbox-input"
            required
            checked={reducerState.termsCheckbox}
            onChange={() =>
              dispatch({
                type: "termsCheckbox",
                data: !reducerState.termsCheckbox,
              })
            }
          />
          <span className="terms-checkbox-label__text">
            I agree to the Terms & Conditions
          </span>
        </label>

        <button
          type="submit"
          id="sign-up-form__button"
          name="sign-up-form__button"

          // onClick={ singUpFormSubmit }
        >
          Submit
        </button>
        <p className="sign-up-div__lower-text">
          Already have an account ? <Link to="/LogIn">Log In </Link> instead
        </p>
      </SignUpForm>
    </SignUpDiv>
  );
}
