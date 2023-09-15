import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import NewRange from "./new-range";
import { products } from "@/constants/contsants";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const SwiperShowItems = () => {
  return (
    <section className=" w-full min-h-[80vh] flex items-center justify-center flex-col">
      <Swiper
        spaceBetween={24}
        slidesPerView={4}
        className=" w-full h-full"
        navigation={true}
        modules={[Pagination, Navigation]}
      >
        {products?.map((product, index: number) => (
          <SwiperSlide key={index} className="  my-32">
            <NewRange doorName={product?.doorName} img={product?.img} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default SwiperShowItems;
