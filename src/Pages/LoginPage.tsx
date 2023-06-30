import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FormEventHandler } from "react";
import { useState } from "react";

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
      <div className='h-100 bg-[url("https://images.pexels.com/photos/4028822/pexels-photo-4028822.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")]  '>
        <div className="w-full max-w-xs">
          <Formik
            initialValues={initialValues}
            onSubmit={submitHandler}
            validationSchema={validationSchema}>
            <Form className=" mx-35 my-9 pt-6gap-4 p-20 w-50 h-50 bg-white/9 backdrop-blur-lg rounded drop-shadow-lg">
              <input type="email" name="email" placeholder="Enter Email" />
              <input
                type="password"
                name="password"
                placeholder="Enter Password"
              />
              {errorMessage && (
                <p className="text-red-500 mr-auto ">{errorMessage}</p>
              )}
              <button type="submit">
                <Link to="/HomePage">SIGN IN</Link>
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
