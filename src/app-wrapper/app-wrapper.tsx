import Searchbar from "@/components/searchbar";
import Overlay from "@/components/ui/overlay";
import { useAppStore } from "@/store/app-store";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const AppWrapper = ({ children }: Props) => {
  const {
    isEditModalOpen,
    isModalOpen,
    isAdminSidebarOpen,
    isSearchbarOpen,
    isMenuOpen,
    isDropdownOpen,
  } = useAppStore((store) => store);

  return (
    <main className=" w-screen max-w-screen-3xl flex flex-col items-center justify-between mx-auto overflow-x-hidden">
      {isMenuOpen ? (
        <div className=" w-full h-full md:hidden">
          <Overlay />
        </div>
      ) : null}
      {isAdminSidebarOpen ||
      isEditModalOpen ||
      isModalOpen ||
      isDropdownOpen ? (
        <div className=" w-full h-full fixed z-[100]">
          <Overlay />
        </div>
      ) : null}

      {isSearchbarOpen ? (
        <>
          <section className=" w-full h-full hidden md:flex items-center justify-center fixed z-[100]">
            <Searchbar />
          </section>
          <div className=" w-full h-full md:flex hidden">
            <Overlay />
          </div>
        </>
      ) : null}
      {children}
    </main>
  );
};

export default AppWrapper;
