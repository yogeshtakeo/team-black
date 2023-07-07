import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./styleLogin.css";
import Footer from "../components/Footer";
import NavBar1 from "../components/NavBar1";

function LoginPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const transferredState = location.state;
  const [errorMessage, setErrorMessage] = useState("");

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().required("Enter Email"),
    password: Yup.string().required("Enter Password"),
  });

  const submitHandler = (values: { email: string; password: string }) => {
    if (values.password === transferredState.confirmPassword) {
      navigate("/HomePage");
    } else {
      setErrorMessage("Enter correct password");
    }
  };

  return (
    <>
      {/* <div className='bg-cover h-100 bg-[url("https://images.pexels.com/photos/4028822/pexels-photo-4028822.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")]  '> */}
      <div className="bg">
        <div className="bg-black/60">
          <NavBar1 />

          <div className="flex grid grid-cols-3">
            <Formik
              initialValues={initialValues}
              onSubmit={submitHandler}
              validationSchema={validationSchema}
            >
              <Form className="bg-slate-100/5 mt-10 ml-10 p-10 w-full rounded-md backdrop-blur-sm">
                <h1 className="flex justify-center text-slate-300 font-bold text-2xl text-slate-100 mb-8">
                  Sign In
                </h1>
                <hr className="h-px my-8 bg-slate-300/30 border-0 dark:bg-gray-700"></hr>
                <div className="flex items-center border-2 border-slate-100/10 hover:border-slate-100/20 py-2 px-3 rounded-md mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    />
                  </svg>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    className="ml-2 l-2 outline-none border-none bg-slate-100/0 text-slate-300"
                  />
                </div>
                <div className="flex mb-8 items-center border-2 border-slate-100/10 hover:border-slate-100/20 py-2 px-3 rounded-md mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="ml-2 l-2 outline-none border-none bg-slate-100/0 text-slate-300"
                  />
                </div>
                {errorMessage && (
                  <p className="text-red-500 mr-auto ">{errorMessage}</p>
                )}

                <button
                  type="submit"
                  className="block w-full mt-4 py-2 rounded-md text-slate-300 mb-10 font-semibold mb-2 bg-slate-100/5 hover:bg-slate-100/10"
                >
                  <Link to="/HomePage">Sign In</Link>
                </button>

                {/* </div> */}
                <p className=" flex text-sm justify-center items-center text-slate-400 mb-4 mt-8  cursor-pointer">
                  Don't have an account?&nbsp;
                  <a
                    href="/register"
                    className="text-lg text-slate-300 hover:text-slate-100 cursor-pointer"
                  >
                    <Link to="/register">Sign Up&nbsp;</Link>
                  </a>{" "}
                  now!
                </p>
              </Form>
            </Formik>
          </div>
          <div className="justify-end items-end">
            <Footer />
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
}

export default LoginPage;
