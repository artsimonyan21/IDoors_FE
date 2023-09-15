import {
  ProductsSchemaType,
  productsSchema,
  productsSchemaDefaultValues,
} from "@/admin/utils/validations/products-schema";
import ErrorMessage from "@/components/ui/error-message";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

const AdminProductsModalForm = () => {
  const {
    handleSubmit,
    formState: { errors },
    register,
    reset,
  } = useForm<ProductsSchemaType>({
    defaultValues: productsSchemaDefaultValues,
    resolver: yupResolver(productsSchema),
  });

  const onSubmit = handleSubmit((values: ProductsSchemaType) => {
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
            <img src="/images/placeholder-image.png" alt="" />
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
          <input
            {...register("id")}
            type="text"
            placeholder="ID"
            className=" w-full h-12 shadow-md px-4 placeholder:uppercase rounded-sm"
          />
          {errors && <ErrorMessage message={errors.id?.message} />}
        </div>
        <div className=" w-full flex items-start flex-col gap-y-2">
          <textarea
            {...register("desc")}
            rows={5}
            className=" w-full shadow-md resize-none px-4 placeholder:uppercase rounded-sm"
            placeholder="Նկարագրություն"
          />
          {errors && <ErrorMessage message={errors.desc?.message} />}
        </div>
        <div className=" w-full flex justify-start gap-x-4 mt-4">
          <div>
            <span>Կատեգորիա:</span>
          </div>
          <select
            {...register("category")}
            className=" w-64 h-12 px-4 bg-white shadow-md cursor-pointer"
          >
            <optgroup>
              <option value="">Option 1</option>
              <option value="">Option 2</option>
              <option value="">Option 3</option>
            </optgroup>
          </select>
          {errors.category && (
            <ErrorMessage message={errors.category.message} />
          )}
        </div>
        <button className=" px-4 py-2 bg-green-500 text-white uppercase text-sm mt-4">
          Հաստատել
        </button>
      </div>
    </form>
  );
};

export default AdminProductsModalForm;
