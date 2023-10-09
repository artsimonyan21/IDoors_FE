import { LongRightArrowIcon } from "@/icons/icons";
import cn from "@/utils/utils";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  icon?: boolean;
}

const Button = ({ children, className, icon = false, ...props }: Props) => {
  return (
    <button
      className={cn(
        ` md:w-fit w-full bg-blue-1 text-white flex items-center ${
          icon ? "justify-between" : "justify-center"
        } gap-x-10 gap-y-2 p-4 uppercase font-normal shadow-md text-sm`,
        className || ""
      )}
      {...props}
    >
      {children}
      {icon ? (
        <div className=" w-fit flex justify-center items-center">
          <LongRightArrowIcon />
        </div>
      ) : null}
    </button>
  );
};

export default Button;
