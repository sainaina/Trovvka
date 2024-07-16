import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { fetchCreateUser, selectUser } from "../../redux/feature/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const userResponse = useSelector(selectUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (userResponse?.status === 201) {
      navigate("/verify-email");
    }
  }, [userResponse?.status, navigate]);

  const formik = useFormik({
    initialValues: {
      email: "",
      username: "",
      first_name: "",
      last_name: "",
      password: "Heng!123",
      confirmPassword: "Heng!123",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      username: Yup.string().required("Required"),
      first_name: Yup.string().required("Required"),
      last_name: Yup.string().required("Required"),
      password: Yup.string()
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/,
          "Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character."
        )
        .required("Required"),
      confirmPassword: Yup.string()
        .required("Required")
        .oneOf([Yup.ref("password"), null], "Passwords must match"),
    }),
    onSubmit: (values, { resetForm }) => {
      dispatch(fetchCreateUser(values));
      localStorage.setItem('email', values.email);
      resetForm();
    },
  });

  const handleSignUpClick = () => {
    
    navigate("/login"); 
  };

  return (
    <div>
      <div className="flex flex-col items-center p-6 sm:p-10 md:p-20">
      <Metadata
          title="Register-TrovKa"
          description="Welcome to Service-TrovKa Log in"
          author="SainaIna"
          keywords="services, trovka, register"
          thumbnail="https://i.pinimg.com/564x/57/8b/28/578b28b06988fb1f4f9d6539fab87b9a.jpg"
        />
        <div className="flex flex-col items-center w-full max-w-4xl bg-white rounded-2x p-8">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex flex-col md:w-2/2">
              <form
                onSubmit={formik.handleSubmit}
                className="flex flex-col text-xl"
              >
                <div className="flex items-center text-2xl font-Regular text-blue-900">
                  <img
                    src=".//src/assets/logo/trovka-icon.png"
                    alt="Logo"
                    className="w-16 h-16 mt-[5px] rounded-full"
                  />
                  <h1 className="ml-[20px] font-bold">Register Account</h1>
                </div>
                <label htmlFor="email" className="mt-6 text-blue-900">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  {...formik.getFieldProps("email")}
                  className={`mt-2 p-2 bg-white rounded-xl w-full h-12 ${
                    formik.touched.email && formik.errors.email
                      ? "border-red-500"
                      : ""
                  }`}
                  required
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="text-sm text-red-500">
                    {formik.errors.email}
                  </div>
                ) : null}
                
                <label htmlFor="username" className="mt-6 text-blue-900">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  {...formik.getFieldProps("username")}
                  className={`mt-2 p-2 bg-white rounded-xl w-full h-12 ${
                    formik.touched.username && formik.errors.username
                      ? "border-red-500"
                      : ""
                  }`}
                  required
                />
                {formik.touched.username && formik.errors.username ? (
                  <div className="text-sm text-red-500">
                    {formik.errors.username}
                  </div>
                ) : null}

                <div className="flex flex-col md:flex-row gap-4 mt-6">
                  <div className="w-full">
                    <label htmlFor="first_name" className=" text-blue-900">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="first_name"
                      {...formik.getFieldProps("first_name")}
                      className={`mt-2 p-2 bg-white rounded-xl w-[250px] h-12 ${
                        formik.touched.first_name && formik.errors.first_name
                          ? "border-red-500"
                          : ""
                      }`}
                      required
                    />
                    {formik.touched.first_name && formik.errors.first_name ? (
                      <div className="text-sm text-red-500">
                        {formik.errors.first_name}
                      </div>
                    ) : null}
                  </div>
                  <div className="w-full">
                    <label htmlFor="last_name" className="text-blue-900">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="last_name"
                      {...formik.getFieldProps("last_name")}
                      className={`mt-2 p-2 bg-white rounded-xl w-[250px] h-12 ${
                        formik.touched.last_name && formik.errors.last_name
                          ? "border-red-500"
                          : ""
                      }`}
                      required
                    />
                    {formik.touched.last_name && formik.errors.last_name ? (
                      <div className="text-sm text-red-500">
                        {formik.errors.last_name}
                      </div>
                    ) : null}
                  </div>
                </div>
                <label htmlFor="password" className="mt-8 text-blue-900">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  {...formik.getFieldProps("password")}
                  className={`mt-2 p-2 bg-white w-full rounded-xl h-12 ${
                    formik.touched.password && formik.errors.password
                      ? "border-red-500"
                      : ""
                  }`}
                  required
                />
                {formik.touched.password && formik.errors.password ? (
                  <div className="text-sm text-red-500">
                    {formik.errors.password}
                  </div>
                ) : null}
                <label htmlFor="confirmPassword" className="mt-8 text-blue-900">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  {...formik.getFieldProps("confirmPassword")}
                  className={`mt-2 p-2 bg-white w-full rounded-xl h-12 ${
                    formik.touched.confirmPassword &&
                    formik.errors.confirmPassword
                      ? "border-red-500"
                      : ""
                  }`}
                  required
                />
                {formik.touched.confirmPassword &&
                formik.errors.confirmPassword ? (
                  <div className="text-sm text-red-500">
                    {formik.errors.confirmPassword}
                  </div>
                ) : null}
                <div className="flex gap-2 justify-center items-center my-8 text-sm text-center text-black">
                  <div className="flex-1 h-px bg-black" />
                  <div>OR</div>
                  <div className="flex-1 h-px bg-black" />
                </div>
                <div className="flex justify-center items-center px-4 py-2  text-base text-blue-900 rounded-lg border border-black border-opacity-20 w-full cursor-pointer">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/05062ea49b9844fa05e5105ab390ea0697b129eb6853d021333c5f24b47481e3?apiKey=058120d96f274ddc90397edaf277e1fd&"
                    alt="Google"
                    className="w-6 h-6 mr-2"
                  />
                  <button>Sign up with Google</button>
                </div>
                <button
                  type="submit"
                  className="mt-8 py-3 text-white bg-[#FFB600] rounded-xl w-full"
                >
                  Register
                </button>
                <div className="flex justify-center mt-4 text-lg">
                  <p className="text-black">Already have an account?</p>
                  <button
                  onClick={handleSignUpClick}
                  className="ml-2 text-[#FFB600] bg-white"
                >
                  Login
                </button>
                </div>
              </form>
            </div>
            <div className="flex md:w-1/2">
              <img
                src=".//src/assets/image/register.jpg"
                alt="Registration Pic"
                className="ml-[150px] w-[800px] h-[450px] mt-[160px] max-w-sm rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
