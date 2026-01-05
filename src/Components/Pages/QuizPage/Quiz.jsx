import { useLayoutEffect } from "react";

import { QuizContainer } from "../../../StyledComponents/QuizContainer.Styled.jsx";
import CircularProgressSection from "./CircularProgressSection.jsx";
import OptionSection from "./OptionSection.jsx";
import ProgressSection from "./ProgressSection.jsx";
import QuizVideo from "./QuizVideo.jsx";

export default function Quiz() {
  // Page Title useLayoutEffect ;
  useLayoutEffect(() => {
    document.title = "Quiz Project | Quiz";
  }, []);

  return (
    <QuizContainer>
      <div className="quiz-container__heading-section">
        <h1 className="heading-section__header">Question Title</h1>
        <p className="heading-section__lower-text">
          This Question can have multiple answers
        </p>
      </div>

      <QuizVideo />

      <OptionSection />

      <CircularProgressSection />

      <ProgressSection />
    </QuizContainer>
  );
}
