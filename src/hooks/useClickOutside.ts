import { RefObject, useEffect } from "react";

type ElementType<T> = RefObject<T>;
type OnCloseType = () => void;

function useClickOutside<T extends HTMLElement>(element: ElementType<T>, onClose: OnCloseType) {
  const closeMenu = (e: MouseEvent) => {
    if (element?.current && !element.current.contains(e.target as Node)) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", closeMenu);
    return () => document.removeEventListener("mousedown", closeMenu);
  }, [closeMenu]);
}

export default useClickOutside;
