import { IconType } from "react-icons";
import { CgMenuGridR } from "react-icons/cg";
import { TfiMenuAlt } from "react-icons/tfi";

interface LinksProps {
  pathname: string;
  route: string;
}

export const links: LinksProps[] = [
  {
    pathname: "ԳԼԽԱՎՈՐ",
    route: "/"
  },
  {
    pathname: "Մեր մասին",
    route: "/about"
  },
  {
    pathname: "ՏԵՍականի",
    route: "/products"
  },
  {
    pathname: "ՀԵՏԱԴԱՐՁ ԿԱՊ",
    route: "/contact"
  }
];

interface ProductProps {
  doorName: string;
  img: string;
}

export const products: ProductProps[] = [
  {
    doorName: "WNG008 ID-002",
    img: "/src/assets/images/doorRange.png"
  },
  {
    doorName: "WNG008 ID-002",
    img: "/src/assets/images/doorRange.png"
  },
  {
    doorName: "WNG008 ID-002",
    img: "/src/assets/images/doorRange.png"
  },
  {
    doorName: "WNG008 ID-002",
    img: "/src/assets/images/doorRange.png"
  },
  {
    doorName: "WNG008 ID-002",
    img: "/src/assets/images/doorRange.png"
  },
  {
    doorName: "WNG008 ID-002",
    img: "/src/assets/images/doorRange.png"
  },
  {
    doorName: "WNG008 ID-002",
    img: "/src/assets/images/doorRange.png"
  },
  {
    doorName: "WNG008 ID-002",
    img: "/src/assets/images/doorRange.png"
  }
];

interface FooterProps {
  links: {
    pathname: string;
    route: string;
  }[];
  contacts: {
    icon: string;
    title: string;
    name: string;
  }[];
  socials: {
    icon: string;
    route: string;
    name: string;
  }[];
}

export const footerLinks: FooterProps = {
  links: [
    {
      pathname: "ԳԼԽԱՎՈՐ",
      route: "/"
    },
    {
      pathname: "Հայտարարություններ",
      route: "/news"
    },
    {
      pathname: "Մեր մասին",
      route: "/about"
    },
    {
      pathname: "ՏԵՍականի",
      route: "/products?type=first-arragement"
    },
    {
      pathname: "Կապ",
      route: "/contact"
    }
  ],
  contacts: [
    {
      icon: "/src/assets/icons/mail-icon.svg",
      title: "info@idoors.am",
      name: "mail"
    },
    {
      icon: "/src/assets/icons/location-icon.svg",
      title: "Նար-Դոս 36/19 (խանութ-սրահ)",
      name: "location"
    },
    {
      icon: "/src/assets/icons/location-icon.svg",
      title: "Խաղաղ Դոնի 1/9 (Արտադրամաս,խանութ-սրահ)",
      name: "location"
    },
    {
      icon: "/src/assets/icons/phone-icon.svg",
      title: "+374 93 10 00 12",
      name: "phone number"
    },
    {
      icon: "/src/assets/icons/phone-icon.svg",
      title: "+374 33 01 00 12",
      name: "phone number"
    }
  ],
  socials: [
    {
      icon: "/src/assets/icons/facebook-icon.svg",
      route: "",
      name: "facebook"
    },
    {
      icon: "/src/assets/icons/instagram-icon.svg",
      route: "",
      name: "instagram"
    }
  ]
};

interface ContactProps {
  icon: string;
  title: string;
  name: string;
}

export const contacts: ContactProps[] = [
  {
    icon: "/src/assets/icons/mail-blue-icon.svg",
    title: "info@idoors.am",
    name: "mail"
  },
  {
    icon: "/src/assets/icons/location-blue-icon.svg",
    title: "Նար-Դոս 36/19 (խանութ-սրահ)",
    name: "location"
  },
  {
    icon: "/src/assets/icons/location-blue-icon.svg",
    title: "Խաղաղ Դոնի 1/9 (Արտադրամաս,խանութ-սրահ)",
    name: "location"
  },
  {
    icon: "/src/assets/icons/phone-blue-icon.svg",
    title: "+374 93 10 00 12",
    name: "phone number"
  },
  {
    icon: "/src/assets/icons/phone-blue-icon.svg",
    title: "+374 33 01 00 12",
    name: "phone number"
  }
];

interface ProductsLayoutLinksProps {
  value: string;
  route: string;
  icon: IconType;
}

export const productsLayoutLinks: ProductsLayoutLinksProps[] = [
  {
    value: "first-arrangement",
    route: "/products?type=first-arrangement",
    icon: CgMenuGridR
  },
  {
    value: "second-arrangement",
    route: "/products?type=second-arrangement",
    icon: TfiMenuAlt
  }
];
