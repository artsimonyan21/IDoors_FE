import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { adminContactFormSchema } from "@/admin/utils/validations";
import ErrorMessage from "@/components/ui/error-message";

type SchemaType = z.infer<typeof adminContactFormSchema>;

const AdminContactModalForm = () => {
  const { handleSubmit, formState, register } = useForm<SchemaType>({
    defaultValues: {
      email: "",
      address_1: "",
      address_2: "",
      phone_1: "",
      phone_2: "",
    },
    resolver: zodResolver(adminContactFormSchema),
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
      className=" w-full flex items-center flex-col gap-y-4 py-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className=" w-full flex items-start flex-col gap-y-2">
        <textarea
          {...register("email")}
          rows={5}
          className=" w-full resize-none shadow-md px-4 placeholder:uppercase rounded-sm"
          placeholder="Email"
        />
        {formState.errors ? (
          <ErrorMessage message={formState.errors.email?.message} />
        ) : null}
      </div>
      <div className=" w-full flex items-start flex-col gap-y-2">
        <textarea
          {...register("address_1")}
          rows={5}
          className=" w-full shadow-md resize-none px-4 placeholder:uppercase rounded-sm"
          placeholder="Address 1"
        />
        {formState.errors ? (
          <ErrorMessage message={formState.errors.address_1?.message} />
        ) : null}
      </div>
      <div className=" w-full flex items-start flex-col gap-y-2">
        <textarea
          {...register("address_2")}
          rows={5}
          className=" w-full resize-none shadow-md px-4 placeholder:uppercase rounded-sm"
          placeholder="Address 2"
        />
      </div>
      <div className=" w-full flex items-start flex-col gap-y-2">
        <textarea
          {...register("phone_1")}
          rows={5}
          className=" w-full shadow-md resize-none px-4 placeholder:uppercase rounded-sm"
          placeholder="Phone 1"
        />
        {formState.errors ? (
          <ErrorMessage message={formState.errors.phone_1?.message} />
        ) : null}
      </div>
      <div className=" w-full flex items-start flex-col gap-y-2">
        <textarea
          {...register("phone_2")}
          rows={5}
          className=" w-full resize-none shadow-md px-4 placeholder:uppercase rounded-sm"
          placeholder="Phone 2"
        />
      </div>
      <button className=" px-4 py-2 bg-green-500 text-white uppercase text-sm mt-4">
        Հաստատել
      </button>
    </form>
  );
};

export default AdminContactModalForm;
