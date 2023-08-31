import useClickOutside from "@/hooks/useClickOutside";
import { useMainContext } from "@/providers/main-provider";
import { useRef } from "react";

const BannerSlideEditModal = () => {
  const { handleCloseAdminModal } = useMainContext();
  const modalRef = useRef<HTMLDivElement | null>(null);

  useClickOutside(modalRef, handleCloseAdminModal);

  return (
    <div
      ref={modalRef}
      className=" flex items-center flex-col gap-y-6 fixed inset-1/2 -translate-x-1/2 -translate-y-1/2 p-6 bg-white w-3/4 h-fit z-50 overflow-auto"
    >
      <header>
        <h2 className=" text-5xl font-[ezo-na] text-blue-1 tracking-wider">Խմբագրել</h2>
      </header>
      <form className=" w-full grid md:grid-cols-[1fr_2fr] gap-4">
        <div className=" md:w-full w-3/4 flex items-center flex-col gap-4 mx-auto">
          <div className=" w-full flex items-center justify-center">
            <div className=" w-1/2">
              <img
                src="/src/assets/images/doorInAdverstising.png"
                alt=""
                className=" object-cover"
              />
            </div>
          </div>
          <input type="file" />
        </div>
        <div className=" flex items-center flex-col gap-4">
          <input
            type="text"
            placeholder="Անուն"
            className=" w-full h-12 shadow-md px-4 placeholder:uppercase text-gray-1 rounded-sm"
          />
          <input
            type="text"
            placeholder="Նկարագրություն"
            className=" w-full h-12 shadow-md px-4 placeholder:uppercase text-gray-1 rounded-sm"
          />
          <div className=" flex items-center gap-4">
            <button
              className=" px-4 py-2 bg-red-500 text-white uppercase text-sm"
              onClick={handleCloseAdminModal}
            >
              Չեղարկել
            </button>
            <button className=" px-4 py-2 bg-green-500 text-white uppercase text-sm">
              Հաստատել
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default BannerSlideEditModal;
