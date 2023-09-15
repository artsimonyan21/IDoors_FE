import cn from "@/utils/utils";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

const PageTitle = ({ children, className }: Props) => {
  return (
    <h2
      className={cn(
        " md:text-6xl sm:text-5xl text-4xl tracking-wider text-blue-1 uppercase font-[ezo-na]",
        className || ""
      )}
    >
      {children}
    </h2>
  );
};

export default PageTitle;
