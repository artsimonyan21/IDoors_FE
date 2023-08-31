import NewRange from "./new-range";

const RecomendedDoors = () => {
  return (
    <div className=" w-full">
      <header className=" w-full pb-12 pt-6 text-start">
        <h3 className=" sm:text-2xl text-xl">Ձեզ կարող է հետաքրքրել նաև`</h3>
      </header>
      <div className=" w-full grid md:grid-cols-4 xs:grid-cols-2 gap-x-6 gap-y-28 py-20">
        <NewRange img="/src/assets/images/doorRange.png" doorName={"WNG008 ID-002"} />
        <NewRange img="/src/assets/images/doorRange.png" doorName={"WNG008 ID-002"} />
        <NewRange img="/src/assets/images/doorRange.png" doorName={"WNG008 ID-002"} />
        <NewRange img="/src/assets/images/doorRange.png" doorName={"WNG008 ID-002"} />
      </div>
    </div>
  );
};

export default RecomendedDoors;
