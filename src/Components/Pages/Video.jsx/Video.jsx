import image from "../../../assets/images/hqdefault.avif";

import { VideoCard } from "../../../StyledComponents/Videos.Styled.jsx";

export default function Video() {
  return (
    <VideoCard className="video-card">
      <div className="video-card__image-div">
        <img src={image} alt="image" />
      </div>

      <div className="video-card__video-info">
        <div className="video-info__video-titel">
          <p>সূরা গাফির</p>
        </div>
        <div className="video-info__question-score-div">
          <p className="question-score-div__question">10 Questions</p>
          <p className="question-score-div__score">
            <span> Score : </span> Not taken yet
          </p>
        </div>
      </div>
    </VideoCard>
  );
}
