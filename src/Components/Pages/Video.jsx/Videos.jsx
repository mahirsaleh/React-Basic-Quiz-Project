import { useLayoutEffect } from "react";
import { Link } from "react-router-dom";

import Footer from "../../Footer.jsx";
import Video from "./Video.jsx";

import { VideoContainer } from "../../../StyledComponents/Videos.Styled.jsx";

// Temporary 


// Temporary 


export default function Videos() {
  useLayoutEffect(() => {
    document.title = "Quiz Project";
  }, []);

  return (
    <>
      <VideoContainer>
        <Link to="/Quiz">
          <Video />
        </Link>
        <Link to="/Quiz">
          <Video />
        </Link>
        <Link to="/Quiz">
          <Video />
        </Link>
        <Link to="/Quiz">
          <Video />
        </Link>
        <Link to="/Quiz">
          <Video />
        </Link>
        <Link to="/Quiz">
          <Video />
        </Link>
        <Link to="/Quiz">
          <Video />
        </Link>
        <Link to="/Quiz">
          <Video />
        </Link>
      </VideoContainer>

      <footer>
        <Footer />
      </footer>
    </>
  );
}
