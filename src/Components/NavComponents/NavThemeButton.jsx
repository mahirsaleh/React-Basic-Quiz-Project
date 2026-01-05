import { useContext } from "react";
import { IoIosMoon } from "react-icons/io";
import { MdSunny } from "react-icons/md";

import { NavThemeDiv } from "../../StyledComponents/Nav.styled.jsx";
import ThemeContext from "../ThemeContext.jsx";

export default function NavThemeButton() {
  const { theme, setTheme } = useContext(ThemeContext);

  const changeTheme = function () {
    setTheme((prevTheme) => (prevTheme === "white" ? "black" : "white"));
  };

  return (
    <NavThemeDiv onClick={changeTheme}>
      {theme === "white" ? (
        <MdSunny />
      ) : (
        <IoIosMoon
          style={{
            transform: "scaleX(-1)",
          }}
        />
      )}

      <span className="toolTip">Theme</span>
    </NavThemeDiv>
  );
}
