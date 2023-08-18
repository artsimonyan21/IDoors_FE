import Home from "./Pages/Home";
import About from "./Pages/About";
import Products from "./Pages/Products";
import ContactUs from "./Pages/ContactUs";
import { Route, Routes } from "react-router";

const Router = () => {
  return (
    <Routes>
      <Route element={<Home />} path="/" />
      <Route element={<About />} path="/about" />
      <Route element={<Products />} path="/products?type=firs-arragement" />
      <Route element={<ContactUs />} path="/contact" />
    </Routes>
  );
};

export default Router;
