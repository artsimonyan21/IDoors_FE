const AdminProducts = () => {
  return (
    <section className=" p-10 pt-0 flex items-center flex-col">
      <header>
        <h2>տեսականի</h2>
      </header>
      <form className=" w-full md:sticky flex items-center flex-wrap gap-4 top-10 py-4 z-30 bg-light-1">
        <div className=" flex grow h-12">
          <input
            type="text"
            className=" w-full shadow-md px-4 placeholder:uppercase text-gray-1 rounded-sm"
            placeholder="Անուն"
          />
        </div>
        <div className=" flex grow h-12">
          <input
            type="text"
            className=" w-full shadow-md px-4 placeholder:uppercase text-gray-1 rounded-sm"
            placeholder="Նկարագրություն"
          />
        </div>
        <div className=" flex grow h-12">
          <select
            name=""
            id=""
            className=" w-full shadow-md px-4 text-black rounded-sm cursor-pointer"
          >
            <optgroup>
              <option value="">Option 1</option>
              <option value="">Option 2</option>
              <option value="">Option 3</option>
            </optgroup>
          </select>
        </div>
        <div className=" flex grow h-12">
          <input
            type="file"
            className=" w-full shadow-md px-4 placeholder:uppercase text-gray-1 rounded-sm"
          />
        </div>
        <div className=" flex grow h-12">
          <button className=" w-full bg-yellow-500 text-white px-4 h-full">Ավելացնել</button>
        </div>
      </form>
      {/* <div className=" w-full grid grid-cols-2 gap-4">
        {[...Array(9).keys()].map((_, index: number) => (
          <BannerSlideBox key={index} />
        ))}
      </div> */}
    </section>
  );
};

export default AdminProducts;
