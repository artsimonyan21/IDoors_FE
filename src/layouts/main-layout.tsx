import useScrollToTop from "@/hooks/useScrollToTop";
import { Outlet } from "react-router";
import Footer from "./Footer/footer";
import Navbar from "./navbar/navbar";

const MainLayout = () => {
  useScrollToTop();
  return (
    <>
      <Navbar />
      <section className=" w-full max-w-max-device mx-auto">
        <Outlet />
      </section>
      <Footer />
    </>
  );
};

export default MainLayout;
