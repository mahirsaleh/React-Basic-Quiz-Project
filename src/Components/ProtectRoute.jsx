import { Navigate, Outlet, useParams } from "react-router-dom";

import { useAuth } from "./Context/MyContexts.jsx";
import PageNotFound from "./Pages/PageNotFound.jsx";

export default function ProtectRoute() {
  const { currentUser, isUserNameError } = useAuth();
  const { "*": protect } = useParams();

  if (protect === "LogIn") {
    if (isUserNameError) {
      return <Outlet />;
    }
    return !currentUser?.displayName ? <Outlet /> : <Navigate to="/" />;
  } else if (protect === "SignUp") {
    return !currentUser?.displayName ? <Outlet /> : <Navigate to="/" />;
  } else if (protect.includes("Quiz", 0) || protect.includes("Result", 0)) {
    return currentUser?.displayName ? <Outlet /> : <Navigate to="/LogIn" />;
  }
  return currentUser?.displayName ? <Outlet /> : <PageNotFound />;

  // if (param === "Quiz" || param === "Result") {
  //   return currentUser?.displayName ? (
  //     <Outlet />
  //   ) : (
  //     <Navigate to="/LogIn" replace={true} />
  //   );
  // } else if (param === "LogIn" || param === "SignUp") {
  //   return !currentUser?.displayName ? (
  //     <Outlet />
  //   ) : (
  //     <Navigate to="/" replace={true} />
  //   );
  // } else {
  //   return <PageNotFound />;
  // }
}
