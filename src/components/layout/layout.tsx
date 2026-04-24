import { Outlet } from "react-router-dom";
import * as S from "./styled";
import Header from "../header/header";
import Footer from "../footer/footer";

function Layout() {
  return (
    <>
      <Header />
      <S.LayoutContainer>
        <Outlet />
      </S.LayoutContainer>
      <Footer />
    </>
  );
}

export default Layout;
