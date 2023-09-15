import ErrorMessage from "@/components/ui/error-message";
import {
  ContactSchemaType,
  contactSchema,
  contactSchemaDefaultValues,
} from "@/admin/utils/validations/contact-schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

const AdminContactModalForm = () => {
  const {
    handleSubmit,
    formState: { errors },
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
      className=" w-full flex items-center flex-col gap-y-4 py-4"
      onSubmit={onSubmit}
    >
      <div className=" w-full flex items-start flex-col gap-y-2">
        <input
          {...register("email")}
          className=" w-full resize-none h-16 shadow-md px-4 placeholder:uppercase rounded-sm"
          placeholder="Email"
        />
        {errors.email && <ErrorMessage message={errors.email?.message} />}
      </div>
      <div className=" w-full flex items-start flex-col gap-y-2">
        <input
          {...register("address_1")}
          className=" w-full shadow-md resize-none h-16 px-4 placeholder:uppercase rounded-sm"
          placeholder="Address 1"
        />
        {errors.address_1 && (
          <ErrorMessage message={errors.address_1?.message} />
        )}
      </div>
      <div className=" w-full flex items-start flex-col gap-y-2">
        <input
          {...register("address_2")}
          className=" w-full resize-none h-16 shadow-md px-4 placeholder:uppercase rounded-sm"
          placeholder="Address 2"
        />
        {errors.address_2 && (
          <ErrorMessage message={errors.address_2?.message} />
        )}
      </div>
      <div className=" w-full flex items-start flex-col gap-y-2">
        <input
          {...register("phone_1")}
          className=" w-full shadow-md resize-none h-16 px-4 placeholder:uppercase rounded-sm"
          placeholder="Phone 1"
        />
        {errors.phone_1 && <ErrorMessage message={errors.phone_1?.message} />}
      </div>
      <div className=" w-full flex items-start flex-col gap-y-2">
        <input
          {...register("phone_2")}
          className=" w-full resize-none h-16 shadow-md px-4 placeholder:uppercase rounded-sm"
          placeholder="Phone 2"
        />
        {errors.phone_2 && <ErrorMessage message={errors.phone_2?.message} />}
      </div>
      <button className=" px-4 py-2 bg-green-500 text-white uppercase text-sm mt-4">
        Հաստատել
      </button>
    </form>
  );
};

export default AdminContactModalForm;
