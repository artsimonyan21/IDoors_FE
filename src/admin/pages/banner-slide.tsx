import BannerSlideBox from "../components/boxes/banner-slide-box";

const BannerSlide = () => {
  return (
    <section className=" p-10 pt-0 flex items-center flex-col">
      <header>
        <h2>գլխավոր սլայդ</h2>
      </header>
      <form className=" w-full lg:sticky flex items-center flex-wrap gap-4 top-10 py-4 z-30 bg-light-1">
        <div className=" flex grow h-12">
          <input
            type="text"
            id={`title`}
            placeholder="Անուն"
            className=" w-full shadow-md px-4 placeholder:uppercase text-gray-1 rounded-sm"
          />
        </div>
        <div className=" flex grow h-12">
          <input
            type="text"
            id={`desc`}
            placeholder="Նկարագրություն"
            className=" w-full shadow-md px-4 placeholder:uppercase text-gray-1 rounded-sm"
          />
        </div>
        <div className=" flex grow h-12">
          <input
            type="file"
            id={`img`}
            className=" w-full shadow-md px-4 placeholder:uppercase text-gray-1 rounded-sm"
          />
        </div>
        <div className=" flex grow h-12">
          <button className=" w-full bg-yellow-500 text-white px-4 h-full">Ավելացնել</button>
        </div>
      </form>
      <div className=" w-full grid md:grid-cols-2 gap-4">
        {[...Array(9).keys()].map((_, index: number) => (
          <BannerSlideBox key={index} />
        ))}
      </div>
    </section>
  );
};

export default BannerSlide;
