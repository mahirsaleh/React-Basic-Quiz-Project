import { useEffect, useEffectEvent, useRef, useState } from "react";

import { ScoreDiv } from "../../../StyledComponents/Result.styled.jsx";

export default function Score() {
  const [scoreState, setScoreState] = useState(0);

  const circleRef = useRef();
  // const circleIntervalIDRef = useRef();

  const circleAnimation = useEffectEvent(function (targetCircleValue, timer) {
    let currentCircleValue = 0;
    let circleIntervalID = null;
    
    circleIntervalID = setInterval(() => {
      if (
        circleRef.current.style.getPropertyValue("--percentage") ===
          `${targetCircleValue}%`
      ) {
        clearInterval(circleIntervalID);
        return;
      }
      circleRef.current.style.setProperty(
        "--percentage",
        `${++currentCircleValue}%`
      );
    }, timer);

    return circleIntervalID;
  });

  const scoreAnimation = useEffectEvent(function (targetScoreValue, timer) {
    let scoreInterval = null ;
    let currentScore = 0 ;

    scoreInterval = setInterval(() => {
      if (currentScore === targetScoreValue) {
        clearInterval(scoreInterval) ;
        return ;
      }
      setScoreState(++currentScore) ;
    }, timer) ;

    return scoreInterval ;
  }) ;

  useEffect(() => {
    const circleInervalID = circleAnimation(50, (500 / 50));
    const scoreIntervalID = scoreAnimation(5, (500 / 5)) ;

    return () => {
      clearInterval(circleInervalID);
      clearInterval(scoreIntervalID);
    }
  }, []);

  return (
    <ScoreDiv className="score-div">
      <p className="score-div__score-text">Your Score is 5 out of 10</p>

      <div className="score-div__score-circle" ref={circleRef}>
        <span className="score-circle__score">{scoreState} / 10</span>
      </div>
    </ScoreDiv>
  );
}
