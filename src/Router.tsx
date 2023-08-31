import { lazy } from "react";
import { Route, Routes } from "react-router";
import AdminLayout from "./admin/layout/admin-layout";
import AdminSidebarLayout from "./admin/layout/admin-sidebar-layout";
import MainLayout from "./layouts/main-layout";

const Home = lazy(() => import("./pages/home/home"));
const About = lazy(() => import("./pages/about/about"));
const Products = lazy(() => import("./pages/products/products"));
const SingleProduct = lazy(() => import("./pages/single-product/single-product"));
const ContactUs = lazy(() => import("./pages/contact-us/contact-us"));
const NotFound = lazy(() => import("./pages/not-found/not-found"));
const Admin = lazy(() => import("./admin/admin"));
const Login = lazy(() => import("./admin/auth/login/login"));
const Register = lazy(() => import("./admin/auth/register/register"));
const BannerSlide = lazy(() => import("./admin/pages/banner-slide"));
const AdminProducts = lazy(() => import("./admin/pages/admin-products"));
const AdminFooter = lazy(() => import("./admin/pages/admin-footer"));
const AdminAbout = lazy(() => import("./admin/pages/admin-about"));

const Router = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route element={<Home />} index />
        <Route element={<About />} path="/about" />
        <Route element={<Products />} path="/products" />
        <Route element={<SingleProduct />} path="/products/:id" />
        <Route element={<ContactUs />} path="/contact" />
        <Route element={<NotFound />} path="*" />
      </Route>
      {/* //* ADMIN  */}
      <Route element={<AdminLayout />}>
        <Route element={<AdminSidebarLayout />}>
          <Route element={<Admin />} path="/admin" />
          <Route element={<BannerSlide />} path="/admin/banner-slide" />
          <Route element={<AdminAbout />} path="/admin/about" />
          <Route element={<AdminProducts />} path="/admin/products" />
          <Route element={<AdminFooter />} path="/admin/footer-info" />
        </Route>
        <Route element={<Register />} path="/admin/register" />
      </Route>
      <Route element={<Login />} path="/admin/login" />
    </Routes>
  );
};

export default Router;
