import { useReducer } from "react";
import { FaLock, FaUserAlt } from "react-icons/fa";
import { FiAtSign } from "react-icons/fi";
import LogInFormContainer from "../../StyledComponents/LogIn.Styled.jsx";

const initialState = {
  nameInput: "",
  emailInput: "",
  passwordInput: "",
};

const reducer = function (prevState, { type, data }) {
  switch (type) {
    case "nameInput":
      return { ...prevState, nameInput: data };
    case "emailInput":
      return { ...prevState, emailInput: data };
    case "passwordInput":
      return { ...prevState, passwordInput: data };
  }
};

export default function LogIn() {
  const [inputsState, dispatcher] = useReducer(reducer, initialState);

  return (
    <LogInFormContainer>

      <form action="" id="LogInForm" name="LogInForm">
        <h1 className="login__header">Log In</h1>

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
        >
          <input
            required
            autoComplete="off"
            type="password"
            name="password-input"
            id="password-label__password-input"
            placeholder="Enter password"
            value={inputsState.passwordInput}
            onChange={(event) =>
              dispatcher({
                type: "passwordInput",
                data: event.target.value,
              })
            }
          />
          <FaLock />
        </label>

        <button className="login__submit-button">
          Submit
        </button>
      </form>
    </LogInFormContainer>
  );
}
