import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";

function Login() {
  const [isSignInForm, setSignInForm] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = (e) => {
    e.preventDefault();
    const emailData = email?.current?.value;
    const passwordData = password?.current?.value;
    const message = checkValidData(emailData, passwordData);
    if (message) setErrorMessage(message);
    else console.log("Valid Data");
  };

  const toggleSignInform = () => {
    setSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/a927b1ee-784d-494a-aa80-cf7a062d2523/web/IN-en-20250714-TRIFECTA-perspective_5acb7337-c372-45ec-ae12-ddb110e6ad78_large.jpg"
          alt="body-background"
        />
      </div>

      <form className="absolute p-12 bg-black  bg-opacity-80 w-3/12 my-32 mx-auto right-0 left-0 border rounded-lg border-black text-gray-200">
        <h1 className="font-bold text-3xl py-4">
          {" "}
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="bg-black border rounded-md p-4 my-4 w-full px-4 border-gray-100"
          />
        )}
        <input
          type="text"
          ref={email}
          placeholder="Email Address"
          className="bg-black border rounded-md p-4 my-4 w-full px-4 border-gray-100"
        />
        <input
          type="text"
          ref={password}
          placeholder="Password"
          className="bg-black p-4 my-4 w-full px-4 border rounded-md border-gray-100"
        />
        {errorMessage ? <p className="text-red-700 font-bold text-lg py-2">{errorMessage}</p> : ""}
        <button
          className="p-3 my-6 bg-red-700 w-full"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        {isSignInForm && (
          <div>
            {" "}
            <p className="text-center text-gray-400"> OR</p>{" "}
            <button className="p-3 my-6 bg-black  w-full border rounded-md border-gray-100">
              Use a sign-in code
            </button>
            <div className="text-center text-blue-500 underline">
              <a href="#">Forgot password?</a>
            </div>
            <input type="checkbox" className="my-5" /> Remember me
          </div>
        )}
        {isSignInForm ? (
          <div onClick={toggleSignInform} className="cursor-pointer">
            <span className="text-gray-300">New to Netflix? </span>
            <a href="#">Sign up now.</a>
          </div>
        ) : (
          <div onClick={toggleSignInform} className="cursor-pointer">
            <span className="text-gray-300">Already a registered? </span>
            <a href="#">Sign in now.</a>
          </div>
        )}
        <p className="text-sm text-gray-500 my-3">
          {" "}
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
        </p>
        <a href="#" className="text-blue-500 underline">
          Learn more
        </a>
      </form>
    </div>
  );
}

export default Login;
