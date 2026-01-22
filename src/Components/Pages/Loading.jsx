import { LoadingDiv } from "../../StyledComponents/Loading.Styled.jsx";

import { useTheme } from "../Context/MyContexts.jsx";

export default function Loading() {
  const { theme } = useTheme();

  return (
    <LoadingDiv $theme={theme}>
      <div className="loading-circle"></div>
    </LoadingDiv>
  );
}
