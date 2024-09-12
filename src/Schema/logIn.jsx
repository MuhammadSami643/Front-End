//aplly the validations on the login page Input Fields

import * as yup from "yup";

const validpass = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z]).{8,}$/;

const LogInSchema = yup.object().shape({
  username: yup.string().min(3).required("Username cannot be empty"),
  password: yup
    .string()
    .min(8)
    .max(32)
    .matches(validpass, {
      message:
        "Password must be at least 8 characters and mix of letters and numbers",
    })
    .required("Please enter your password"),
});

export default LogInSchema;
