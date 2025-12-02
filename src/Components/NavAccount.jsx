import { faCircleUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { NavAccountDiv } from "../StyledComponents/Nav.styled.jsx";

export default function NavAccount() {
  return (
    <NavAccountDiv>
      <FontAwesomeIcon icon={faCircleUser} />

      <a href="">SignUp</a>
    </NavAccountDiv>
  );
}
