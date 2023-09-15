import {
  RegisterSchemaType,
  registerSchema,
  registerSchemaDefaultValues,
} from "@/admin/utils/validations/register-schema";
import Button from "@/components/ui/button";
import ErrorMessage from "@/components/ui/error-message";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

const Register = () => {
  const {
    formState: { errors },
    register,
    handleSubmit,
    reset,
  } = useForm<RegisterSchemaType>({
    defaultValues: registerSchemaDefaultValues,
    resolver: yupResolver(registerSchema),
  });

  const onSubmit = handleSubmit((values: RegisterSchemaType) => {
    console.log(values);
    reset();
  });

  return (
    <section className=" w-full h-[calc(100vh-40px)] flex items-center justify-center">
      <div className=" w-full flex items-center flex-col gap-y-6">
        <header>
          <h2 className=" font-[ezo-na] sm:text-6xl xs:text-5xl text-4xl tracking-wider text-blue-1">
            Ավելացնել ադմին
          </h2>
        </header>
        <form
          onSubmit={onSubmit}
          className=" md:w-1/2 sm:w-3/4 w-full flex items-center flex-col gap-4 p-6 "
        >
          <div className=" w-full flex items-start flex-col gap-y-2">
            <input
              {...register("name")}
              type="text"
              placeholder="Անուն"
              className=" w-full h-12 shadow-md px-4 placeholder:uppercase rounded-sm"
            />
            {errors ? <ErrorMessage message={errors.name?.message} /> : null}
          </div>
          <div className=" w-full flex items-start flex-col gap-y-2">
            <input
              {...register("surname")}
              type="text"
              placeholder="Ազգանուն"
              className=" w-full h-12 shadow-md px-4 placeholder:uppercase rounded-sm"
            />
            {errors ? <ErrorMessage message={errors.surname?.message} /> : null}
          </div>
          <div className=" w-full flex items-start flex-col gap-y-2">
            <input
              {...register("email")}
              type="email"
              placeholder="Էլ․Հասցե"
              className=" w-full h-12 shadow-md px-4 placeholder:uppercase rounded-sm"
            />
            {errors ? <ErrorMessage message={errors.email?.message} /> : null}
          </div>
          <div className=" w-full flex items-start flex-col gap-y-2">
            <input
              {...register("password")}
              type="password"
              placeholder="Գաղտնաբառ"
              className=" w-full h-12 shadow-md px-4 placeholder:uppercase rounded-sm"
            />
            {errors ? (
              <ErrorMessage message={errors.password?.message} />
            ) : null}
          </div>
          <Button>Ավելացնել</Button>
        </form>
      </div>
    </section>
  );
};

export default Register;
