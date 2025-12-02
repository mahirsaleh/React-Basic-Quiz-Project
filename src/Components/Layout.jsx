import { StyledLayout } from "../StyledComponents/StyledLayout.Styled.jsx";
import NavBar from "./NavBar.jsx";
import Videos from './Pages/Videos.jsx';
import SignUp from "./Pages/SignUp.jsx";
import LogIn from "./Pages/LogIn.jsx";
import Footer from "./Footer.jsx" ;
import ScrollTopButton from "./ScrollTopButton.jsx" ;

export default function Layout() {
  return (
    <StyledLayout>
      <header>
        <NavBar />
      </header>
      
      <main>
        <ScrollTopButton />
        <Videos />
        {/* <SignUp /> */}
        {/* <LogIn /> */}
      </main>

      <footer>
        <Footer />  
      </footer>
    </StyledLayout>
  );
}
