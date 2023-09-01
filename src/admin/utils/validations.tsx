import * as z from "zod";

export const registerSchema = z.object({
  name: z
    .string({ required_error: "Name field is required." })
    .nonempty()
    .min(3, { message: "Name field must contain min 3 characters." }),
  surname: z
    .string({ required_error: "Surname field is required." })
    .nonempty()
    .min(3, { message: "Surname field must contain min 3 characters." }),
  email: z
    .string({ required_error: "Email field is required." })
    .nonempty()
    .email("This is not a valid email."),
  password: z
    .string({ required_error: "Password field is required." })
    .nonempty()
    .min(4, { message: "Password field must contain min 4 characters." }),
});

export const loginSchema = z.object({
  email: z
    .string({ required_error: "Email field is required." })
    .nonempty()
    .email("This is not a valid email."),
  password: z
    .string({ required_error: "Password field is required." })
    .nonempty()
    .min(4, { message: "Password field must contain min 4 characters." }),
});

export const adminAboutFormSchema = z.object({
  desc_am: z
    .string({
      required_error: "Descritption field is required.",
    })
    .nonempty(),
  desc_en: z
    .string({
      required_error: "Descritption field is required.",
    })
    .nonempty(),
  desc_ru: z
    .string({
      required_error: "Descritption field is required.",
    })
    .nonempty(),
});

export const adminBannerFormSchema = z.object({
  name: z
    .string({
      required_error: "Name field is required.",
    })
    .nonempty(),
  desc: z
    .string({
      required_error: "Descritption field is required.",
    })
    .nonempty(),
});

export const adminContactFormSchema = z.object({
  email: z
    .string({
      required_error: "Email field is required.",
    })
    .nonempty()
    .email("This is not a valid email."),
  address_1: z
    .string({
      required_error: "Address 1 field is required.",
    })
    .nonempty(),
  address_2: z.string(),
  phone_1: z
    .string({
      required_error: "Phone 1 field is required.",
    })
    .nonempty(),
  phone_2: z.string(),
});

export const adminProductsFormSchema = z.object({
  id: z
    .string({
      required_error: "ID field is required.",
    })
    .nonempty(),
  desc: z
    .string({
      required_error: "Description field is required.",
    })
    .nonempty(),
});
