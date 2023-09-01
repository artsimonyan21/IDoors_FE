import Button from "@/components/ui/button";
import { useNavigate } from "react-router";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <section className=" w-full h-screen flex items-center justify-center px-10 ">
      <div className=" flex items-center flex-col gap-y-10">
        <div className=" text-center text-blue-1 font-[montserrat]">
          <h2 className=" text-7xl font-black uppercase">404</h2>
          <h3 className=" text-7xl font-black uppercase">Not Found</h3>
        </div>
        <p className=" text-lg">Ներողություն, Ձեր հարցումը չի գտնվել</p>
        <div className=" flex items-center justify-center gap-x-10">
          <Button icon onClick={() => navigate("/")}>
            Գլխավոր
          </Button>
          <Button icon onClick={() => navigate("/products")}>
            Տեսականի
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
