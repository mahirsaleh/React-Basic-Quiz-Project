import Styled from "styled-components";

export const VideoCard = Styled.div`
  display: flex ;
  flex-direction: column ;
  gap: 15px ;
  cursor: pointer ;

  background: var(--background-color) ;
  padding: 10px ;
  border-radius: 10px ;
  box-shadow: 2px 3px 8px  grey,
              -1px -1px 5px grey ;

  & > .video-card__image-div > img {
    width: 100% ;
  }

  & .video-info__video-titel {
    font-size: 18px ;
    /* @media screen and (max-width: 800px) {
      font-size: 15px ;
    } */
  }

  & .video-info__question-score-div {
    display: flex ;
    flex-direction: row ;
    justify-content: space-between ;

    margin-top: 20px ;
    margin-bottom: 5px ;

    & p {
      font-size: 15px ;
    }
    & p.question-score-div__score span {
      color: var(--video-card-question-score-color) ;
    }
  }

  @media screen and (max-width: 1000px) {
    gap: 10px ;
    padding: 8px ;

    & .video-info__question-score-div {
      margin: 10px 0px ;
    }
  }
  @media screen and (max-width: 580px) {
    border-radius: 3px ;

    & .video-info__question-score-div {
      margin: 8px 0px ;
    }
  }
  @media screen and (max-width: 349px) {
    border-radius: 2px ;
    padding: 5px ;

    & .video-info__question-score-div {
      margin: 8px 0px ;
    }
    & .video-info__video-titel {
      font-size: 16px ;
    }
  }
`;

export const VideoContainer = Styled.div`
  width: 100% ;
  display: grid ;
  grid-template-columns: repeat(4, 1fr) ;
  gap: 50px 20px ;
  padding: 15px ;
  padding-top: 30px ;
  margin-top: 10px ;

  & > a {
    text-decoration: none ;
    color: var(--font-color) ;
  }

  @media screen and (max-width: 1300px) {
    grid-template-columns: repeat(3, 1fr) ;
    row-gap: 40px ;
  }
  @media screen and (max-width: 850px) {
    grid-template-columns: repeat(2, 1fr) ;
    padding: 10px ;
    padding-top: 20px ;
    row-gap: 30px ;
  }
  @media screen and (max-width: 580px) {
    grid-template-columns: 1fr ;
    gap: 20px ;
  }
`;
