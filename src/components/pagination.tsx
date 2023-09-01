import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Pagination = () => {
  return (
    <div className=" flex items-center justify-center flex-wrap gap-x-6">
      <button className=" flex items-center justify-center text-black text-xl">
        <IoIosArrowBack />
      </button>
      {[...Array(6).keys()].map((_, index: number) => (
        <button
          key={index}
          className=" flex items-center justify-center text-black text-xl"
        >
          {index + 1}
        </button>
      ))}
      <button className=" flex items-center justify-center text-black text-xl">
        <IoIosArrowForward />
      </button>
    </div>
  );
};

export default Pagination;
