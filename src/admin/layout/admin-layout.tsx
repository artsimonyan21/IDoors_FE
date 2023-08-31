import { Outlet } from "react-router";
import AdminNavbar from "../components/admin-navbar";

const AdminLayout = () => {
  return (
    <>
      <AdminNavbar />
      <Outlet />
    </>
  );
};

export default AdminLayout;
