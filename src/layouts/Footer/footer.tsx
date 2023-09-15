import { footerLinks } from "@/constants/contsants";
import FooterCard from "./components/footer-card";
import { Link } from "react-router-dom";
// import Logo from "../../../assets/images/logo.svg";
// import { NavLink } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className=" w-full p-6 pt-12 pb-0 bg-blue-1 text-white">
      <div className=" w-full grid md:grid-cols-4 gap-4">
        <div>
          <img src="/images/logo.svg" alt="" />
        </div>
        <FooterCard title="Օգտակար Հղումներ">
          <ul className=" flex items-start flex-col gap-1 uppercase">
            {footerLinks?.links?.map((link, index: number) => (
              <li key={index}>
                <Link to={link?.route} className=" xs:text-base text-sm">
                  {link?.pathname}
                </Link>
              </li>
            ))}
          </ul>
        </FooterCard>
        <FooterCard title="ԿԱՊ ՄԵԶ ՀԵՏ">
          <ul className=" flex items-start flex-col gap-1">
            {footerLinks?.contacts?.map((contact, index: number) => (
              <li
                key={index}
                className=" flex items-center justify-center gap-1"
              >
                <img src={contact?.icon} alt={contact?.name} />
                <p className=" xs:text-base text-sm">{contact?.title}</p>
              </li>
            ))}
          </ul>
        </FooterCard>
        <FooterCard title="ՓՆՏՐԵՔ ՄԵԶ։" className=" md:items-center">
          <ul className=" w-full flex md:items-center gap-2 md:justify-center items-start">
            {footerLinks?.socials?.map((social, index: number) => (
              <li key={index}>
                <Link to={social?.route}>
                  <img src={social?.icon} alt={social?.name} />
                </Link>
              </li>
            ))}
          </ul>
        </FooterCard>
      </div>
      <div className=" p-6 mt-6 w-full flex items-center justify-center text-center">
        <p className=" text-sm text-white">
          By ArmCoding - © 2022 Բոլոր իրավունքները պաշտպանված են
        </p>
      </div>
    </footer>
  );
};

export default Footer;
