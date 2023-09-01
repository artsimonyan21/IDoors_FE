import * as z from "zod";
import { useForm } from "react-hook-form";
import Button from "./ui/button";
import { contactSchema } from "@/utils/validations";
import { zodResolver } from "@hookform/resolvers/zod";
import ErrorMessage from "./ui/error-message";

type SchemaType = z.infer<typeof contactSchema>;

const ContactBox = () => {
  const { formState, handleSubmit, register } = useForm<SchemaType>({
    defaultValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
      message: "",
    },
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (values: SchemaType) => {
    try {
      console.log(values);
    } catch (err: any) {
      console.log(err);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className=" w-full flex items-center flex-col gap-y-4"
    >
      <div className=" w-full flex items-start flex-col gap-y-1">
        <input
          {...register("fullName")}
          type="text"
          placeholder="Անուն Ազգանուն"
          className=" w-full h-12 shadow-md px-4 placeholder:uppercase rounded-sm"
        />
        {formState.errors ? (
          <ErrorMessage message={formState.errors.fullName?.message} />
        ) : null}
      </div>
      <div className=" w-full flex items-start flex-col gap-y-1">
        <input
          {...register("email")}
          type="email"
          placeholder="ԷԼ. ՓՈՍՏ"
          className=" w-full h-12 shadow-md px-4 placeholder:uppercase rounded-sm"
        />
        {formState.errors ? (
          <ErrorMessage message={formState.errors.email?.message} />
        ) : null}
      </div>
      <div className=" w-full flex items-start flex-col gap-y-1">
        <input
          {...register("phoneNumber")}
          type="tel"
          placeholder="Հեռախոսահամար"
          className=" w-full h-12 shadow-md px-4 placeholder:uppercase rounded-sm"
        />
        {formState.errors ? (
          <ErrorMessage message={formState.errors.phoneNumber?.message} />
        ) : null}
      </div>
      <div className=" w-full flex items-start flex-col gap-y-1">
        <textarea
          {...register("message")}
          cols={30}
          rows={5}
          placeholder="ՀԱՂՈՐԴԱԳՐՈՒԹՅՈՒՆ"
          className=" w-full shadow-md px-4 placeholder:uppercase rounded-sm resize-none py-4"
        ></textarea>
        {formState.errors ? (
          <ErrorMessage message={formState.errors.message?.message} />
        ) : null}
      </div>
      <Button icon className=" w-full">
        Ուղարկել
      </Button>
    </form>
  );
};

export default ContactBox;
