import cn from "@/utils/utils";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

const PageTitle = ({ children, className }: Props) => {
  return (
    <h2 className={cn(" text-4xl text-blue-1 uppercase", className || "")}>
      {children}
    </h2>
  );
};

export default PageTitle;
