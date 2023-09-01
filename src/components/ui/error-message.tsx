import cn from "@/utils/utils";

interface Props {
  message: string | undefined;
  className?: string;
}

const ErrorMessage = ({ message, className }: Props) => {
  return (
    <span className={cn(" text-sm text-red-500 text-start", className || "")}>
      {message}
    </span>
  );
};

export default ErrorMessage;
