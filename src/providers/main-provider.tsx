import BannerSlideEditModal from "@/admin/components/modals/banner-slide-edit-modal";
import Searchbar from "@/components/searchbar";
import Overlay from "@/components/ui/overlay";
import { ReactNode, createContext, useContext, useState } from "react";
import { useNavigate } from "react-router";

interface MainContextProps {
  isMenuOpen: boolean;
  isDropdownOpen: boolean;
  isAdminModalOpen: boolean;
  isAdminSidebarOpen: boolean;
  isSearchbarOpen: boolean;
  handleToggleMenu: () => void;
  handleCloseMenu: () => void;
  handleToggleDropdown: () => void;
  handleCloseDropdown: () => void;
  seeSingleProduct: () => void;
  handleOpenAdminModal: () => void;
  handleCloseAdminModal: () => void;
  handleToggleAdminSidebar: () => void;
  handleCloseAdminSidebar: () => void;
  handleToggleSearchbar: () => void;
  handleCloseSearchbar: () => void;
}

const MainContext = createContext<MainContextProps>(null!);

const MainProvider = ({ children }: { children: ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [isAdminSidebarOpen, setIsAdminSidebarOpen] = useState<boolean>(false);
  const [isAdminModalOpen, setIsAdminModalOpen] = useState<boolean>(false);
  const [isSearchbarOpen, setIsSearchbarOpen] = useState<boolean>(false);

  const handleToggleAdminSidebar = () => setIsAdminSidebarOpen(prev => !prev);
  const handleCloseAdminSidebar = () => setIsAdminSidebarOpen(false);

  const handleToggleSearchbar = () => setIsSearchbarOpen(prev => !prev);
  const handleCloseSearchbar = () => setIsSearchbarOpen(false);

  const handleOpenAdminModal = () => setIsAdminModalOpen(true);
  const handleCloseAdminModal = () => setIsAdminModalOpen(false);

  const navigate = useNavigate();

  const seeSingleProduct = () => {
    navigate(`/products/2`);
  };

  const handleToggleDropdown = () => setIsDropdownOpen(prev => !prev);
  const handleCloseDropdown = () => setIsDropdownOpen(false);

  const handleToggleMenu = () => setIsMenuOpen(prev => !prev);
  const handleCloseMenu = () => setIsMenuOpen(false);

  const values: MainContextProps = {
    isMenuOpen,
    isDropdownOpen,
    isAdminModalOpen,
    isAdminSidebarOpen,
    isSearchbarOpen,
    handleCloseMenu,
    handleToggleMenu,
    handleToggleDropdown,
    handleCloseDropdown,
    seeSingleProduct,
    handleOpenAdminModal,
    handleCloseAdminModal,
    handleToggleAdminSidebar,
    handleCloseAdminSidebar,
    handleToggleSearchbar,
    handleCloseSearchbar
  };

  return (
    <MainContext.Provider value={values}>
      {isMenuOpen ? (
        <div className=" w-full h-full md:hidden">
          <Overlay />
        </div>
      ) : null}
      {isAdminSidebarOpen || isAdminModalOpen || isDropdownOpen ? (
        <div className=" w-full h-full">
          <Overlay />
        </div>
      ) : null}

      {isSearchbarOpen ? (
        <section className=" w-full h-full hidden md:flex items-center justify-center absolute">
          <Searchbar />
        </section>
      ) : null}
      {isSearchbarOpen ? (
        <section className=" w-full h-full hidden md:flex items-center justify-center absolute">
          <Overlay />
        </section>
      ) : null}
      {isAdminModalOpen ? <BannerSlideEditModal /> : null}
      {children}
    </MainContext.Provider>
  );
};

export const useMainContext = (): MainContextProps => useContext<MainContextProps>(MainContext);

export default MainProvider;
