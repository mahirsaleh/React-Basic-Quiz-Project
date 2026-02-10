import { QuizVidoeIframe } from "../../../StyledComponents/QuizContainer.Styled.jsx";

export default function QuizVideo({ videoID }) {
  return (
    <QuizVidoeIframe>
      <iframe
        src={`https://www.youtube.com/embed/${videoID}?rel=0&modestbranding=1`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </QuizVidoeIframe>
  );
}
