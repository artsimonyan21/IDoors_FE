import Button from "@/components/ui/button";
import PageTitle from "./components/page-title";
import { useNavigate } from "react-router";

const Admin = () => {
  const navigate = useNavigate();
  return (
    <section className=" p-10 pt-0 flex items-center flex-col">
      <header className=" my-10">
        <PageTitle>գլխավոր</PageTitle>
      </header>
      <div className=" flex items-center flex-col gap-y-4">
        <div className=" flex items-center flex-col gap-y-2 text-center">
          <h2 className=" text-3xl">Welcome to Admin Dashboard</h2>
          <h2 className=" text-4xl">ADMIN: Narine Poghosyan</h2>
        </div>
        <Button
          className=" px-16 py-4 text-base"
          onClick={() => navigate("/admin/register")}
        >
          ԱՎԵԼԱՑՆԵԼ ԱԴՄԻՆ
        </Button>
      </div>
    </section>
  );
};

export default Admin;
