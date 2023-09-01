import { useMainContext } from "@/providers/main-provider";
import DoorImg from "/src/assets/images/doorRange.png";
import Button from "@/components/ui/button";

const HorizontalDoorItem = () => {
  const { seeSingleProduct } = useMainContext();
  return (
    <div className=" w-full relative">
      <div className=" w-full px-5 grid sm:grid-cols-[0.5fr_2fr] relative bg-white py-20 sm:py-20 pt-80 pb-24">
        <div className=" min-w-full w-full">
          <div className=" w-full absolute -top-20 z-40">
            <img src={DoorImg} alt="" />
          </div>
        </div>
        <div className=" sm:pl-32 w-full h-full flex items-start justify-center flex-col gap-2 lg:text-base text-sm">
          <p>Շրջանակ – ԿՎ80*40 2ՄՄ ՇՎ 8-10սմ </p>
          <p>Մետաղական թիթեղ – 1.2մմ</p>
          <p>Անկյունակ – 40*40 30*30 </p>
          <p>Հումք – Բուլղարական МДФ</p>
          <p> Լիցք – պենոպլաստ </p>
          <p>Փական – 2</p>
        </div>
      </div>
      <Button className="  w-11/12 absolute -bottom-5" icon onClick={seeSingleProduct}>
        WNG008 ID-002
      </Button>
    </div>
  );
};

export default HorizontalDoorItem;
