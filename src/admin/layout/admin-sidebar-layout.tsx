import { Outlet } from "react-router";
import AdminSidebar from "../components/admin-sidebar";

const AdminSidebarLayout = () => {
  return (
    <>
      <section className=" w-full relative">
        <AdminSidebar />
        <Outlet />
      </section>
    </>
  );
};

export default AdminSidebarLayout;
