import * as yup from "yup";

export const registerSchema = yup.object().shape({
  name: yup.string().required("Obligatorio"),
  email: yup.string().email("Email no válido").required("Obligatorio"),
  password: yup.string().min(4).max(15).required("Obligatorio"),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

export const loginSchema = yup.object().shape({
  email: yup.string().email("Email no válido").required("Obligatorio"),
  password: yup.string().min(4).max(15).required("Obligatorio"),
});
