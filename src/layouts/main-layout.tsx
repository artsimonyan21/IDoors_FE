import useScrollToTop from "@/hooks/useScrollToTop";
import Footer from "./Footer/footer";
import Navbar from "./navbar/navbar";
import { Outlet } from "react-router";

const MainLayout = () => {
  useScrollToTop();
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
