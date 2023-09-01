import * as z from "zod";
import Button from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { loginSchema } from "@/admin/utils/validations";
import { zodResolver } from "@hookform/resolvers/zod";
import ErrorMessage from "@/components/ui/error-message";

type SchemaType = z.infer<typeof loginSchema>;

const Login = () => {
  const { formState, handleSubmit, register } = useForm<SchemaType>({
    defaultValues: { email: "", password: "" },
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (values: SchemaType) => {
    try {
      console.log(values);
    } catch (err: any) {
      console.log(err);
    }
  };

  return (
    <section className=" w-full h-screen flex items-center justify-center">
      <div className=" w-full flex items-center flex-col gap-y-6">
        <header>
          <h2 className=" font-[ezo-na] sm:text-6xl text-5xl tracking-wider text-blue-1">
            Մուտք ադմին
          </h2>
        </header>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" md:w-1/2 sm:w-3/4 w-full flex items-center flex-col gap-4 p-6 "
        >
          <div className=" w-full flex items-start flex-col gap-y-2">
            <input
              {...register("email")}
              type="email"
              placeholder="Էլ․Հասցե"
              className=" w-full h-12 shadow-md px-4 placeholder:uppercase rounded-sm"
            />
            {formState.errors ? (
              <ErrorMessage message={formState.errors.email?.message} />
            ) : null}
          </div>
          <div className=" w-full flex items-start flex-col gap-y-2">
            <input
              {...register("password")}
              type="password"
              placeholder="Գաղտնաբառ"
              className=" w-full h-12 shadow-md px-4 placeholder:uppercase rounded-sm"
            />
            {formState.errors ? (
              <ErrorMessage message={formState.errors.password?.message} />
            ) : null}
          </div>
          <Button>Մուտք</Button>
        </form>
      </div>
    </section>
  );
};

export default Login;
