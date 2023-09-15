import { InferType, object, string } from "yup";

export const registerSchema = object().shape({
  name: string()
    .required("Name field is required.")
    .min(3, "Name field must contain at least 3 characters."),
  surname: string()
    .required("Surname field is required.")
    .min(3, "Surname field must contain min 3 characters."),
  email: string()
    .required("Email field is required.")
    .email("This is not a valid email."),
  password: string()
    .required("Password field is required.")
    .min(4, "Password field must contain at least 4 characters."),
});

export type RegisterSchemaType = InferType<typeof registerSchema>;

export const registerSchemaDefaultValues = {
  name: "",
  surname: "",
  email: "",
  password: "",
};
