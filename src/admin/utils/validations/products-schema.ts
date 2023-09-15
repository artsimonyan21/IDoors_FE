import { InferType, object, string } from "yup";

export const productsSchema = object().shape({
  id: string().required("ID field is required."),
  desc: string().required("Description field is required."),
  category: string().required("Category field is required."),
});

export type ProductsSchemaType = InferType<typeof productsSchema>;

export const productsSchemaDefaultValues = {
  id: "",
  desc: "",
  category: "",
};
