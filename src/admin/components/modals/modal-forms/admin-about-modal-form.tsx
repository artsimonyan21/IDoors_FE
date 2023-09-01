import * as z from "zod";
import { useForm } from "react-hook-form";
import { adminAboutFormSchema } from "@/admin/utils/validations";
import { zodResolver } from "@hookform/resolvers/zod";
import ErrorMessage from "@/components/ui/error-message";

type SchemaType = z.infer<typeof adminAboutFormSchema>;

const AdminAboutModalForm = () => {
  const { handleSubmit, formState, register } = useForm<SchemaType>({
    defaultValues: {
      desc_am: "",
      desc_en: "",
      desc_ru: "",
    },
    resolver: zodResolver(adminAboutFormSchema),
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
      className=" w-full grid grid-cols-[1fr_2fr] gap-x-4 py-4"
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
      <div className=" flex items-center flex-col gap-y-4">
        <div className=" w-full flex items-start flex-col gap-y-2">
          <textarea
            {...register("desc_am")}
            rows={5}
            className=" w-full resize-none shadow-md px-4 placeholder:uppercase rounded-sm"
            placeholder="Նկարագրություն հայերեն"
          />
          {formState.errors ? (
            <ErrorMessage message={formState.errors.desc_am?.message} />
          ) : null}
        </div>
        <div className=" w-full flex items-start flex-col gap-y-2">
          <textarea
            {...register("desc_en")}
            rows={5}
            className=" w-full shadow-md resize-none px-4 placeholder:uppercase rounded-sm"
            placeholder="Նկարագրություն անգլերեն"
          />
          {formState.errors ? (
            <ErrorMessage message={formState.errors.desc_en?.message} />
          ) : null}
        </div>
        <div className=" w-full flex items-start flex-col gap-y-2">
          <textarea
            {...register("desc_ru")}
            rows={5}
            className=" w-full resize-none shadow-md px-4 placeholder:uppercase rounded-sm"
            placeholder="Նկարագրություն ռուսերեն"
          />
          {formState.errors ? (
            <ErrorMessage message={formState.errors.desc_ru?.message} />
          ) : null}
        </div>
        <button className=" px-4 py-2 bg-green-500 text-white uppercase text-sm mt-4">
          Հաստատել
        </button>
      </div>
    </form>
  );
};

export default AdminAboutModalForm;
