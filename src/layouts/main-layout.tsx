import useScrollToTop from "@/hooks/useScrollToTop";
import Footer from "./Footer/footer";
import Navbar from "./navbar/navbar";
import { Outlet } from "react-router";
import AppWrapper from "@/app-wrapper/app-wrapper";

const MainLayout = () => {
  useScrollToTop();
  return (
    <>
      <Navbar />
      <AppWrapper>
        <Outlet />
      </AppWrapper>
      <Footer />
    </>
  );
};

export default MainLayout;
