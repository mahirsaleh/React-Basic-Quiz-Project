import { useEffect, useReducer } from "react";
import { QuizScoreContext, useAuth } from "./MyContexts";

const reducer = function (prevState, { key, value, clearData }) {
  if (clearData) {
    return null;
  }
  return {
    ...prevState,
    [key]: value,
  };
};

const initialFunction = function (initialState) {
  const sessonStorageData = sessionStorage.getItem("QuizScoreData");

  // console.log("inital Function");

  return sessonStorageData ? JSON.parse(sessonStorageData) : initialState;
};

export default function QuizScoreProvider({ children }) {
  const {
    currentUser: { displayName: userName },
  } = useAuth();

  const [QuizScoreData, QuizScoreDispatch] = useReducer(
    reducer,
    null,
    initialFunction,
  );

  useEffect(() => {
    if (!userName && sessionStorage.getItem("QuizScoreData")) {
      sessionStorage.removeItem("QuizScoreData");
      return;
    }
    if (!QuizScoreData) {
      return;
    }
    sessionStorage.setItem("QuizScoreData", JSON.stringify(QuizScoreData));
    // console.log("gorib");
  }, [QuizScoreData, userName]);

  return (
    <QuizScoreContext
      value={{
        QuizScoreData,
        QuizScoreDispatch,
      }}
    >
      {children}
    </QuizScoreContext>
  );
}
