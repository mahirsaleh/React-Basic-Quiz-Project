import { Link } from 'react-router-dom' ;

import { faCircleUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { NavAccountDiv } from "../../StyledComponents/Nav.styled.jsx";

export default function NavAccount() {
  return (
    <NavAccountDiv>
      <FontAwesomeIcon icon={faCircleUser} />

      <Link to='/SignUp' >SignUp</Link>
    </NavAccountDiv>
  );
}
