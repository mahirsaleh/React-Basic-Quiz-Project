import { useNavigate } from "react-router-dom";

import { BsClipboard2CheckFill } from "react-icons/bs";

import { AnswerDiv } from "../../../StyledComponents/Result.styled.jsx";

export default function Answers({ onlyCorrectAnswers, result, userInput }) {
  const navigate = useNavigate();

  return (
    <AnswerDiv className="answer-div">
      {!Object.keys(onlyCorrectAnswers).length ? (
        <h2>Loading</h2>
      ) : (
        result.map((value, index) => {
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

                  {Object.entries(userInput[title]).map(
                    (userValue, userIndex) => {
                      const userSelectCorrectAnswersArray =
                        onlyCorrectAnswers[title];
                      const wrightOrWrong =
                        userSelectCorrectAnswersArray?.length &&
                        userSelectCorrectAnswersArray?.includes(userValue[0]);

                      return userValue[1] ? (
                        <p
                          style={
                            !wrightOrWrong
                              ? {
                                  backgroundColor: `hsl(0, 53%, 58%)`,
                                  color: "white",
                                }
                              : {}
                          }
                          key={userIndex}
                        >
                          {userValue[0]}
                        </p>
                      ) : (
                        ""
                      );
                    },
                  )}
                </div>

                <div className="answer-section__real-answers">
                  <h3 className="real-answers__heading">Real Answer's</h3>
                  {value.options.map((realValue, realIndex) => {
                    return realValue.correct ? (
                      <p key={realIndex}> {realValue.title} </p>
                    ) : (
                      ""
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })
      )}

      <div className="answer-div__go-to-home-page-div">
        <p>Please Click Below To Go Home Page</p>
        <button type="button" onClick={() => navigate("/")}>
          Click Here
        </button>
      </div>
    </AnswerDiv>
  );
}
