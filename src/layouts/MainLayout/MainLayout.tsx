import { ReactElement } from "react";
import "./main_layout.scss";
import Header from "./Header";
import Footer from "./Footer";

interface MainLayoutProps {
  children: ReactElement;
}
const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="global_content_wrapper">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
