import Button from "@/components/ui/button";

const Login = () => {
  return (
    <section className=" w-full h-screen flex items-center justify-center">
      <form action="" className=" flex items-center flex-col gap-4">
        <input type="text" />
        <input type="password" />
        <Button icon>Մուտք</Button>
      </form>
    </section>
  );
};

export default Login;
