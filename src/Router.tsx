import Home from "./Pages/Home";
import About from "./Pages/About";
import Products from "./Pages/Products";
import { Route, Routes } from "react-router";

const Router = () => {
  return (
    <Routes>
      <Route element={<Home />} path="/" />
      <Route element={<About />} path="/about" />
      <Route element={<Products />} path="/products" />
    </Routes>
  );
};

export default Router;
