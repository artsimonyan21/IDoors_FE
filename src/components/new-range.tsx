import { useNavigate } from "react-router";
import Button from "./ui/button";

interface NewRangeProps {
  img: string;
  doorName: string;
}

const NewRange = ({ img, doorName }: NewRangeProps) => {
  const navigate = useNavigate();

  return (
    <div className=" min-w-full aspect-square bg-white relative">
      <div className=" w-1/2 absolute left-0 -top-20 ml-10">
        <img src={img} alt="" />
      </div>
      <Button
        className=" w-11/12 h-fit absolute left-0 -bottom-2 text-sm"
        icon
        onClick={() => navigate(`/products/2`)}
      >
        <p>{doorName}</p>
      </Button>
    </div>
  );
};

export default NewRange;
