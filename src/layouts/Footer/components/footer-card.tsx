import React, { ReactNode } from "react";
import cn from "@/utils/utils";

interface FooterCardProps {
  title: string;
  children: ReactNode;
  className?: string;
}

const FooterCard: React.FC<FooterCardProps> = ({ title, children, className }) => {
  return (
    <div className={cn(" flex items-start flex-col gap-4", className || "")}>
      <h3 className=" xs:text-xl text-lg text-black">{title}</h3>
      {children}
    </div>
  );
};

export default FooterCard;
