import { CircularProgressContainer } from "../../../StyledComponents/QuizContainer.Styled.jsx";

export default function CircularProgressSection({ progress }) {
  return (
    <CircularProgressContainer $progress={progress}>
      <div className="inner-circle">
        <svg>
          <circle />
        </svg>
      </div>
      <span className="inner-circle__persent">{progress}%</span>
    </CircularProgressContainer>
  );
}
