import { useThemeStore } from "../../store/themeStore";
import * as S from "./styled";

function Header() {
  const { isDarkMode, toggleTheme } = useThemeStore();
  return (
    <S.HeaderContainer>
      <div>Header</div>
      <S.ThemeButton onClick={toggleTheme}>
        {isDarkMode ? "☀️ Açık Tema" : "🌙 Koyu Tema"}
      </S.ThemeButton>
    </S.HeaderContainer>
  );
}

export default Header;
