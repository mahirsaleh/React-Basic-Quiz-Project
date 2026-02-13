import { useEffect, useEffectEvent, useLayoutEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

import useResult from "../../../Database/useResult.jsx";
import { ResultDiv } from "../../../StyledComponents/Result.styled.jsx";
import { useQuizScore } from "../../Context/MyContexts.jsx";
import Loading from "../Loading.jsx";
import Answers from "./Answers.jsx";
import Score from "./Score.jsx";

export default function Result() {
  const { videoID } = useParams();
  const { state: userInput } = useLocation();
  const { result, loading, error } = useResult(videoID);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [userSelectCorrectAnswersList, setUserSelectCorrectAnswersList] =
    useState({});
  const { QuizScoreDispatch } = useQuizScore();

  const totalQuestions = result?.length;

  const sideEffectCountCorrectAnswers = useEffectEvent(() => {
    let answer = 0;
    const correctAnswers = {};

    result?.forEach((value) => {
      const title = value.title;
      correctAnswers[title] = [];

      let sameQuestionMultipleAnswerCount = 0;
      let userCorrectAnswerCount = 0;
      let doesUserSelectWrongAnswer = false;
      // onlyCorrectAnswersList[]

      value.options.forEach((option) => {
        if (option.correct) {
          sameQuestionMultipleAnswerCount++;

          if (userInput[title][option.title]) {
            ++userCorrectAnswerCount;
            correctAnswers[title].unshift(option.title);
          }
        } else if (userInput[title][option.title]) {
          doesUserSelectWrongAnswer = true;
        }
      });
      if (doesUserSelectWrongAnswer) {
        return;
      }
      if (sameQuestionMultipleAnswerCount === userCorrectAnswerCount) {
        ++answer;
      }
      // console.log(
      //   title,
      //   " ",
      //   sameQuestionMultipleAnswerCount,
      //   " ",
      //   userCorrectAnswerCount,
      // );
    });
    setCorrectAnswers((prevAnswer) => answer || prevAnswer);
    setUserSelectCorrectAnswersList(correctAnswers);
    QuizScoreDispatch({ key: videoID, value: answer });
  });

  // console.log(result);
  // console.log(userInput) ;
  // console.log(correctAnswers)

  useEffect(() => {
    sideEffectCountCorrectAnswers();
  }, [result]);

  // Page Title useLayoutEffect ;
  useLayoutEffect(() => {
    document.title = "Quiz Project | Result";
  }, []);

  if (!userInput) {
    return (
      <h2
        style={{
          textAlign: "center",
          fontSize: "35px",
          position: "relative",
          top: "100px",
          padding: "0px 20px",
        }}
      >
        You did not attended quiz game !
      </h2>
    );
  }

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return (
      <h2
        style={{
          textAlign: "center",
          fontSize: "35px",
          position: "relative",
          top: "100px",
          padding: "0px 20px",
        }}
      >
        Error !
      </h2>
    );
  }

  if (!result && loading) {
    return (
      <h2
        style={{
          textAlign: "center",
          fontSize: "35px",
          position: "relative",
          top: "100px",
          padding: "0px 20px",
        }}
      >
        No Data Found !
      </h2>
    );
  }

  return (
    <ResultDiv className="result-div">
      {/* Score Section Start's */}
      <Score questions={totalQuestions} correctAnswers={correctAnswers} />
      {/* Score Section End's */}

      {/* Analysis Header Section Start's */}
      <div className="result-div__analyse-section">
        <h1 className="analyse-section__heading">Question Analysis</h1>
        <p className="analyse-section__score-text">
          You answered {correctAnswers} out of {totalQuestions} questions
          correctly
        </p>
      </div>
      {/* Analysis Header Section End's */}

      {/* Answer Section Start's */}
      <Answers
        onlyCorrectAnswers={userSelectCorrectAnswersList}
        result={result}
        userInput={userInput}
      />
      {/* Answer Section End's */}
    </ResultDiv>
  );
}
