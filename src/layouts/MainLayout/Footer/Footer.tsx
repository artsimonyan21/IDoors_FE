import "./footer.scss";
import FooterCard from "./FooterCard";
// import Logo from "../../../assets/images/logo.svg";
// import { NavLink } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <div className="footer_wrapper">
      <div className="footer_content">
        <div>{/* <Logo /> */}</div>
        <FooterCard title="Օգտակար Հղումներ">
          <ul className="product_wrapper">
            {/* <NavLink to={""} className="aaa"> */}
            <li>Գլխավոր</li>
            {/* </NavLink> */}
            {/* <NavLink to={""}> */}
            <li> Հայտարարություններ</li>
            {/* </NavLink> */}
            {/* <NavLink to={""}> */}
            <li> Մեր մասին</li>
            {/* </NavLink> */}
            {/* <NavLink to={""}> */}
            <li> Կապ</li>
            {/* </NavLink> */}
          </ul>
        </FooterCard>
        <FooterCard title="ԿԱՊ ՄԵԶ ՀԵՏ">
          <div className="footer_contact_us_wrapper">
            <a href="tel:+374 98 960197">
              {/* <PhoneIcon /> <p>Զանգահարեք մեզ: +374 90 000 000</p> */}
            </a>
            <a href="mailto:vaga@gmail.com">
              {/* <MessageIcon /> */}
              <p>Էլ հասցե: @mail.ru</p>
            </a>
            <a>
              {/* <LocationIcon /> */}
              <p>Երևան</p>
            </a>
          </div>
        </FooterCard>
        <FooterCard title="ՓՆՏՐԵՔ ՄԵԶ։">
          <div className="social_link_wrapper">
            {/* <InstagramIcon />
            <TvitterIcon />
            <FaceboockIcon /> */}
          </div>
        </FooterCard>
      </div>
      <p className="footer_copy_right">
        By ArmCoding - © 2022 Բոլոր իրավունքները պաշտպանված են
      </p>
    </div>
  );
};

export default Footer;
