import Button from "@/components/ui/button";

const Register = () => {
  return (
    <section className=" w-full h-[calc(100vh-40px)] flex items-center justify-center">
      <div className=" w-full flex items-center flex-col gap-y-6">
        <header>
          <h2 className=" font-[ezo-na] sm:text-6xl xs:text-5xl text-4xl tracking-wider text-blue-1">
            Ավելացնել ադմին
          </h2>
        </header>
        <form action="" className=" md:w-1/2 sm:w-3/4 w-full flex items-center flex-col gap-4 p-6 ">
          <input
            type="text"
            placeholder="Անուն"
            className=" w-full h-12 shadow-md px-4 placeholder:uppercase text-gray-1 rounded-sm"
          />
          <input
            type="text"
            placeholder="Ազգանուն"
            className=" w-full h-12 shadow-md px-4 placeholder:uppercase text-gray-1 rounded-sm"
          />
          <input
            type="email"
            placeholder="Էլ․Հասցե"
            className=" w-full h-12 shadow-md px-4 placeholder:uppercase text-gray-1 rounded-sm"
          />
          <input
            type="password"
            placeholder="Գաղտնաբառ"
            className=" w-full h-12 shadow-md px-4 placeholder:uppercase text-gray-1 rounded-sm"
          />
          <Button>Ավելացնել</Button>
        </form>
      </div>
    </section>
  );
};

export default Register;
