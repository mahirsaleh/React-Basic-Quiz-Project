import AuthProvider from "./AuthProvider.jsx";
import ThemeProvider from "./ThemeProvider.jsx";
import QuizScoreProvider from "./QuizScoreProvider.jsx";

export default function ContextWrapper({ children }) {
  return (
    <ThemeProvider>
      <AuthProvider>
        <QuizScoreProvider>
          { children }
        </QuizScoreProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}
