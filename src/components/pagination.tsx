const Pagination = () => {
  return (
    <div className=" flex items-center justify-center gap-4">
      <button className=" w-16 h-8 flex items-center justify-center bg-blue-1 text-white">
        {"<<"}
      </button>
      {[...Array(6).keys()].map((_, index: number) => (
        <button
          key={index}
          className=" w-8 h-8 flex items-center justify-center bg-blue-1 text-white"
        >
          {index + 1}
        </button>
      ))}
      <button className=" w-16 h-8 flex items-center justify-center bg-blue-1 text-white">
        {">>"}
      </button>
    </div>
  );
};

export default Pagination;
