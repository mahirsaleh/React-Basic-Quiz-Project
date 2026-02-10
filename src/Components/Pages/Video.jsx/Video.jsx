import { VideoCard } from "../../../StyledComponents/Videos.Styled.jsx";
import { useQuizScore } from "../../Context/MyContexts.jsx";

export default function Video({ youtubeID, title, questions }) {
  const { QuizScoreData } = useQuizScore();

  return (
    <VideoCard className="video-card">
      <div className="video-card__image-div">
        <img
          src={`https://img.youtube.com/vi/${youtubeID}/maxresdefault.jpg`}
          alt="image"
        />
      </div>

      <div className="video-card__video-info">
        <div className="video-info__video-titel">
          <p>{title}</p>
        </div>
        <div className="video-info__question-score-div">
          <p className="question-score-div__question">{questions} Questions</p>
          <p className="question-score-div__score">
            {questions ? (
              <>
                <span>Score : </span>{" "}
                {QuizScoreData?.[youtubeID] !== undefined
                  ? QuizScoreData[youtubeID]
                  : "Not Taken"}
              </>
            ) : (
              ""
            )}
          </p>
        </div>
      </div>
    </VideoCard>
  );
}
