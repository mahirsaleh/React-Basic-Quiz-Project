import { createContext, useContext } from "react";

// Context's
export const ThemeContext = createContext();
export const AuthContext = createContext();
export const QuizScoreContext = createContext() ;

// Sending Context's with my custom hook's using useContext ;
export const useTheme = function () {
  return useContext(ThemeContext);
};
export const useAuth = function () {
  return useContext(AuthContext);
};
export const useQuizScore = function () {
  return useContext(QuizScoreContext);
};
