import Dropdown from "@/components/dropdown";
import { links } from "@/constants/contsants";

import useClickOutside from "@/hooks/useClickOutside";
import useHideScroll from "@/hooks/useHideScroll";
import { useMainContext } from "@/providers/main-provider";
import cn from "@/utils/utils";
import { Fade as Hamburger } from "hamburger-react";
import { useRef } from "react";
import { NavLink } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";

const Navbar = () => {
  const { isMenuOpen, handleCloseMenu, handleToggleMenu, handleToggleSearchbar } = useMainContext();
  const menuRef = useRef<HTMLUListElement | null>(null);

  useClickOutside(menuRef, handleCloseMenu);
  useHideScroll(isMenuOpen);

  return (
    <nav className=" fixed left-0 top-0 w-full h-[92px] flex items-center justify-between gap-x-5 xs:px-10 px-5 z-50 bg-light-1 mb-[92px] shadow-md">
      <NavLink to="/" className="flex items-center">
        <img src="/src/assets/images/logo.svg" alt="" />
      </NavLink>
      <ul
        ref={menuRef}
        className={cn(
          "md:w-fit md:h-fit flex md:items-center md:justify-center md:flex-row gap-4 md:p-0",
          `${
            isMenuOpen ? "right-0" : "right-[-100%]"
          } absolute md:static top-[92px] h-screen xxs:w-80 w-full flex-col items-start bg-light-1 transition-all duration-300 p-4`
        )}
      >
        {links?.map((link, index: number) => (
          <li key={index}>
            <NavLink
              to={link?.route}
              className={cn(" hover:text-blue-1 uppercase")}
              onClick={handleCloseMenu}
            >
              {link?.pathname}
            </NavLink>
          </li>
        ))}
      </ul>
      <div className=" flex items-center gap-4">
        {/* <SearchIcon /> */}
        <Dropdown />
        <button
          className=" hidden md:flex items-center justify-center text-3xl"
          onClick={handleToggleSearchbar}
        >
          <IoIosSearch />
        </button>
        <button
          className={cn(
            " md:hidden flex items-center justify-center",
            `${isMenuOpen ? "pointer-events-none" : "pointer-events-auto"}`
          )}
        >
          <Hamburger toggled={isMenuOpen} onToggle={handleToggleMenu} size={28} color="black" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
