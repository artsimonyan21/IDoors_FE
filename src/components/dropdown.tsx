import useClickOutside from "@/hooks/useClickOutside";
import useHideScroll from "@/hooks/useHideScroll";
import { useAppStore } from "@/store/app-store";
import { useRef } from "react";

const Dropdown = () => {
  const { isDropdownOpen, onOpenDropdown, onCloseDropdown } = useAppStore(
    (store) => store
  );
  const dropdwonRef = useRef<HTMLUListElement | null>(null);

  useClickOutside(dropdwonRef, onCloseDropdown);
  useHideScroll(isDropdownOpen);

  return (
    <div className={` w-fit`}>
      <button
        className={`${
          isDropdownOpen ? "pointer-events-none" : "pointer-events-auto"
        } flex items-center gap-x-2`}
        onClick={onOpenDropdown}
      >
        <div className=" w-8">
          <img src="/src/assets/icons/arm-flag-icon.svg" alt="armenian flag" />
        </div>
        <span>AM</span>
      </button>
      <ul
        ref={dropdwonRef}
        className={`  absolute items-center flex-col gap-y-4 ${
          isDropdownOpen ? "flex" : "hidden"
        } top-[100px] right-2 p-4 bg-light-1 shadow-md z-50`}
      >
        <li className=" w-full cursor-pointer flex items-center gap-2">
          <div className=" w-8">
            <img
              src="/src/assets/icons/arm-flag-icon.svg"
              alt="armenian flag"
            />
          </div>
          <span className=" text-sm">AM</span>
        </li>
        <li className=" w-full cursor-pointer flex items-center gap-2">
          <div className=" w-8">
            <img src="/src/assets/icons/eng-flag-icon.svg" alt="england flag" />
          </div>
          <span className=" text-sm">EN</span>
        </li>
        <li className=" w-full cursor-pointer flex items-center gap-2">
          <div className=" w-8">
            <img src="/src/assets/icons/rus-flag-icon.svg" alt="russian flag" />
          </div>
          <span className=" text-sm">RU</span>
        </li>
      </ul>
    </div>
  );
};

export default Dropdown;
