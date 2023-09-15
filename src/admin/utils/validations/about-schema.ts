import { InferType, object, string } from "yup";

export const aboutSchema = object().shape({
  desc_am: string().required("Armenian descritption field is required."),
  desc_en: string().required("English descritption field is required."),
  desc_ru: string().required("Russain descritption field is required."),
});

export type AboutSchemaType = InferType<typeof aboutSchema>;

export const aboutSchemaDefaultValues = {
  desc_am: "",
  desc_en: "",
  desc_ru: "",
};
