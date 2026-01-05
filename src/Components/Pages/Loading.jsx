import { useContext } from "react";
import { LoadingDiv } from "../../StyledComponents/Loading.Styled.jsx";

import ThemeContext from "../ThemeContext.jsx";

export default function Loading() {
  const { theme } = useContext(ThemeContext);

  return (
    <LoadingDiv $theme={theme}>
      <div className="loading-circle"></div>
    </LoadingDiv>
  );
}
