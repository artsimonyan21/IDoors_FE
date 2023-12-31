import useClickOutside from "@/hooks/useClickOutside";
import useHideScroll from "@/hooks/useHideScroll";
import { useAppStore } from "@/store/app-store";
import { useRef } from "react";
import { IoIosSearch } from "react-icons/io";

const Searchbar = () => {
  const { isSearchbarOpen, onCloseSearchbar } = useAppStore((store) => store);
  const searchbarRef = useRef<HTMLDivElement | null>(null);
  useClickOutside(searchbarRef, onCloseSearchbar);
  useHideScroll(isSearchbarOpen);

  return (
    <div
      ref={searchbarRef}
      className=" md:w-3/4 w-full h-fit shadow-md bg-light-1 md:p-16"
    >
      <form
        action=""
        className=" w-full h-12 md:grid grid-cols-[3fr_1fr] flex items-center flex-wrap bg-white"
      >
        <div className=" flex grow h-full">
          <div className=" h-full flex items-center justify-center text-2xl px-4">
            <IoIosSearch />
          </div>
          <input
            type="text"
            placeholder="Որոնել Ձեր նախընտրած դուռը"
            className=" w-full h-full bg-transparent outline-none border-none sm:placeholder:text-base placeholder:text-sm"
          />
        </div>
        <div className=" flex grow h-full">
          <button className=" w-full h-full bg-blue-1 text-white px-4">
            Որոնել
          </button>
        </div>
      </form>
    </div>
  );
};

export default Searchbar;
