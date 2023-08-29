// import "./swiper_show_items.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import NewRange from "./new-range";
import { products } from "@/constants/contsants";

const SwiperShowItems = () => {
  return (
    <section className=" w-full min-h-[80vh] flex items-center justify-center flex-col">
      <Swiper
        spaceBetween={24}
        slidesPerView={4}
        className=" w-full h-full"
        navigation={{
          nextEl: ".swiper_button_next",
          prevEl: ".swiper_button_prev",
          disabledClass: "swiper_button_disabled"
        }}
        modules={[Navigation, Pagination]}
      >
        {products?.map((product, index: number) => (
          <SwiperSlide key={index} className="  my-32">
            <NewRange doorName={product?.doorName} img={product?.img} />
          </SwiperSlide>
        ))}
        {/* <button className="swiper_button_prev swiper_button_base">
          <PrevIcon />
        </button>
        <button className="swiper_button_next swiper_button_base">
          <NextIcon />
        </button> */}
      </Swiper>
    </section>
  );
};

export default SwiperShowItems;
