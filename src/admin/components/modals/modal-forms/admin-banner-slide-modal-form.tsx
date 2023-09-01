import { adminBannerFormSchema } from "@/admin/utils/validations";
import ErrorMessage from "@/components/ui/error-message";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

type SchemaType = z.infer<typeof adminBannerFormSchema>;

const AdminBannerSlideModalForm = () => {
  const { handleSubmit, formState, register } = useForm<SchemaType>({
    defaultValues: {
      name: "",
      desc: "",
    },
    resolver: zodResolver(adminBannerFormSchema),
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
      className=" w-full grid md:grid-cols-[1fr_2fr] gap-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className=" w-full flex items-center flex-col gap-y-4">
        <div className=" w-full flex items-center justify-center">
          <div className=" w-full">
            <img src="/src/assets/images/placeholder-image.png" alt="" />
          </div>
        </div>
        <div className=" w-full">
          <input
            type="file"
            className=" w-full cursor-pointer h-12 shadow-md px-4 placeholder:uppercase rounded-sm"
          />
        </div>
      </div>
      <div className=" flex items-center flex-col gap-4">
        <div className=" w-full flex items-start flex-col gap-y-2">
          <input
            {...register("name")}
            type="text"
            placeholder="Անուն"
            className=" w-full h-12 shadow-md px-4 placeholder:uppercase rounded-sm"
          />
          {formState.errors ? (
            <ErrorMessage message={formState.errors.name?.message} />
          ) : null}
        </div>
        <div className=" w-full flex items-start flex-col gap-y-2">
          <textarea
            {...register("desc")}
            rows={5}
            placeholder="Նկարագրություն"
            className=" w-full resize-none shadow-md px-4 placeholder:uppercase text-black rounded-sm"
          />
          {formState.errors ? (
            <ErrorMessage message={formState.errors.desc?.message} />
          ) : null}
        </div>
        <button className=" px-4 py-2 bg-green-500 text-white uppercase text-sm mt-4">
          Հաստատել
        </button>
      </div>
    </form>
  );
};

export default AdminBannerSlideModalForm;
