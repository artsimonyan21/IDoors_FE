import useClickOutside from "@/hooks/useClickOutside";
import useHideScroll from "@/hooks/useHideScroll";
import { useMainContext } from "@/providers/main-provider";
import { useRef } from "react";

const Dropdown = () => {
  const { isDropdownOpen, handleToggleDropdown, handleCloseDropdown } = useMainContext();
  const dropdwonRef = useRef<HTMLUListElement | null>(null);

  useClickOutside(dropdwonRef, handleCloseDropdown);
  useHideScroll(isDropdownOpen);

  return (
    <div className={` relative`}>
      <button
        className={`${isDropdownOpen ? "pointer-events-none" : "pointer-events-auto"}`}
        onClick={handleToggleDropdown}
      >
        <img src="/src/assets/icons/arm-flag-icon.svg" alt="armenian flag" />
      </button>
      <ul
        ref={dropdwonRef}
        className={` absolute flex items-center justify-center ${
          isDropdownOpen ? "block" : "hidden"
        } top-16 -left-8 p-4 bg-light-1 shadow-md z-50`}
      >
        <li className=" cursor-pointer flex items-center gap-2">
          <img src="/src/assets/icons/arm-flag-icon.svg" alt="armenian flag" className=" w-10" />
        </li>
      </ul>
    </div>
  );
};

export default Dropdown;
