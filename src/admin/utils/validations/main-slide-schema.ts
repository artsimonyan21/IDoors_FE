import { InferType, object, string } from "yup";

export const mainSlideSchema = object().shape({
  name: string().required("Name field is required."),
  desc: string().required("Descritption field is required."),
});

export type MainSlideSchemaType = InferType<typeof mainSlideSchema>;

export const mainSlideDefaultValues = {
  name: "",
  desc: "",
};
