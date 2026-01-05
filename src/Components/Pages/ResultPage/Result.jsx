import { useLayoutEffect } from "react";

import { ResultDiv } from "../../../StyledComponents/Result.styled.jsx";
import Answers from "./Answers.jsx";
import Score from "./Score.jsx";

export default function Result() {
  // Page Title useLayoutEffect ;
  useLayoutEffect(() => {
    document.title = "Quiz Project | Result";
  }, []);

  return (
    <ResultDiv className="result-div">
      {/* Score Section Start's */}
      <Score />
      {/* Score Section End's */}

      {/* Analysis Header Section Start's */}
      <div className="result-div__analyse-section">
        <h1 className="analyse-section__heading">Question Analysis</h1>
        <p className="analyse-section__score-text">
          You answered 5 out of 10 questions correctly
        </p>
      </div>
      {/* Analysis Header Section End's */}

      {/* Answer Section Start's */}
      <Answers />
      {/* Answer Section End's */}
    </ResultDiv>
  );
}
