import { Suspense, useEffect, useState } from "react";

import Layout from "./Components/Layout.jsx";
import ThemeContext from "./Components/ThemeContext.jsx";
import { GlobalStyled } from "./StyledComponents/Global.Styled.jsx";
import Loading from "./Components/Pages/Loading.jsx";

export default function App() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "white"
  );

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <>
      <GlobalStyled $theme={theme} />

      {/* <Suspense
        fallback={<Loading/>}
      > */}
        <ThemeContext value={{ theme, setTheme }}>
          <Layout />
        </ThemeContext>
      {/* </Suspense> */}
    </>
  );
}
