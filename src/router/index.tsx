import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage/homePage";
import Layout from "../components/layout/layout";
import NotFound from "../pages/NotFound/notFound";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
