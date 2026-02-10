import { useNavigate } from "react-router-dom";

import { GoArrowLeft, GoArrowRight } from "react-icons/go";

import { ProgressContainer } from "../../../StyledComponents/QuizContainer.Styled.jsx";

export default function ProgressSection({
  videoID,
  quizListLength,
  index,
  setIndex,
  setIsOptionStateUpdated,
  progress,
  optionStates,
}) {
  const navigate = useNavigate();

  const forwardButtonClickHandler = function () {
    if (quizListLength > index + 1) {
      setIndex((prevIndex) => prevIndex + 1);

      setIsOptionStateUpdated(false);
      navigate(`/Quiz/${videoID}/${index + 1}`);
      return;
    }
    // setIndex(0);
    return navigate(`/Result/${videoID}`, { state: optionStates });
  };

  const backButtonHandler = function () {
    if (index) {
      setIndex((prevIndex) => prevIndex - 1);
      setIsOptionStateUpdated(false);
      navigate(`/Quiz/${videoID}/${index - 1}`);

      return;
    }
    return navigate("/");
  };

  return (
    <ProgressContainer $progressBar={progress}>
      <button
        className="progressContainer__back-button"
        onClick={backButtonHandler}
      >
        <GoArrowLeft />
      </button>

      <div className="progressContainer__progress-bar">
        <span className="progress-bar__tooltip">{progress}%</span>
      </div>

      <button
        className="progressContainer__forward-button"
        onClick={forwardButtonClickHandler}
      >
        Next Question
        <GoArrowRight />
      </button>
    </ProgressContainer>
  );
}
