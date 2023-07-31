import "./new_range.scss";

import Arrow from "../../assets/images/arrow.png";
import { FC } from "react";

interface NewRangeProps {
  img: string;
  doorName: string;
}

const NewRange: FC<NewRangeProps> = ({ img, doorName }) => {
  return (
    <div className="new_range_item_wrapper">
      <img src={img} alt="" />
      <button>
        {doorName} <img src={Arrow} alt="" />
      </button>
    </div>
  );
};

export default NewRange;
