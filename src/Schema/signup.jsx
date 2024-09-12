import * as yup from "yup";

const SignUpSchema = yup.object({
  firstname: yup.string().min(3).max(36).required("Enter your First Name"),
  lastname: yup.string().min(3).max(36).required("Enter your Last Name"),
  username: yup.string().min(3).max(36).required("Enter your User Name"),
  mobile: yup.string().length(11).required("Enter your Phone"),
  email: yup.string().email().required("Enter your Email"),
  password: yup.string().min(6).max(36).required("Choose a password"),
  confirmpass: yup
    .string()
    .required()
    .oneOf([yup.ref("password"), null], "Password must match"),
});

export default SignUpSchema;
