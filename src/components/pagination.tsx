const Pagination = () => {
  return (
    <div className=" flex items-center justify-center flex-wrap gap-4">
      <button className=" w-20 h-10 flex items-center justify-center bg-blue-1 text-white">
        {"<<"}
      </button>
      {[...Array(6).keys()].map((_, index: number) => (
        <button
          key={index}
          className=" w-10 h-10 flex items-center justify-center bg-blue-1 text-white"
        >
          {index + 1}
        </button>
      ))}
      <button className=" w-20 h-10 flex items-center justify-center bg-blue-1 text-white">
        {">>"}
      </button>
    </div>
  );
};

export default Pagination;
