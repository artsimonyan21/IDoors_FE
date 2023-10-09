import cn from "@/utils/utils";
import type { OverlayType } from "./types";

const Overlay = ({ className, isOpen }: OverlayType) => {
  return (
    <div
      className={cn(
        ` w-full h-screen flex fixed left-0 top-0 ${
          isOpen ? "visible opacity-100" : "invisible opacity-0"
        } bg-black/60 z-50 backdrop-blur-md transition-all duration-300`,
        className || ""
      )}
    />
  );
};

export default Overlay;
