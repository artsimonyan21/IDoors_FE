import useClickOutside from "@/hooks/useClickOutside";
import { useAppStore } from "@/store/app-store";
import { ReactElement, useRef } from "react";
import { IoClose } from "react-icons/io5";

interface Props {
  title: string;
  body: ReactElement;
}

const AdminModal = ({ title, body }: Props) => {
  const modalRef = useRef<HTMLDivElement | null>(null);
  const { isModalOpen, onCloseModal, onCloseEditModal } = useAppStore(
    (store) => store
  );
  const onClose = isModalOpen ? onCloseModal : onCloseEditModal;
  useClickOutside(modalRef, onClose);

  return (
    <div
      ref={modalRef}
      className=" h-fit flex items-center flex-col gap-y-6 fixed inset-1/2 -translate-x-1/2 -translate-y-1/2 p-6 bg-white w-3/4 z-50"
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
      <div className=" w-full max-h-[500px] overflow-y-auto h-full">{body}</div>
    </div>
  );
};

export default AdminModal;
