interface AdminSidebarProps {
  name: string;
  route: string;
}

export const adminSidebarLinks: AdminSidebarProps[] = [
  {
    name: "գլխավոր",
    route: "/admin"
  },
  {
    name: "գլխավոր սլայդ",
    route: "/admin/banner-slide"
  },
  {
    name: "մեր մասին",
    route: "/admin/about"
  },
  {
    name: "տեսականի",
    route: "/admin/products"
  },
  {
    name: "Կոնտակտ ինֆո",
    route: "/admin/footer-info"
  }
];
