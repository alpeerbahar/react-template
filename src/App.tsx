import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/globalStyle";
import { darkTheme, lightTheme } from "./styles/theme";
import { useThemeStore } from "./store/themeStore";
import Router from "./router";

function App() {
  const isDarkMode = useThemeStore((state) => state.isDarkMode);
  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  );
}

export default App;
