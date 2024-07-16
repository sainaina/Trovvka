import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { fetchVerifyEmail, selectUser } from "../../redux/feature/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { unwrapResult } from "@reduxjs/toolkit"; // Ensure this import is included

const VerifyCode = () => {
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userVerificationResponse = useSelector(selectUser);

  useEffect(() => {
    const savedEmail = localStorage.getItem("email");
    if (savedEmail) {
      setEmail(savedEmail);
    } else {
      navigate("/register");
    }
  }, [navigate]);

  const formik = useFormik({
    initialValues: {
      code: "",
    },
    validationSchema: Yup.object({
      code: Yup.string().required("Required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      const verificationData = {
        email,
        otp_code: values.code,
      };

      try {
        const resultAction = await dispatch(fetchVerifyEmail(verificationData));
        const originalPromiseResult = unwrapResult(resultAction);

        console.log("Verification successful:", originalPromiseResult);
        navigate("/"); // Navigate to home page
        resetForm();
      } catch (rejectedValueOrSerializedError) {
        console.error("Verification failed:", rejectedValueOrSerializedError);
        // Optionally, you can set a specific error message to display in the UI
      }
    },
  });

  return (
    <div className="flex flex-col justify-center items-center p-6 sm:p-10 md:p-20">
      <div className="flex flex-col items-center w-[500px] max-w-4xl bg-white rounded-2x p-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex flex-col md:w-2/2">
            <form
              onSubmit={formik.handleSubmit}
              className="flex flex-col text-xl"
            >
              <div className="flex items-center text-2xl font-Regular text-blue-900">
                <img
                  src=".//src/assets/logo/logo.png"
                  alt="Logo"
                  className="w-16 h-16 mt-[5px] rounded-full"
                />
                <h1 className="ml-[20px] font-bold">Verify Account</h1>
              </div>
              <p className="mt-4 text-blue-900">
                A verification code has been sent to {email}. Please enter it below.
              </p>
              <label htmlFor="code" className="mt-6 text-blue-900">
                Verification Code
              </label>
              <input
                type="text"
                id="code"
                {...formik.getFieldProps("code")}
                className={`mt-2 p-2 bg-white rounded-xl w-full h-12 ${
                  formik.touched.code && formik.errors.code
                    ? "border-red-500"
                    : ""
                }`}
                required
              />
              {formik.touched.code && formik.errors.code ? (
                <div className="text-sm text-red-500">
                  {formik.errors.code}
                </div>
              ) : null}
              <button
                type="submit"
                className="mt-8 py-3 text-white bg-[#FFB600] rounded-xl w-full"
              >
                Verify
              </button>
              <div className="flex justify-center mt-4 text-lg">
                <p className="text-black">Didn't receive the code?</p>
                <a href="#" className="ml-2 text-[#FFB600]">
                  Resend
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyCode;
