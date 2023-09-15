import NewRange from "./new-range";

const RecomendedDoors = () => {
  return (
    <div className=" w-full">
      <header className=" w-full pb-12 pt-6 text-start">
        <h3 className=" sm:text-2xl text-xl">Ձեզ կարող է հետաքրքրել նաև`</h3>
      </header>
      <div className=" w-full grid sm:grid-cols-grid-1 gap-x-6 gap-y-28 py-20">
        <NewRange img="/images/doorRange.png" doorName={"WNG008 ID-002"} />
        <NewRange img="/images/doorRange.png" doorName={"WNG008 ID-002"} />
        <NewRange img="/images/doorRange.png" doorName={"WNG008 ID-002"} />
        <NewRange img="/images/doorRange.png" doorName={"WNG008 ID-002"} />
      </div>
    </div>
  );
};

export default RecomendedDoors;
