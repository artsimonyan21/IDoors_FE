import { StoreApi, create } from "zustand";

interface Props {
  isModalOpen: boolean;
  isEditModalOpen: boolean;
  isSearchbarOpen: boolean;
  isMenuOpen: boolean;
  isAdminSidebarOpen: boolean;
  isDropdownOpen: boolean;
  onOpenDropdown: () => void;
  onCloseDropdown: () => void;
  onToggleAdminSidebar: () => void;
  onCloseAdminSidebar: () => void;
  onOpenMenu: () => void;
  onCloseMenu: () => void;
  onOpenSearchbar: () => void;
  onCloseSearchbar: () => void;
  onOpenModal: () => void;
  onCloseModal: () => void;
  onOpenEditModal: () => void;
  onCloseEditModal: () => void;
}

type SetState = StoreApi<Props>["setState"];
type GetState = StoreApi<Props>["getState"];

export const useAppStore = create<Props>()((set: SetState, get: GetState) => ({
  isModalOpen: false,
  isEditModalOpen: false,
  isSearchbarOpen: false,
  isMenuOpen: false,
  isAdminSidebarOpen: false,
  isDropdownOpen: false,
  onOpenDropdown: () => set({ isDropdownOpen: true }),
  onCloseDropdown: () => set({ isDropdownOpen: false }),
  onToggleAdminSidebar: () => {
    const isOpen = get().isAdminSidebarOpen;
    set({ isAdminSidebarOpen: !isOpen });
    console.log(isOpen);
  },
  onCloseAdminSidebar: () => set({ isAdminSidebarOpen: false }),
  onOpenMenu: () => set({ isMenuOpen: true }),
  onCloseMenu: () => set({ isMenuOpen: false }),
  onOpenSearchbar: () => set({ isSearchbarOpen: true }),
  onCloseSearchbar: () => set({ isSearchbarOpen: false }),
  onOpenModal: () => set({ isModalOpen: true }),
  onCloseModal: () => set({ isModalOpen: false }),
  onOpenEditModal: () => set({ isEditModalOpen: true }),
  onCloseEditModal: () => set({ isEditModalOpen: false }),
}));
