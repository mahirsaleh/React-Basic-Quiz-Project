import { GlobalStyled } from "../../StyledComponents/Global.Styled";
import { ThemeContext } from "./MyContexts";

import { useEffect, useState } from "react";

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    const localStorageTheme = localStorage.getItem("theme");
    if (localStorageTheme) {
      return localStorageTheme;
    } else {
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "black"
        : "white";
    }
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);


  return (
    <>
        <GlobalStyled $theme={theme} />
    <ThemeContext value={{ theme, setTheme }}>{children}</ThemeContext>
    </>
  );
}
