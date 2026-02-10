import { useActionState, useLayoutEffect, useReducer } from "react";
import { Link, useNavigate } from "react-router-dom";

import { FaEye, FaEyeSlash, FaLock, FaUserAlt } from "react-icons/fa";
import { FiAtSign } from "react-icons/fi";

import LogInFormContainer from "../../StyledComponents/LogIn.Styled.jsx";
import { useAuth } from "../Context/MyContexts.jsx";
import NotificationAlert from "./NotificationAlert.jsx";

const initialState = {
  nameInput: "",
  emailInput: "",
  passwordInput: "",
  isPasswordButtonShow: false,
  isPasswordEyeClosed: true,
};

const reducer = function (prevState, { type, data }) {
  switch (type) {
    case "nameInput":
      return { ...prevState, nameInput: data.replace(/\s+/g, " ") };
    case "emailInput":
      return { ...prevState, emailInput: data.replace(/\s+/g, "") };
    case "passwordInput":
      return { ...prevState, passwordInput: data.replace(/\s+/g, " ") };
    case "isPasswordButtonShow":
      return { ...prevState, isPasswordButtonShow: data };
    case "isPasswordEyeClosed":
      return { ...prevState, isPasswordEyeClosed: data };
  }
};

export default function LogIn() {
  const [inputsState, dispatcher] = useReducer(reducer, initialState);

  const { login, setIsUserNameError } = useAuth();
  const navigate = useNavigate();

  const actionFunction = async function (prevFormState, formData) {
    const userData = {
      userName: formData.get("name-input").trim(),
      userEmail: formData.get("email-input"),
      userPassword: formData.get("password-input").trim(),
    };

    try {
      const logInData = await login(userData.userEmail, userData.userPassword);

      if (logInData.user.displayName !== userData.userName) {
        setIsUserNameError(() => true);
        return "name does not match";
      }
      setIsUserNameError(() => false);
      navigate("/", { replace: true });
      return "";
    } catch (error) {
      return error.code
        .replace("auth/", "")
        .replace("-credential", " email or password");
    }
  };

  const [message, formAction, isPending] = useActionState(actionFunction, null);
  // Page Title useLayoutEffect ;
  useLayoutEffect(() => {
    document.title = "Quiz Project | LogIn";
  }, []);

  // if (currentUser?.displayName && !isUserNameError) {
  //   console.log(message);
  //   return <Navigate to="/" replace={true} />;
  // }

  return (
    <LogInFormContainer>
      <NotificationAlert isPending={isPending} parentPageName="Log In">
        {message}
      </NotificationAlert>

      <form id="LogInForm" name="LogInForm" action={formAction}>
        <h1 className="login__header">Log In</h1>

        <label
          className="input-section__name-lable"
          htmlFor="name-label__name-input"
        >
          <input
            disabled={isPending}
            required
            autoComplete="off"
            type="text"
            name="name-input"
            id="name-label__name-input"
            placeholder="Enter Name"
            value={inputsState.nameInput}
            onChange={(event) =>
              dispatcher({
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
            disabled={isPending}
            required
            autoComplete="off"
            type="email"
            name="email-input"
            id="email-label__email-input"
            placeholder="Enter Email"
            value={inputsState.emailInput}
            onChange={(event) =>
              dispatcher({
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
            dispatcher({
              type: "isPasswordButtonShow",
              data: true,
            });
          }}
          onBlur={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) {
              dispatcher({
                type: "isPasswordButtonShow",
                data: !inputsState.isPasswordButtonShow,
              });
            }
          }}
        >
          <input
            disabled={isPending}
            required
            autoComplete="off"
            type={inputsState.isPasswordEyeClosed ? "password" : "text"}
            name="password-input"
            id="password-label__password-input"
            placeholder="Enter Password"
            value={inputsState.passwordInput}
            onChange={(event) =>
              dispatcher({
                type: "passwordInput",
                data: event.target.value,
              })
            }
          />
          {inputsState.isPasswordButtonShow ? (
            <button
              type="button"
              className="password-label__eyeButton"
              onClick={() => {
                dispatcher({
                  type: "isPasswordEyeClosed",
                  data: !inputsState.isPasswordEyeClosed,
                });
              }}
            >
              {inputsState.isPasswordEyeClosed ? <FaEyeSlash /> : <FaEye />}
            </button>
          ) : (
            <FaLock />
          )}
          {/* <button
              type="button"
              className="password-label__eyeButton"
              onClick={() => {
                dispatcher({
                  type: "isPasswordEyeClosed",
                  data: !inputsState.isPasswordEyeClosed,
                })}
              }
            >
              {inputsState.isPasswordEyeClosed ? <FaEyeSlash /> : <FaEye />}
            </button> */}
        </label>

        <button
          className="login__submit-button"
          type="submit"
          disabled={isPending}
        >
          Submit
        </button>

        <div className="login__bottom-text">
          <p>Don't Have Account ?</p>
          <Link to="/SignUp">Sign Up</Link>
        </div>

        {/* <p>{message}</p> */}
      </form>
    </LogInFormContainer>
  );
}
