import * as yup from "yup";

const SignUpSchema = yup.object({
  firstname: yup
    .string()
    .min(3)
    .max(36)
    .required("Please enter your First Name"),
  lastname: yup.string().min(3).max(36).required("Please enter your Last Name"),
  username: yup.string().min(3).max(36).required("Please enter your User Name"),
  mobile: yup.string().length(11).required("Please enter your Phone"),
  email: yup.string().email().required("Please enter your Email"),
  password: yup.string().min(6).max(36).required("Choose a password"),
  confirmpass: yup
    .string()
    .required()
    .oneOf([yup.ref("password"), null], "Password must match"),
});

export default SignUpSchema;
