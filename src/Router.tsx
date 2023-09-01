import { lazy } from "react";
import { Route, Routes } from "react-router";
import AdminLayout from "./admin/layout/admin-layout";
import AdminSidebarLayout from "./admin/layout/admin-sidebar-layout";
import MainLayout from "./layouts/main-layout";

const Home = lazy(() => import("./pages/home/home"));
const About = lazy(() => import("./pages/about/about"));
const Products = lazy(() => import("./pages/products/products"));
const SingleProduct = lazy(
  () => import("./pages/single-product/single-product")
);
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
      <Route Component={MainLayout}>
        <Route Component={Home} index />
        <Route Component={About} path="/about" />
        <Route Component={Products} path="/products" />
        <Route Component={SingleProduct} path="/products/:id" />
        <Route Component={ContactUs} path="/contact" />
        <Route Component={NotFound} path="*" />
      </Route>
      {/* //* ADMIN  */}
      <Route Component={AdminLayout}>
        <Route Component={AdminSidebarLayout}>
          <Route Component={Admin} path="/admin" />
          <Route Component={BannerSlide} path="/admin/banner-slide" />
          <Route Component={AdminAbout} path="/admin/about" />
          <Route Component={AdminProducts} path="/admin/products" />
          <Route Component={AdminFooter} path="/admin/footer-info" />
        </Route>
        <Route Component={Register} path="/admin/register" />
      </Route>
      <Route Component={Login} path="/admin/login" />
    </Routes>
  );
};

export default Router;
