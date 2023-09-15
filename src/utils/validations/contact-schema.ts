import { InferType, object, string } from "yup";

export const contactSchema = object().shape({
  fullName: string()
    .required("Fullname field is required.")
    .min(6, "Fullname field must contain at least 6 characters."),
  email: string()
    .required("Email field is required.")
    .email("This is not a valid email."),
  phoneNumber: string().required("Phone number field is required."),
  message: string()
    .required("Message field is required.")
    .min(20, "Message field must contain at least 20 characters."),
});

export type ContactSchemaType = InferType<typeof contactSchema>;

export const contactSchemaDefaultValues = {
  fullName: "",
  email: "",
  phoneNumber: "",
  message: "",
};
