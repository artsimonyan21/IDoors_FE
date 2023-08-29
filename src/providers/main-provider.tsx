import Overlay from "@/components/ui/overlay";
import { ReactNode, createContext, useContext, useState } from "react";

interface MainContextProps {
  isMenuOpen: boolean;
  isDropdownOpen: boolean;
  handleToggleMenu: () => void;
  handleCloseMenu: () => void;
  handleToggleDropdown: () => void;
  handleCloseDropdown: () => void;
}

const MainContext = createContext<MainContextProps>(null!);

const MainProvider = ({ children }: { children: ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  const handleToggleDropdown = () => setIsDropdownOpen(prev => !prev);
  const handleCloseDropdown = () => setIsDropdownOpen(false);

  const handleToggleMenu = () => setIsMenuOpen(prev => !prev);
  const handleCloseMenu = () => setIsMenuOpen(false);

  const values: MainContextProps = {
    isMenuOpen,
    isDropdownOpen,
    handleCloseMenu,
    handleToggleMenu,
    handleToggleDropdown,
    handleCloseDropdown
  };

  return (
    <MainContext.Provider value={values}>
      {isMenuOpen ? (
        <div className=" w-full h-full md:hidden">
          <Overlay />
        </div>
      ) : null}
      {isDropdownOpen ? (
        <div className=" w-full h-full">
          <Overlay />
        </div>
      ) : null}
      {children}
    </MainContext.Provider>
  );
};

export const useMainContext = (): MainContextProps => useContext<MainContextProps>(MainContext);

export default MainProvider;
