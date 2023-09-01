import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { adminProductsFormSchema } from "@/admin/utils/validations";
import ErrorMessage from "@/components/ui/error-message";

type SchemaType = z.infer<typeof adminProductsFormSchema>;

const AdminProductsModalForm = () => {
  const { handleSubmit, formState, register } = useForm<SchemaType>({
    defaultValues: {
      id: "",
      desc: "",
    },
    resolver: zodResolver(adminProductsFormSchema),
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
          <input
            {...register("id")}
            type="text"
            placeholder="ID"
            className=" w-full h-12 shadow-md px-4 placeholder:uppercase rounded-sm"
          />
          {formState.errors ? (
            <ErrorMessage message={formState.errors.id?.message} />
          ) : null}
        </div>
        <div className=" w-full flex items-start flex-col gap-y-2">
          <textarea
            {...register("desc")}
            rows={5}
            className=" w-full shadow-md resize-none px-4 placeholder:uppercase rounded-sm"
            placeholder="Նկարագրություն"
          />
          {formState.errors ? (
            <ErrorMessage message={formState.errors.desc?.message} />
          ) : null}
        </div>
        <div className=" w-full flex justify-start gap-x-4 mt-4">
          <div>
            <span>Կատեգորիա:</span>
          </div>
          <select
            name=""
            id=""
            className=" w-64 h-12 px-4 bg-white shadow-md cursor-pointer"
          >
            <optgroup>
              <option value="">Option 1</option>
              <option value="">Option 2</option>
              <option value="">Option 3</option>
            </optgroup>
          </select>
        </div>
        <button className=" px-4 py-2 bg-green-500 text-white uppercase text-sm mt-4">
          Հաստատել
        </button>
      </div>
    </form>
  );
};

export default AdminProductsModalForm;
