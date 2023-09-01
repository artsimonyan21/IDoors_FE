import { AiOutlineSearch } from "react-icons/ai";

const SingleProductBox = () => {
  return (
    <div className=" min-w-full aspect-square bg-white relative">
      <div className=" text-3xl absolute top-4 right-4 text-gray-600">
        <AiOutlineSearch />
      </div>
      <div className=" w-1/2 absolute left-0 -top-20 ml-10">
        <img src="/src/assets/images/doorRange.png" alt="door image" />
      </div>
      <div className=" sm:w-3/4 w-11/12 flex items-center justify-center py-6 px-2 h-fit absolute left-0 -bottom-2 bg-blue-1 text-white">
        <p className="text-sm sm:text-base">WNG008 ID-002</p>
      </div>
    </div>
  );
};

export default SingleProductBox;
