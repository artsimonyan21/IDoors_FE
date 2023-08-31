import Pagination from "@/components/pagination";
import Searchbar from "@/components/searchbar";
import Button from "@/components/ui/button";
import { products } from "@/constants/contsants";
import { useNavigate } from "react-router";
import DoorRange from "../../assets/images/doorRange.png";
import IfInterested from "../../components/if-interested";
import NewRange from "../../components/new-range";
import SwiperAdverstising from "../../components/swiper-adverstising";
import SwiperShowItems from "../../components/swiper-show-items";

const Home = () => {
  const navigate = useNavigate();

  return (
    <main className=" w-full flex items-center flex-col md:pt-[102px] pt-[122px]">
      <section
        className={` w-full h-full md:hidden flex justify-center px-10 md:my-10 sm:mb-10 mt-8 mb-20`}
      >
        <Searchbar />
      </section>
      <section className=" w-full h-[60vh] px-10">
        <section className=" w-full h-full md:block hidden">
          <SwiperAdverstising />
        </section>
        <section className=" md:hidden w-full h-fit">
          <div className=" w-full h-full flex items-center justify-center gap-20 flex-col bg-white md:px-20 sm:px-10 px-5 pt-16 pb-20">
            <div className=" flex items-center flex-col gap-6 text-center">
              <h2 className=" xs:text-5xl text-4xl text-blue-1 font-[EZO-NA]">
                ԴՌՆԵՐԻ ԼԱՅՆ ԸՆՏՐԱՆԻ
              </h2>
              <p className=" sm:text-sm text-xs">Միայն որակյալ տեսականի հենց Ձեզ համար</p>
            </div>
            <Button className=" sm:w-1/2 w-3/4" icon onClick={() => navigate("/products")}>
              ՏԵՍականի
            </Button>
          </div>
        </section>
      </section>
      <section className=" w-full flex items-center flex-col px-10 my-10">
        <div className=" w-full flex justify-start items-center py-4">
          <h4 className=" text-2xl font-semibold uppercase">Նոր տեսականի</h4>
        </div>
        <div className=" w-full grid md:grid-cols-4 xs:grid-cols-2 gap-x-6 gap-y-28 py-20">
          <NewRange img={DoorRange} doorName={"WNG008 ID-002"} />
          <NewRange img={DoorRange} doorName={"WNG008 ID-002"} />
          <NewRange img={DoorRange} doorName={"WNG008 ID-002"} />
          <NewRange img={DoorRange} doorName={"WNG008 ID-002"} />
          <NewRange img={DoorRange} doorName={"WNG008 ID-002"} />
          <NewRange img={DoorRange} doorName={"WNG008 ID-002"} />
          <NewRange img={DoorRange} doorName={"WNG008 ID-002"} />
          <NewRange img={DoorRange} doorName={"WNG008 ID-002"} />
          <NewRange img={DoorRange} doorName={"WNG008 ID-002"} />
          <NewRange img={DoorRange} doorName={"WNG008 ID-002"} />
        </div>
        <Pagination />
      </section>
      <section className=" w-full mb-10">
        <IfInterested />
      </section>
      <section className=" w-full px-10">
        <header className=" w-full flex justify-start items-center py-4">
          <h4 className=" text-2xl font-semibold uppercase">Սենյակային դռներ</h4>
        </header>
        <div className=" lg:block hidden w-full">
          <SwiperShowItems />
        </div>
        <div className=" w-full lg:hidden grid md:grid-cols-4 xs:grid-cols-2 gap-x-6 gap-y-28 py-20">
          {products?.map((product, index: number) => (
            <NewRange key={index} img={product?.img} doorName={product?.doorName} />
          ))}
        </div>
      </section>
      <section className=" w-full px-10">
        <header className=" w-full flex justify-start items-center py-4">
          <h4 className=" text-2xl font-semibold uppercase">Մետաղական դռներ</h4>
        </header>
        <div className=" lg:block hidden w-full">
          <SwiperShowItems />
        </div>
        <div className=" w-full lg:hidden grid md:grid-cols-4 xs:grid-cols-2 gap-x-6 gap-y-28 py-20">
          {products?.map((product, index: number) => (
            <NewRange key={index} img={product?.img} doorName={product?.doorName} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;
