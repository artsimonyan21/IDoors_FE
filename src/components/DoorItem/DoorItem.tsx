import "./door_item.scss";
import ImgDoor from "../../assets/images/doorRange.png";
import Arrow from "../../assets/images/arrow.png";

const DoorItem = () => {
  return (
    <div className="door_item_wrapper">
      <img src={ImgDoor} alt="" />
      <button>
        WNG008 ID-002 <img src={Arrow} alt="" />
      </button>
    </div>
  );
};

export default DoorItem;
