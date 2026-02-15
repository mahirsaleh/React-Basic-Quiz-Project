import { useRef } from "react";
import { Link } from "react-router-dom";

import Footer from "../../Footer.jsx";
import Video from "./Video.jsx";

import useVideos from "../../../Database/useVidoes.jsx";
import { VideoContainer } from "../../../StyledComponents/Videos.Styled.jsx";
import Loading from "../Loading.jsx";

export default function Videos() {
  const footerRef = useRef(null);
  const { videoList, loading, scrollLoading } = useVideos(8, 1, footerRef);

  if (!loading && !videoList) {
    return <h1>Error</h1>;
  }

  return (
    <>
      <title>Quiz Project</title>
      <VideoContainer>
        {loading ? (
          <Loading />
        ) : videoList.length ? (
          videoList.map((value) => (
            <Link
              to={
                value.noq
                  ? `/Quiz/${value.youtubeID}/0`
                  : `https://www.youtube.com/watch?v=${value.youtubeID}`
              }
              target={value.noq ? "" : "_blank"}
              rel={value.noq ? "noopener noreferrer" : ""}
              key={value.youtubeID}
              style={{
                display: "flex",
              }}
            >
              <Video
                title={value.title}
                questions={value.noq}
                youtubeID={value.youtubeID}
              />
            </Link>
          ))
        ) : (
          <h2>No Data Found</h2>
        )}
      </VideoContainer>

      {scrollLoading && (
        <h2
          style={{
            padding: "10px",
            paddingTop: "30px",
            textAlign: "center",
          }}
        >
          Loading...
        </h2>
      )}

      <footer
        ref={footerRef}
        style={!videoList.length ? { display: "none" } : {}}
      >
        <Footer />
      </footer>
    </>
  );
}
