import { useNavigate } from 'react-router-dom' ;

import { GoArrowLeft, GoArrowRight } from "react-icons/go";

import { ProgressContainer } from "../../../StyledComponents/QuizContainer.Styled.jsx";

export default function ProgressSection() {

  const navigate = useNavigate() ;

  return (
    <ProgressContainer>
      <button className="progressContainer__back-button">
        <GoArrowLeft />
      </button>

      <div className="progressContainer__progress-bar">
        <span className="progress-bar__tooltip">70%</span>
      </div>

      <button className="progressContainer__forward-button"
        onClick={
          () => navigate('/Result')
        }
      >
        Next Question
        <GoArrowRight />
      </button>
    </ProgressContainer>
  );
}
