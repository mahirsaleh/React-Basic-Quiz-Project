import { useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";

import { PageNotFoundDiv } from "../../StyledComponents/PageNotFound.Styled.jsx";
import { useTheme } from "../Context/MyContexts.jsx";

export default function PageNotFound() {
  const { theme } = useTheme();
  const navigate = useNavigate();

  useLayoutEffect(() => {
    document.title = "Page Not Found";
  }, []);

  return (
    <PageNotFoundDiv $theme={theme}>
      <h1>Page Not Found !</h1>

      <div>
        <h3>Go to Previous Page</h3>
        <button
          type="button"
          onClick={() => {
            if (window.history.length > 1) {
              navigate(-1, { replace: true });
              return;
            }
            navigate("/", { replace: true });
          }}
        >
          Click Here
        </button>
      </div>
    </PageNotFoundDiv>
  );
}
