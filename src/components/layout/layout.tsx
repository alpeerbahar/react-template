import { Outlet } from "react-router-dom";
import * as S from "./styled";
import Header from "../header/header";
import Footer from "../footer/footer";
import useDocumentTitle from "../../hooks/useDocumentTitle";

function Layout() {
  useDocumentTitle("myApp");
  return (
    <S.LayoutContainer>
      <Header />
      <S.Layout>
        <Outlet />
      </S.Layout>
      <Footer />
    </S.LayoutContainer>
  );
}

export default Layout;
