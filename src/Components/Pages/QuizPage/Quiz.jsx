import { useEffect, useReducer, useState } from "react";
import { useParams } from "react-router-dom";

import useQuiz from "../../../Database/useQuiz.jsx";
import { QuizContainer } from "../../../StyledComponents/QuizContainer.Styled.jsx";
import Loading from "../Loading.jsx";
import PageNotFound from "../PageNotFound.jsx";
import CircularProgressSection from "./CircularProgressSection.jsx";
import OptionSection from "./OptionSection.jsx";
import ProgressSection from "./ProgressSection.jsx";

export default function Quiz() {
  const { videoID, page } = useParams();
  const { quizList, loading, isError } = useQuiz(videoID);
  const [quizListIndex, setQuizListIndex] = useState(Number(page));

  // option state's start's ;
  const [isOptionStateUpdated, setIsOptionStateUpdated] = useState(false);
  const optionReducer = function (prevState, { key, value, optionList }) {
    const questionTitle = quizList[quizListIndex]?.title;

    if (optionList) {
      //it means user clicked back and forward button ;
      if (prevState[questionTitle]) {
        setIsOptionStateUpdated(true);
        return prevState;
      }
      // updating new list ;
      const newLists = { [questionTitle]: {} };
      optionList.forEach((value) => {
        newLists[questionTitle][`${value.title}`] = false;
      });
      setIsOptionStateUpdated(true);
      return { ...prevState, ...newLists };
    }
    // controlling checkbox by user selection ;
    const newLists = prevState[questionTitle];
    newLists[key] = value;
    return {
      ...prevState,
      [questionTitle]: newLists,
    };
  };
  const [optionStates, dispatcher] = useReducer(optionReducer, {});
  // option state's end's ;

  // check count start's ;
  const [checkCount, dispatchCheckCound] = useReducer(
    (prevCheckCount, { quizList, questionTitle, checkedValue }) => {
      if (quizList) {
        const newCheckCount = {};
        const length = quizList.length;
        for (let i = 0; i < length; i++) {
          newCheckCount[quizList[i].title] = false;
        }
        return newCheckCount;
      }
      const totalListChecked = Object.values(
        optionStates[questionTitle],
      ).filter((value) => value).length;

      if (totalListChecked > 1) {
        return prevCheckCount;
      } else if (totalListChecked === 1) {
        if (checkedValue === true) {
          return {
            ...prevCheckCount,
            [questionTitle]: true,
          };
        }
        return prevCheckCount;
      } else if (!totalListChecked)
        return {
          ...prevCheckCount,
          [questionTitle]: checkedValue,
        };
      return prevCheckCount;
    },
    null,
  );
  // check count end's ;

  // for progress persentage ;
  let progress = !checkCount
    ? 0
    : (Object.values(checkCount).filter((value) => value).length * 100) /
      quizList.length;

  // for optionStates ;
  useEffect(() => {
    const options = quizList[quizListIndex]?.options;
    if (!options) {
      return;
    }
    dispatcher({
      optionList: quizList[quizListIndex]?.options,
    });
  }, [quizList, quizListIndex]);

  // for checkCount ;
  useEffect(() => {
    if (!quizList.length) {
      return;
    }
    dispatchCheckCound({
      quizList: quizList,
    });
  }, [quizList]);

  if (loading) {
    return <Loading />;
  } else if (isError) {
    return (
      <h2
        style={{
          fontSize: "50px",
          paddingTop: "50px",
          textAlign: "center",
        }}
      >
        Error !
      </h2>
    );
  } else if (
    (!quizList?.length && !loading) ||
    quizList?.length < quizListIndex + 1 ||
    quizListIndex < 0 ||
    isNaN(quizListIndex)
  ) {
    return <PageNotFound />;
  } else if (!isOptionStateUpdated) {
    return <></>;
  }

  return (
    <>
      <title>Quiz Project | Quiz</title>
      <QuizContainer>
        <div className="quiz-container__heading-section">
          <h1 className="heading-section__header">
            {quizList[quizListIndex]?.title}
          </h1>
          <p className="heading-section__lower-text">
            This Question can have multiple answers
          </p>
        </div>

        {/* <QuizVideo videoID={videoID} /> */}

        <OptionSection
          quizList={quizList[quizListIndex]?.options}
          optionStates={optionStates}
          dispatcher={dispatcher}
          isOptionStateUpdated={isOptionStateUpdated}
          quizListLength={quizList?.length}
          dispatchCheckCount={dispatchCheckCound}
          questionTitle={quizList[quizListIndex]?.title}
        />

        <CircularProgressSection progress={progress} />

        <ProgressSection
          videoID={videoID}
          quizListLength={quizList?.length}
          index={quizListIndex}
          setIndex={setQuizListIndex}
          setIsOptionStateUpdated={setIsOptionStateUpdated}
          progress={progress}
          optionStates={optionStates}
        />
      </QuizContainer>
    </>
  );
}
