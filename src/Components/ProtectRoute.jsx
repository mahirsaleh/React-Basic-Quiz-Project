import { Navigate, Outlet, useParams } from "react-router-dom";

import { useAuth } from "./Context/MyContexts.jsx";
import PageNotFound from "./Pages/PageNotFound.jsx";

export default function ProtectRoute() {
  const { currentUser } = useAuth();
  const { "*": param } = useParams();

  // return currentUser?.displayName ? <Outlet /> : <Navigate to='/LogIn' />

  if (param === "Quiz" || param === "Result") {
    return currentUser?.displayName ? (
      <Outlet />
    ) : (
      <Navigate to="/LogIn" replace={true} />
    );
  } else if (param === "LogIn" || param === "SignUp") {
    return !currentUser?.displayName ? (
      <Outlet />
    ) : (
      <Navigate to="/" replace={true} />
    );
  } else {
    return <PageNotFound />;
  }
}
