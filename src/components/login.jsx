import { useFormik } from "formik";
import LogInSchema from "../Schema/logIn";

const LogInComponent = () => {
  const onSubmit = (values, actions) => {
    console.log("Submitted");
  };

  const {
    values,
    errors,
    isSubmitting,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: LogInSchema,
    onSubmit,
  });
  console.log(errors);
  console.log(values);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm rounded-lg bg-white p-8 shadow-lg"
      >
        <h1 className="mb-6 text-center text-2xl font-bold">Log In</h1>

        <div className="mb-6">
          <label
            htmlFor="username"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            UserName
          </label>
          <input
            value={values.username}
            onChange={handleChange}
            onBlur={handleBlur}
            type="text"
            id="username"
            placeholder="Please Enter Username"
            className={`w-full rounded-full border px-3 py-2 shadow-sm ${
              errors.username && touched.username
                ? "border-2 border-red-400"
                : "border-gray-300"
            } focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
          {errors.username && touched.username && (
            <p className="mt-1 text-sm text-red-500">{errors.username}</p>
          )}
        </div>

        <div className="mb-6">
          <label
            htmlFor="password"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            value={values.password}
            onChange={handleChange}
            type="password"
            id="password"
            placeholder="Enter your Password"
            className="w-full rounded-full border border-gray-300 px-3 py-2 shadow-sm hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.password && touched.password && (
            <p className="mt-1 text-sm text-red-500">{errors.password}</p>
          )}
        </div>

        <div className="flex items-center justify-center">
          <button
            disabled={isSubmitting}
            type="submit"
            className={`rounded-full bg-blue-500 px-4 py-2 text-white hover:bg-black focus:outline-none focus:ring-2 focus:ring-blue-500`}
          >
            Log In
          </button>
        </div>
      </form>
    </div>
  );
};

export default LogInComponent;
