import { Link } from "react-router-dom";

import { faCircleUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MdLogout } from "react-icons/md";

import { NavAccountDiv } from "../../StyledComponents/Nav.styled.jsx";

import { useAuth } from "../Context/MyContexts.jsx";

export default function NavAccount() {
  const { currentUser, logOut } = useAuth();

  if (currentUser?.displayName) {
    return (
      <NavAccountDiv>
        <p>
          {currentUser.displayName}
        </p>

        <MdLogout
          style={{
            cursor: 'pointer'
          }}
          onClick={ logOut }
        />
      </NavAccountDiv>
    );
  } else {
    return (
      <NavAccountDiv>
        <FontAwesomeIcon icon={faCircleUser} />

        <Link to="/SignUp">SignUp</Link>
      </NavAccountDiv>
    );
  }
}
