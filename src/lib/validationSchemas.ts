import * as yup from "yup";

export const loginSchema = yup
  .object({
    email: yup.string().email().required("Email is required!"),
    password: yup
      .string()
      .min(6, "Password must be at least 6 characters")
      .matches(
        /^(?=.*[A-Z])(?=.*[0-9]).{6,}$/,
        "Password must contain at least one uppercase letter, one number, and be at least 6 characters long"
      )
      .required("Password is required"),
  })
  .required();

export const registrationSchema = yup.object({
  email: yup.string().email("Invalid email").required("Email is required"),
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().optional(),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .matches(
      /^(?=.*[A-Z])(?=.*[0-9]).{6,}$/,
      "Password must contain at least one uppercase letter, one number, and be at least 6 characters long"
    )
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), ""], "Passwords must match")
    .required("Please confirm your password"),
  role: yup
    .string()
    .oneOf(["user", "organizer"], "Role must be either 'user' or 'organizer'")
    .required("Role is required"),
});
