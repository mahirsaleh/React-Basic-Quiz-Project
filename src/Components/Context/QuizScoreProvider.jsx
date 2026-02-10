import { useEffect, useReducer } from "react";
import { QuizScoreContext } from "./MyContexts";

const reducer = function (prevState, { key, value }) {
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
  const [QuizScoreData, QuizScoreDispatch] = useReducer(
    reducer,
    null,
    initialFunction,
  );

  useEffect(() => {
    if (!QuizScoreData) {
      return;
    }
    sessionStorage.setItem("QuizScoreData", JSON.stringify(QuizScoreData));
    // console.log("gorib");
  }, [QuizScoreData]);

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
