import * as z from "zod";

export const contactSchema = z.object({
  fullName: z
    .string({ required_error: "Fullname field is required." })
    .nonempty()
    .min(6, { message: "Fullname field must contain min 6 characters." }),
  email: z
    .string({ required_error: "Email field is required." })
    .nonempty()
    .email("This is not a valid email."),
  phoneNumber: z
    .string({ required_error: "Phone number field is required." })
    .nonempty(),
  message: z
    .string({ required_error: "Message field is required." })
    .nonempty()
    .min(20, { message: "Message field must contain min 20 characters." }),
});
