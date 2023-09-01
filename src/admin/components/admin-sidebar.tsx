import { NavLink, useLocation } from "react-router-dom";
import { adminSidebarLinks } from "../constatnts";
import { useMainContext } from "@/providers/main-provider";
import { useRef } from "react";
import useClickOutside from "@/hooks/useClickOutside";

const AdminSidebar = () => {
  const { pathname } = useLocation();
  const { isAdminSidebarOpen, handleCloseAdminSidebar } = useMainContext();
  const sidebarRef = useRef<HTMLDivElement | null>(null);

  useClickOutside(sidebarRef, handleCloseAdminSidebar);

  return (
    <div
      ref={sidebarRef}
      className={` w-80 h-screen fixed top-10 left-0 p-4 ${
        isAdminSidebarOpen ? "left-0" : " left-[-100%]"
      } bg-light-1 z-50 transition-all duration-300`}
    >
      <ul className=" w-fit uppercase flex items-start flex-col gap-4">
        {adminSidebarLinks?.map((link, index: number) => (
          <li key={index}>
            <NavLink
              to={link?.route}
              className={`${
                link?.route !== "/admin" && pathname === link?.route
                  ? "active"
                  : " text-black"
              }`}
              onClick={handleCloseAdminSidebar}
            >
              {link?.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminSidebar;
