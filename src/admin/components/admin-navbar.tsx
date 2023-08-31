import { NavLink, useLocation } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { useMainContext } from "@/providers/main-provider";

const AdminNavbar = () => {
  const { pathname } = useLocation();
  const { handleToggleAdminSidebar, isAdminSidebarOpen } = useMainContext();

  return (
    <nav
      className={` ${
        isAdminSidebarOpen ? "pointer-events-none" : "pointer-events-auto"
      } w-full h-10 flex items-center justify-between px-5 shadow-md sticky top-0 bg-light-1 z-50`}
    >
      <div className=" flex items-center gap-4">
        {pathname !== "/admin/register" ? (
          <button onClick={handleToggleAdminSidebar} className=" flex items-center justify-center">
            <AiOutlineMenu />
          </button>
        ) : null}
        <NavLink to={"/admin/register"} className=" uppercase underline sm:text-base text-sm">
          Ավելացնել ադմին
        </NavLink>
      </div>
      <p className=" sm:text-base text-sm">
        ADMIN: <span>Narine Poghosyan</span>
      </p>
    </nav>
  );
};

export default AdminNavbar;
