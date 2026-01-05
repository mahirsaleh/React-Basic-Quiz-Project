import { CircularProgressContainer } from "../../../StyledComponents/QuizContainer.Styled.jsx";

export default function CircularProgressSection() {
  return (
    <CircularProgressContainer>
      <div className="inner-circle">
        <svg>
          <circle />
        </svg>
      </div>
        <span className="inner-circle__persent">
          50%
        </span>
    </CircularProgressContainer>
  );
}
