import { Field, Form, Formik, useFormik } from "formik";
import SignUpSchema from "../Schema/signup";

const SignUpComponent = () => {
  const initialValues = {
    firstname: "",
    lastname: "",
    username: "",
    mobile: "",
    email: "",
    password: "",
    confirmpass: "",
  };

  // Formik is used to handle form data, basically used to get form data

  const { errors, values, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: SignUpSchema,
      onSubmit: (values, action) => {
        console.log(values);
        action.resetForm();
      },
    });

  return (
    <>
      <Formik>
        <Form onSubmit={handleSubmit}>
          <div>
            <label name="firstname">First Name</label>
            <Field
              type="text"
              name="firstname"
              placeholder="First Name"
              value={values.firstname}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.firstname && touched.firstname ? (
              <p>{errors.firstname}</p>
            ) : null}
          </div>

          <div>
            <label name="lastname">Last Name</label>
            <Field
              type="text"
              name="lastname"
              placeholder="Last Name"
              value={values.lastname}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.lastname && touched.lastname ? (
              <p>{errors.lastname}</p>
            ) : null}
          </div>

          <div>
            <label name="username">User Name</label>
            <Field
              type="text"
              name="username"
              placeholder="User Name"
              value={values.username}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.username && touched.username ? (
              <p>{errors.username}</p>
            ) : null}
          </div>

          <div>
            <label name="mobile">Mobile</label>
            <Field
              type="string"
              name="mobile"
              placeholder="Phone Number"
              value={values.mobile}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.mobile && touched.mobile ? <p>{errors.mobile}</p> : null}
          </div>

          <div>
            <label name="email">Email</label>
            <Field
              type="text"
              name="email"
              placeholder="Email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.email && touched.email ? <p>{errors.email}</p> : null}
          </div>

          <div>
            <label name="password">Password</label>
            <Field
              type="text"
              name="password"
              placeholder="Choose password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.password && touched.password ? (
              <p>{errors.password}</p>
            ) : null}
          </div>

          <div>
            <label name="confirmpass">Confirm Password</label>
            <Field
              type="text"
              name="confirmpass"
              placeholder="Re-type Password"
              value={values.confirmpass}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.confirmpass && touched.confirmpass ? (
              <p>{errors.confirmpass}</p>
            ) : null}
          </div>

          <button type="submit">SignUp</button>
        </Form>
      </Formik>
    </>
  );
};

export default SignUpComponent;
