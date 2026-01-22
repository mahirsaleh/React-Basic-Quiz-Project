import AuthProvider from "./AuthProvider.jsx";
import ThemeProvider from "./ThemeProvider.jsx";

export default function ContextWrapper({ children }) {
  return (
    <ThemeProvider>
      <AuthProvider>{children}</AuthProvider>
    </ThemeProvider>
  );
}
