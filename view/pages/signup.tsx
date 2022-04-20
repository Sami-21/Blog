import { Field, Form, Formik } from "formik";
import { NextPage } from "next";
import Link from "next/link";
import React from "react";
import Return from "../Components/Return";

const signup: NextPage = () => {
  interface UserInfo {
    FullName: string;
    email: string;
    password: string;
    confirmPassword: string;
  }
  const user: UserInfo = {
    FullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  return (
    <div className=" flex flex-col items-center justify-start w-screen h-screen bg-gray-900">
      <Return />
      <Formik
        initialValues={user}
        onSubmit={(values, actions) => {
          console.log({ values, actions });
          actions.setSubmitting(false);
        }}
      >
        <Form className="flex flex-col items-center justify-evenly  mt-40 text-white">
          <h1
            className="mb-16"
            style={{ fontSize: "48px", fontWeight: "bold" }}
          >
            Sign up
          </h1>

          <div className="flex flex-col items-center mb-10">
            <label className="hidden" htmlFor="FullName">
              Full Name
            </label>
            <Field
              type="text"
              id="FullName"
              name="FullName"
              placeholder="FullName"
              required
              className="bg-transparent py-2 border-b-2 placeholder-gray-300 focus:outline-none focus:bg-transparent"
            />
          </div>
          <div className="flex flex-col items-center mb-10">
            <label className="hidden" htmlFor="email">
              Email Address
            </label>
            <Field
              type="text"
              id="email"
              name="email"
              placeholder="email address"
              required
              className="bg-transparent py-2 border-b-2 placeholder-gray-300 focus:outline-none focus:bg-transparent"
            />
          </div>
          <div className="flex flex-col items-center mb-10">
            <label className="hidden" htmlFor="password">
              Password
            </label>
            <Field
              type="password"
              id="password"
              name="password"
              placeholder="password"
              required
              className="bg-transparent py-2 border-b-2 placeholder-white focus:outline-none focus:bg-transparent"
            />
          </div>
          <div className="flex flex-col items-center mb-10">
            <label className="hidden" htmlFor="confirmPassword">
              confirm Password
            </label>
            <Field
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="confirm Password"
              required
              className="bg-transparent py-2 border-b-2 placeholder-white focus:outline-none focus:bg-transparent"
            />
          </div>
          <button
            className="bg-black rounded-full py-2 px-8 mb-4"
            type="submit"
          >
            Sign up
          </button>
          <Link href="/login">already have an account ? </Link>
          <div className="flex flex-col items-center mt-4">
            <span>Or Login with :</span>
            <div className="w-96 h-20 flex justify-between mt-16">
              <span className="h-20 w-20 bg-white rounded-full text-black flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  fill="currentColor"
                  className="bi bi-google"
                  viewBox="0 0 16 16"
                >
                  <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                </svg>
              </span>
              <span className="h-20 w-20 bg-white rounded-full text-black flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  fill="currentColor"
                  className="bi bi-github"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                </svg>
              </span>
              <span className="h-20 w-20 bg-white rounded-full text-black flex justify-center items-center">
                <svg
                  height="50"
                  width="50"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="facebook-f"
                  className="svg-inline--fa fa-facebook-f fa-w-10"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                >
                  <path
                    fill="currentColor"
                    d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                  ></path>
                </svg>
              </span>
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default signup;
