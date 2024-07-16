import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  fetchLogin,
  logout,
  selectError,
  selectUsers,
} from "../../redux/feature/user/userSlice";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginStatus = useSelector(selectUsers);
  const loginError = useSelector(selectError);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      dispatch(fetchLogin(values));
    },
  });

  useEffect(() => {
    console.log("Login status:", loginStatus);
    if (loginStatus === "success") {
      navigate("/");
    }
  }, [loginStatus, navigate]);

  const handleSignUpClick = () => {
    
    navigate("/choose-register"); 
  };

  return (
    <div className="flex flex-col items-center sm:p-1 md:p-1">
            <div>
        <Metadata
          title="Login-TrovKa"
          description="Welcome to Service-TrovKa Log in"
          author="SainaIna"
          keywords="services, trovka, login"
          thumbnail="https://i.pinimg.com/736x/dc/80/c2/dc80c2429624a80720b699fb2d86ae6b.jpg"
        />
      </div>
      <div className="flex flex-col items-center w-full h-[690px] max-w-4xl mt-[100px] rounded-2xl bg-white">
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
                <h1 className="ml-[20px] font-bold">Login Account</h1>
              </div>
              <p className="mt-[20px] text-black">Hi, Welcome back!</p>

              <label htmlFor="email" className="mt-6 text-blue-900">
                Email
              </label>
              <input
                type="email"
                id="email"
                {...formik.getFieldProps("email")}
                className={`mt-2 p-2 bg-white rounded-xl w-[500px] h-12 ${
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
              <label htmlFor="password" className="mt-8 text-blue-900">
                Password
              </label>
              <input
                type="password"
                id="password"
                {...formik.getFieldProps("password")}
                className={`mt-2 p-2 bg-white w-[500px] rounded-xl h-12 ${
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
              {loginError && (
                <div className="mt-4 text-red-500">
                  {typeof loginError === "string"
                    ? loginError
                    : loginError.message || "An error occurred"}
                </div>
              )}
              {loginStatus === "loading" && (
                <div className="mt-4 text-blue-900">Logging in...</div>
              )}
              {loginStatus === "success" && (
                <div className="mt-4 text-green-500">Login successful!</div>
              )}
              <div className="flex items-center justify-between mt-8 text-lg">
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="rememberMe"
                    {...formik.getFieldProps("rememberMe")}
                    className="h-5 w-5 rounded-sm"
                  />
                  <label htmlFor="rememberMe" className=" text-black">
                    Remember Me
                  </label>
                </div>
                
              </div>
              <button
                type="submit"
                className="mt-8 py-3 text-white bg-[#FFB600] rounded-xl w-full"
              >
                Login
              </button>

              <div className="flex justify-center mt-8 text-lg">
                <p className="text-black">Don't have an account yet?</p>
                <button
                  onClick={handleSignUpClick}
                  className="ml-2 text-[#FFB600] bg-white"
                >
                  Sign Up here
                </button>
              </div>
            </form>
          </div>
          <div className="flex justify-center items-center md:w-1/2">
            <img
              src=".//src/assets/image/register.jpg"
              alt="Login Pic"
              className="ml-[150px] w-[600px] h-[450px] mt-[20px] max-w-sm rounded-xl"
            />
          </div>
        </div>
        {/* <button
          onClick={() => dispatch(logout())}
          className="mt-4 text-black hover:text-blue-700"
        >
          Logout
        </button> */}
      </div>
    </div>
  );
};

export default LoginPage;
