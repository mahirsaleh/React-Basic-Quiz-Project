import { useNavigate } from "react-router-dom";

import { BsClipboard2CheckFill } from "react-icons/bs";

import { AnswerDiv } from "../../../StyledComponents/Result.styled.jsx";

export default function Answers() {
  const navigate = useNavigate();

  return (
    <AnswerDiv className="answer-div">
      {/* Heading text Start's */}
      <p className="answer-div__heading-text">
        <BsClipboard2CheckFill />
        Detailed Result
      </p>
      {/* Heading text End's */}

      {/* Answer Section Start's */}
      <div className="answer-div__answer-section">
        {/* User Answer Start's */}
        <div className="answer-section__user-answers">
          <h3 className="user-answers__heading">Your Answer's</h3>
          <p>user Answer</p>
          <p>user Answer</p>
          <p>user Answer</p>
          {/* ভবিষ্যতের মাহির! আমি অতিতের মাহির বলছি। সুমিত স্যার কি করসে সেটা আমি
            বুঝি নাই। তাই এটা খালি রাখসি। 
          */}
        </div>
        {/* User Answer End's */}

        {/* Real Answer Start's */}
        <div className="answer-section__real-answers">
          <h3 className="real-answers__heading">Real Answer's</h3>
          <p>Real Answer</p>
          <p>Real Answer</p>
          <p>Real Answer</p>
          {/* ভবিষ্যতের মাহির! আমি অতিতের মাহির বলছি। সুমিত স্যার কি করসে সেটা আমি
            বুঝি নাই। তাই এটা খালি রাখসি। 
          */}
        </div>
        {/* Real Answer End's */}
      </div>
      {/* Answer Section End's */}

      <div className="answer-div__go-to-home-page-div">
        <p>Please Click Below To Go Home Page</p>
        <button type="button" onClick={() => navigate("/")}>
          Click Here
        </button>
      </div>
    </AnswerDiv>
  );
}
