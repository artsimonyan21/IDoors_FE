import NewRange from "@/components/new-range";
import DoorRange from "/src/assets/images/doorRange.png";

const FirstArrangement = () => {
  return (
    <div className=" w-full grid lg:grid-cols-3 sm:grid-cols-2 gap-x-6 gap-y-28 my-16">
      <NewRange img={DoorRange} doorName={"WNG008 ID-002"} />
      <NewRange img={DoorRange} doorName={"WNG008 ID-002"} />
      <NewRange img={DoorRange} doorName={"WNG008 ID-002"} />
      <NewRange img={DoorRange} doorName={"WNG008 ID-002"} />
      <NewRange img={DoorRange} doorName={"WNG008 ID-002"} />
      <NewRange img={DoorRange} doorName={"WNG008 ID-002"} />
    </div>
  );
};

export default FirstArrangement;
