import "./about_card.scss";

import Arrow from "../../../../assets/images/arrow.png";

import ImgDoor from "../../../../assets/images/doorRange.png";

const AboutCard = () => {
  return (
    <div className="about_card_wrapper">
      <div className="about_content">
        <div>
          <h2>Մեր մասին</h2>
          <p>
            iDoors Armenia-ն դռների արտադրությամբ զբաղվող ընկերություն է: Մենք
            առաջարկում ենք նմանը չունեցող դիզայնով և ամրությամբ մուտքի և
            միջսենյակային դռների մեծ տեսականի: Մեր պրոֆեսիոնալ մասնագետները
            կօգնեն ձեզ դռների չափագրման, տեղադրման և դիզայնի հարցում։ Ընդունվում
            են պատվերներ․ սիրով կսպասենք ձեզ։
          </p>
          <button>
            ՏԵՍականի <img src={Arrow} alt="" />
          </button>
        </div>
      </div>
      <div className="about_img">
        <div>
          <img src={ImgDoor} alt="" className="first_img_about" />
          <img src={ImgDoor} alt="" className="second_img_about" />
          <img src={ImgDoor} alt="" className="last_img_about" />
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
