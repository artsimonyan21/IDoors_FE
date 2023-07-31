import "./swiper_adverstising.scss";

import Arrow from "../../assets/images/arrow.png";
import Door from "../../assets/images/doorInAdverstising.png";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

const SwiperAdverstising = () => {
  return (
    <>
      <Swiper
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="swiper_adverstising_wrapper"
      >
        <SwiperSlide>
          <div className="swiper_content_wrapper">
            <div className="swiper_adverstising_content">
              <h2>ԴՌՆԵՐԻ ԼԱՅՆ ԸՆՏՐԱՆԻ</h2>
              <p>ՄԻԱՅՆ ՈՐԱԿՅԱԼ ՏԵՍականի հենց Ձեզ համար</p>
              <button>
                ՏԵՍականի <img src={Arrow} alt="" />
              </button>
            </div>
            <div className="swiper_adverstising_img">
              <img src={Door} alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper_content_wrapper">
            <div className="swiper_adverstising_content">
              <h2>ԴՌՆԵՐԻ ԼԱՅՆ ԸՆՏՐԱՆԻ</h2>
              <p>ՄԻԱՅՆ ՈՐԱԿՅԱԼ ՏԵՍականի հենց Ձեզ համար</p>
              <button>
                ՏԵՍականի <img src={Arrow} alt="" />
              </button>
            </div>
            <div className="swiper_adverstising_img"></div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default SwiperAdverstising;
