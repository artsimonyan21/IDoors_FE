import { InferType, object, string } from "yup";

export const loginSchema = object().shape({
  email: string()
    .required("Email field is required.")
    .email("This is not valid email."),
  password: string()
    .required("Password field is required.")
    .min(4, "Password field must contain at least 4 characters."),
});

export type LoginSchemaType = InferType<typeof loginSchema>;

export const loginSchemaDefaultValues = {
  email: "",
  password: "",
};
