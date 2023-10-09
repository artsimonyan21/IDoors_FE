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
    <main className=" w-full h-full overflow-x-hidden">
      <Overlay isOpen={isMenuOpen} className="md:hidden" />
      <Overlay
        isOpen={isAdminSidebarOpen || isEditModalOpen || isModalOpen || isDropdownOpen}
        className="z-[100]"
      />
      {isSearchbarOpen && (
        <section className=" w-full h-full hidden md:flex items-center justify-center fixed z-[999]">
          <Searchbar />
        </section>
      )}
      <Overlay isOpen={isSearchbarOpen} className="md:flex hidden" />
      {children}
    </main>
  );
};

export default AppWrapper;
