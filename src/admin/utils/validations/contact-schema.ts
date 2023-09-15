import { InferType, object, string } from "yup";

export const contactSchema = object().shape({
  email: string()
    .required("Email is required.")
    .email("This is not valid email."),
  address_1: string().required("First address field is required."),
  address_2: string().required("Second address field is required."),
  phone_1: string().required("First phone number field is required."),
  phone_2: string().required("Second phone number field is required."),
});

export type ContactSchemaType = InferType<typeof contactSchema>;

export const contactSchemaDefaultValues = {
  email: "",
  address_1: "",
  address_2: "",
  phone_1: "",
  phone_2: "",
};
