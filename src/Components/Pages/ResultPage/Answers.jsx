import { useNavigate } from "react-router-dom";

import { BsClipboard2CheckFill } from "react-icons/bs";

import { AnswerDiv } from "../../../StyledComponents/Result.styled.jsx";

export default function Answers({ result, userInput }) {
  const navigate = useNavigate();

  console.log(result);
  console.log(userInput);

  return (
    <AnswerDiv className="answer-div">
      {/* Heading text Start's */}
      {/* <p className="answer-div__heading-text">
        <BsClipboard2CheckFill />
        Questions
      </p> */}
      {/* Heading text End's */}

      {/* Answer Section Start's */}
      {/* <div className="answer-div__answer-section"> */}

      {/* <div className="answer-section__user-answers">
          <h3 className="user-answers__heading">Your Answer's</h3>
          <p>user Answer</p>
          <p>user Answer</p>
          <p>user Answer</p>
        </div>


        <div className="answer-section__real-answers">
          <h3 className="real-answers__heading">Real Answer's</h3>
          <p>Real Answer</p>
          <p>Real Answer</p>
          <p>Real Answer</p>
        </div> */}
      {/* </div> */}
      {/* Answer Section End's */}

      {result.map((value, index) => {
        const title = value.title;
        return (
          <div
            style={{
              marginBottom: "50px",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
            key={index}
          >
            <p className="answer-div__heading-text" key={index}>
              <BsClipboard2CheckFill /> {title}
            </p>

            <div className="answer-div__answer-section">
              <div className="answer-section__user-answers">
                <h3 className="user-answers__heading">Your Answer's</h3>

                {Object.entries(userInput[title]).map((value, index) => {
                  return value[1] ? <p key={index}>{value[0]}</p> : "";
                })}
              </div>

              <div className="answer-section__real-answers">
                <h3 className="real-answers__heading">Real Answer's</h3>
                {value.options.map((value, index) => {
                  return value.correct ? (
                    <p key={index}> {value.title} </p>
                  ) : (
                    ""
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}

      <div className="answer-div__go-to-home-page-div">
        <p>Please Click Below To Go Home Page</p>
        <button type="button" onClick={() => navigate("/")}>
          Click Here
        </button>
      </div>
    </AnswerDiv>
  );
}
