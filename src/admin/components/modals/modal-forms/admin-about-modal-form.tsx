import {
  AboutSchemaType,
  aboutSchema,
  aboutSchemaDefaultValues,
} from "@/admin/utils/validations/about-schema";
import ErrorMessage from "@/components/ui/error-message";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

const AdminAboutModalForm = () => {
  const {
    handleSubmit,
    formState: { errors },
    register,
    reset,
  } = useForm<AboutSchemaType>({
    defaultValues: aboutSchemaDefaultValues,
    resolver: yupResolver(aboutSchema),
  });

  const onSubmit = handleSubmit((values: AboutSchemaType) => {
    console.log(values);
    reset();
  });

  return (
    <form
      className=" w-full grid grid-cols-[1fr_2fr] gap-x-4 py-4"
      onSubmit={onSubmit}
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
          {errors ? <ErrorMessage message={errors.desc_am?.message} /> : null}
        </div>
        <div className=" w-full flex items-start flex-col gap-y-2">
          <textarea
            {...register("desc_en")}
            rows={5}
            className=" w-full shadow-md resize-none px-4 placeholder:uppercase rounded-sm"
            placeholder="Նկարագրություն անգլերեն"
          />
          {errors ? <ErrorMessage message={errors.desc_en?.message} /> : null}
        </div>
        <div className=" w-full flex items-start flex-col gap-y-2">
          <textarea
            {...register("desc_ru")}
            rows={5}
            className=" w-full resize-none shadow-md px-4 placeholder:uppercase rounded-sm"
            placeholder="Նկարագրություն ռուսերեն"
          />
          {errors ? <ErrorMessage message={errors.desc_ru?.message} /> : null}
        </div>
        <button className=" px-4 py-2 bg-green-500 text-white uppercase text-sm mt-4">
          Հաստատել
        </button>
      </div>
    </form>
  );
};

export default AdminAboutModalForm;
