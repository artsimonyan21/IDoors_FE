import "../second_arrangement.scss";

import DoorImg from "../../../../../assets/images/doorRange.png";

import Arrow from "../../../../../assets/images/arrow.png";

const HorizontalDoorItem = () => {
  return (
    <div className="horizontal_door_item_wrapper">
      <div>
        <img src={DoorImg} alt="" />
        <div className="door_description">
          <p>Շրջանակ – ԿՎ80*40 2ՄՄ ՇՎ 8-10սմ </p>
          <p>Մետաղական թիթեղ – 1.2մմ</p>
          <p>Անկյունակ – 40*40 30*30 </p>
          <p>Հումք – Բուլղարական МДФ</p>
          <p> Լիցք – պենոպլաստ </p>
          <p>Փական – 2</p>
        </div>
      </div>
      <button>
        WNG008 ID-002 <img src={Arrow} alt="" />
      </button>
    </div>
  );
};

export default HorizontalDoorItem;
