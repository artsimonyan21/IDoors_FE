import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Door from "/src/assets/images/doorInAdverstising.png";
import Button from "./ui/button";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useNavigate } from "react-router";

const SwiperAdverstising = () => {
  const navigate = useNavigate();
  return (
    <>
      <Swiper
        navigation={true}
        modules={[Pagination, Navigation]}
        className=" w-full h-full"
      >
        <SwiperSlide>
          <div className=" w-full h-full grid lg:grid-cols-[1.5fr_1fr] grid-cols-2 items-center md:gap-x-10 gap-x-5 bg-light-1">
            <div className=" w-full md:h-[90%] h-[80%] flex items-start justify-between flex-col md:bg-white md:pl-16 pr-5 sm:pl-10 px-5 pt-16 pb-20">
              <div className=" flex items-start flex-col gap-6">
                <h2 className=" lg:text-7xl md:text-5xl text-blue-1 font-[EZO-NA] tracking-wider">
                  ԴՌՆԵՐԻ ԼԱՅՆ ԸՆՏՐԱՆԻ
                </h2>
                <p className=" text-sm">
                  Միայն որակյալ տեսականի հենց Ձեզ համար
                </p>
              </div>
              <Button
                className=" w-1/2 mt-14"
                icon
                onClick={() => navigate("/products")}
              >
                ՏԵՍականի
              </Button>
            </div>
            <div className=" w-full md:h-[90%] h-[80%] flex items-center justify-center bg-blue-1 relative">
              <div className=" md:w-64 w-48 p-3 absolute z-10">
                <img src={Door} alt="" className=" w-full h-full" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" w-full h-full grid lg:grid-cols-[1.5fr_1fr] grid-cols-2 items-center md:gap-x-10 gap-x-5 bg-light-1">
            <div className=" w-full md:h-[90%] h-[80%] flex items-start justify-between flex-col md:bg-white md:pl-20 pr-5 sm:pl-10 px-5 pt-16 pb-20">
              <div className=" flex items-start flex-col gap-6">
                <h2 className=" lg:text-7xl md:text-5xl text-blue-1 font-[EZO-NA] tracking-wider">
                  ԴՌՆԵՐԻ ԼԱՅՆ ԸՆՏՐԱՆԻ
                </h2>
                <p className=" text-sm">
                  Միայն որակյալ տեսականի հենց Ձեզ համար
                </p>
              </div>
              <Button className=" w-1/2 mt-14" icon>
                ՏԵՍականի
              </Button>
            </div>
            <div className=" w-full md:h-[90%] h-[80%] flex items-center justify-center bg-blue-1 relative">
              <div className=" md:w-64 w-48 p-3 absolute z-10">
                <img src={Door} alt="" className=" w-full h-full" />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default SwiperAdverstising;
