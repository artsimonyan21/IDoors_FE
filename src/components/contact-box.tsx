import {
  ContactSchemaType,
  contactSchema,
  contactSchemaDefaultValues,
} from "@/utils/validations/contact-schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Button from "./ui/button";
import ErrorMessage from "./ui/error-message";

const ContactBox = () => {
  const {
    formState: { errors },
    handleSubmit,
    register,
    reset,
  } = useForm<ContactSchemaType>({
    defaultValues: contactSchemaDefaultValues,
    resolver: yupResolver(contactSchema),
  });

  const onSubmit = handleSubmit((values: ContactSchemaType) => {
    console.log(values);
    reset();
  });

  return (
    <form
      onSubmit={onSubmit}
      className=" w-full flex items-center flex-col gap-y-4"
    >
      <div className=" w-full flex items-start flex-col gap-y-1">
        <input
          {...register("fullName")}
          type="text"
          placeholder="Անուն Ազգանուն"
          className=" w-full h-12 shadow-md px-4 placeholder:uppercase rounded-sm"
        />
        {errors ? <ErrorMessage message={errors.fullName?.message} /> : null}
      </div>
      <div className=" w-full flex items-start flex-col gap-y-1">
        <input
          {...register("email")}
          type="email"
          placeholder="ԷԼ. ՓՈՍՏ"
          className=" w-full h-12 shadow-md px-4 placeholder:uppercase rounded-sm"
        />
        {errors ? <ErrorMessage message={errors.email?.message} /> : null}
      </div>
      <div className=" w-full flex items-start flex-col gap-y-1">
        <input
          {...register("phoneNumber")}
          type="tel"
          placeholder="Հեռախոսահամար"
          className=" w-full h-12 shadow-md px-4 placeholder:uppercase rounded-sm"
        />
        {errors ? <ErrorMessage message={errors.phoneNumber?.message} /> : null}
      </div>
      <div className=" w-full flex items-start flex-col gap-y-1">
        <textarea
          {...register("message")}
          cols={30}
          rows={5}
          placeholder="ՀԱՂՈՐԴԱԳՐՈՒԹՅՈՒՆ"
          className=" w-full shadow-md px-4 placeholder:uppercase rounded-sm resize-none py-4"
        ></textarea>
        {errors ? <ErrorMessage message={errors.message?.message} /> : null}
      </div>
      <Button icon className=" w-full">
        Ուղարկել
      </Button>
    </form>
  );
};

export default ContactBox;
