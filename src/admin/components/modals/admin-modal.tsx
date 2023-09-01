import useClickOutside from "@/hooks/useClickOutside";
import { ReactElement, useRef } from "react";
import { IoClose } from "react-icons/io5";

interface Props {
  title: string;
  body: ReactElement;
  onClose: () => void;
}

const AdminModal = ({ title, body, onClose }: Props) => {
  const modalRef = useRef<HTMLDivElement | null>(null);

  useClickOutside(modalRef, onClose);

  return (
    <div
      ref={modalRef}
      className=" flex items-center flex-col gap-y-6 fixed inset-1/2 -translate-x-1/2 -translate-y-1/2 p-6 bg-white w-3/4 h-fit z-50 overflow-auto"
    >
      <button
        className=" text-red-500 text-3xl absolute top-4 right-4"
        onClick={onClose}
      >
        <IoClose />
      </button>
      <header>
        <h2 className=" text-5xl font-[ezo-na] text-blue-1 tracking-wider">
          {title}
        </h2>
      </header>
      <div className=" w-full">{body}</div>
    </div>
  );
};

export default AdminModal;
