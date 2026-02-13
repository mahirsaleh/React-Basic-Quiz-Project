import { useEffect, useEffectEvent, useRef, useState } from "react";

import { ScoreDiv } from "../../../StyledComponents/Result.styled.jsx";

export default function Score({ questions, correctAnswers }) {
  const [scoreState, setScoreState] = useState(0);

  const circleRef = useRef();
  // const circleIntervalIDRef = useRef();

  const circleAnimation = useEffectEvent(function (targetCircleValue, timer) {
    let currentCircleValue = 0;
    let circleIntervalID = null;

    circleIntervalID = setInterval(() => {
      if (!targetCircleValue) {
        clearInterval(circleIntervalID);
        return;
      }
      if (
        circleRef.current?.style.getPropertyValue("--percentage") ===
        `${targetCircleValue}%`
      ) {
        clearInterval(circleIntervalID);
        return;
      }
      circleRef.current?.style.setProperty(
        "--percentage",
        `${++currentCircleValue}%`,
      );
    }, timer);

    return circleIntervalID;
  });

  const scoreAnimation = useEffectEvent(function (targetScoreValue, timer) {
    let scoreInterval = null;
    let currentScore = 0;

    scoreInterval = setInterval(() => {
      if (currentScore === targetScoreValue) {
        clearInterval(scoreInterval);
        return;
      }
      setScoreState(++currentScore);
    }, timer);

    return scoreInterval;
  });

  useEffect(() => {
    const circleInervalID = circleAnimation(
      (correctAnswers * 100) / questions,
      correctAnswers * 5,
    );
    const scoreIntervalID = scoreAnimation(
      correctAnswers,
      ((correctAnswers * 100) / questions) * 5,
    );

    return () => {
      clearInterval(circleInervalID);
      clearInterval(scoreIntervalID);
    };
  }, [correctAnswers, questions]);

  return (
    <ScoreDiv className="score-div">
      <p className="score-div__score-text">
        Your Score is {correctAnswers} out of {questions}
      </p>

      <div className="score-div__score-circle" ref={circleRef}>
        <span className="score-circle__score">
          {scoreState} / {questions}
        </span>
      </div>
    </ScoreDiv>
  );
}
