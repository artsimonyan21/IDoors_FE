import { Route, Routes } from "react-router";
import { lazy } from "react";
import MainLayout from "./layouts/main-layout";

const Home = lazy(() => import("./pages/home/home"));
const About = lazy(() => import("./pages/about/about"));
const Products = lazy(() => import("./pages/products/products"));
const SingleProduct = lazy(() => import("./pages/single-product/single-product"));
const ContactUs = lazy(() => import("./pages/contact-us/contact-us"));
const Login = lazy(() => import("./pages/auth/login/login"));
// ?type=first-arragement
const Router = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route element={<Home />} path="/" />
        <Route element={<About />} path="/about" />
        <Route element={<Products />} path="/products" />
        <Route element={<SingleProduct />} path="/products/:id" />
        <Route element={<ContactUs />} path="/contact" />
      </Route>
      <Route element={<Login />} path="/admin" />
    </Routes>
  );
};

export default Router;
