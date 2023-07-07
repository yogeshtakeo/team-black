import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
import Footer from "../../components/Footer";
import NavBar1 from "../../components/NavBar1";
import { UserContext } from "../../Context/DataContext";

function RegisterPage() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [errorEmailMessage, setErrorEmailMessage] = useState("");
  const [errorPasswordMessage, setErrorPasswordMessage] = useState("");
  const [errorIncorrectPasswordMessage, setErrorIncorrectPasswordMessage] = useState("");

  const { user, setUserInput } = useContext(UserContext);

  const navigate = useNavigate();
  const HandleEmail = () => {
    const regExp =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email === "") {
        event.preventDefault();
      setErrorEmailMessage("Fill the email field");
    } else if (regExp.test(email)) {
        event.preventDefault(); 
    } else if (!regExp.test(email)) {
        event.preventDefault();
      setErrorEmailMessage("Enter valid email");
    }
  };
  function HandlePassword() {
    const regExp =
      /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
    if (password === "" && password !== confirmPassword) {
        event.preventDefault();
      setErrorPasswordMessage("Please Enter Password");
    } else if (regExp.test(password) && password === confirmPassword) {
      navigate("/login", { state: { confirmPassword } });
    } else if (!regExp.test(password)) {
        event.preventDefault();
      setErrorPasswordMessage("Please enter valid Password");
    } else if (regExp.test(password) && password !== confirmPassword) {
        event.preventDefault();
      setErrorIncorrectPasswordMessage("password didn't match");
    }
  }
  function HandleRegister() {
    event.preventDefault();
    setUserInput({userDetail: { userName: {name}, email: {email}, password: {password} }});
  
    console.log({user})
    HandleEmail();
    HandlePassword();

  }

 

  return (
    <>
      <div className="bg">
        <div className="h-full bg-black/60">
          <div className="z-10 fixed top-0 left-0 right-0 z-index-100 w-full"><NavBar1 /></div>
          <div className=" grid grid-cols-3 pt-16">
            <form className="bg-slate-100/5 mt-10 ml-10 p-10 w-full rounded-md backdrop-blur-sm">
              <h1 className="flex justify-center text-slate-300 font-bold text-2xl text-slate-100 mb-8">
                Create Account
              </h1>
              <hr className="h-px my-8 bg-slate-300/30 border-0 dark:bg-gray-700"></hr>
              
              <div className="flex items-center border-2 border-slate-100/10 hover:border-slate-100/20 py-2 px-3 rounded-md mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
                <input
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  className="pl-2 outline-none border-none bg-slate-100/0 text-slate-300"
                  type="name"
                  name="name"
                  id="name"
                  placeholder="Full Name"
                />
              </div>
              
              <div className="flex items-center border-2 border-slate-100/10 hover:border-slate-100/20 py-2 px-3 rounded-md mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
                <input
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="pl-2 outline-none border-none bg-slate-100/0 text-slate-300"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email Address"
                />
              </div>
              {errorEmailMessage && (
                <p className="text-red-500 mr-auto ">{errorEmailMessage}</p>
              )}
<label className="text-gray-400 hover:text-slate-200/70 text-xs">Password must be 8+ characters, 1 uppercase, 1 lowercase, 1 digit/special character and no whitespace.</label>
     
              <div className="flex items-center border-2 border-slate-100/10 hover:border-slate-100/20 py-2 px-3 rounded-md my-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor">
                  <path
                    fill-rule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                <input
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  className="pl-2 outline-none border-none bg-slate-100/0 text-slate-300"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                />
                
              </div>
              {errorPasswordMessage && (
                <p className="text-red-500 mr-auto ">{errorPasswordMessage}</p>
              )}
              <div className="flex mb-8 items-center border-2 border-slate-100/10 hover:border-slate-100/20 py-2 px-3 rounded-md mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor">
                  <path
                    fill-rule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                <input
                  value={confirmPassword}
                  onChange={(event) => setConfirmPassword(event.target.value)}
                  className="pl-2 outline-none border-none bg-slate-100/0 text-slate-300"
                  type="password"
                  name="password2"
                  id="password2"
                  placeholder="Re-enter Password"
                />
              </div>
              {errorIncorrectPasswordMessage && (
                <p className="text-red-500 mr-auto ">
                  {errorIncorrectPasswordMessage}
                </p>
              )}
              <button
                onClick={HandleRegister}
                type="submit"
                className="block w-full mt-4 py-2 rounded-md text-slate-300 mb-10 font-semibold mb-2 bg-slate-100/5 hover:bg-slate-100/10">
                Sign Up
              </button>
            </form>
          </div>
          <div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default RegisterPage;
