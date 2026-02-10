import { Route, Routes } from "react-router-dom";

// import { GlobalStyled } from "../StyledComponents/Global.Styled.jsx";
import { StyledLayout } from "../StyledComponents/StyledLayout.Styled.jsx";
// import { useTheme } from "./Context/MyContexts.jsx";
import NavBar from "./NavComponents/NavBar.jsx";
import ScrollTopButton from "./ScrollTopButton.jsx";
import ScrollTopPage from "./ScrollTopPage.jsx";

// Pages Start's ;
import LogIn from "./Pages/LogIn.jsx";
import PageNotFound from "./Pages/PageNotFound.jsx";
import Quiz from "./Pages/QuizPage/Quiz.jsx";
import Result from "./Pages/ResultPage/Result.jsx";
import SignUp from "./Pages/SignUp.jsx";
import Videos from "./Pages/Video.jsx/Videos.jsx";
import ProtectRoute from "./ProtectRoute.jsx";
// Pages End's ;

export default function Layout() {
  // const { theme } = useTheme();

  return (
    <>
      {/* <GlobalStyled $theme={theme} /> */}

      <StyledLayout>
        <header>
          <NavBar />
        </header>

        <main>
          <ScrollTopButton />
          <ScrollTopPage />

          <Routes>
            <Route path="/" element={<Videos />} />

            <Route path="/*" element={<ProtectRoute />}>
              <Route path="SignUp" element={<SignUp />} />
              <Route path="LogIn" element={<LogIn />} />
              <Route path="Quiz/:videoID/:page" element={<Quiz />} />
              <Route path="Result/:videoID" element={<Result />} />
              <Route path="*" element={<PageNotFound />} />
            </Route>
          </Routes>
        </main>
      </StyledLayout>
    </>
  );
}
