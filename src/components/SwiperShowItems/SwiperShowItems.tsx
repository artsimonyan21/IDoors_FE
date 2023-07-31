import "./swiper_show_items.scss";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import Arrow from "../../assets/images/arrow.png";
import ImgDoor from "../../assets/images/doorRange.png";

const SwiperShowItems = () => {
  return (
    <div className="swiper_wrapper_global">
      <h4 className="swiper_title">Սենյակային դռներ</h4>
      <section className="slider_section">
        <div className="swipper_wrapper">
          <Swiper
            spaceBetween={50}
            slidesPerView={4}
            className="slider_wrapper"
            navigation={{
              nextEl: ".swiper_button_next",
              prevEl: ".swiper_button_prev",
              disabledClass: "swiper_button_disabled",
            }}
            // modules={[Navigation]}
          >
            <SwiperSlide>
              <div className="slider_div">
                <img src={ImgDoor} alt="" />
                <button>
                  WNG008 ID-002 <img src={Arrow} alt="" />
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slider_div">
                <img src={ImgDoor} alt="" />
                <button>
                  WNG008 ID-002 <img src={Arrow} alt="" />
                </button>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="slider_div">
                <img src={ImgDoor} alt="" />
                <button>
                  WNG008 ID-002 <img src={Arrow} alt="" />
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slider_div">
                <img src={ImgDoor} alt="" />
                <button>
                  WNG008 ID-002 <img src={Arrow} alt="" />
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slider_div">
                <img src={ImgDoor} alt="" />
                <button>
                  WNG008 ID-002 <img src={Arrow} alt="" />
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slider_div">sDdfgsdsedfg</div>
            </SwiperSlide>
            <button className="swiper_button_prev swiper_button_base">
              {/* <PrevIcon /> */}
            </button>
            <button className="swiper_button_next swiper_button_base">
              {/* <NextIcon /> */}
            </button>
          </Swiper>
        </div>
      </section>
    </div>
  );
};

export default SwiperShowItems;
