import {
  MainSlideSchemaType,
  mainSlideDefaultValues,
  mainSlideSchema,
} from "@/admin/utils/validations/main-slide-schema";
import ErrorMessage from "@/components/ui/error-message";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

const AdminBannerSlideModalForm = () => {
  const {
    handleSubmit,
    formState: { errors },
    register,
    reset,
  } = useForm<MainSlideSchemaType>({
    defaultValues: mainSlideDefaultValues,
    resolver: yupResolver(mainSlideSchema),
  });

  const onSubmit = handleSubmit((values: MainSlideSchemaType) => {
    console.log(values);
    reset();
  });

  return (
    <form
      className=" w-full grid md:grid-cols-[1fr_2fr] gap-4"
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
      <div className=" flex items-center flex-col gap-4">
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
          <textarea
            {...register("desc")}
            rows={5}
            placeholder="Նկարագրություն"
            className=" w-full resize-none shadow-md px-4 placeholder:uppercase text-black rounded-sm"
          />
          {errors ? <ErrorMessage message={errors.desc?.message} /> : null}
        </div>
        <button className=" px-4 py-2 bg-green-500 text-white uppercase text-sm mt-4">
          Հաստատել
        </button>
      </div>
    </form>
  );
};

export default AdminBannerSlideModalForm;
