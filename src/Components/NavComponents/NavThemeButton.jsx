import { IoIosMoon } from "react-icons/io";
import { MdSunny } from "react-icons/md";

import { NavThemeDiv } from "../../StyledComponents/Nav.styled.jsx";
import { useTheme } from "../Context/MyContexts.jsx";

export default function NavThemeButton() {
  const { theme, setTheme } = useTheme();

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
