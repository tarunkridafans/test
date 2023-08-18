import React, { useState } from "react";
import "./SignUp.css";
import Header from "../../Components/Header/Header";
import { FcGoogle } from "react-icons/fc";
import { BsEyeFill } from "react-icons/bs";
import { BsEyeSlashFill } from "react-icons/bs";
import { Link } from "react-router-dom";

let initialFormState = { email: "", password: "", agree: false };
function SignUP() {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState(initialFormState);

  function hideOnClickHandler() {
    setShowPassword((prev) => !prev);
  }

  function formOnChangeHandler(e, bool) {
    let change = {};
    if (e.target.name == "agree") {
      setForm((prev) => {
        return { ...prev, agree: !prev.agree };
      });
      return;
    }
    change[e.target.name] = e.target.value;
    setForm((prev) => {
      return { ...prev, ...change };
    });
  }

  function validateEmail() {}

  function validatePassword() {}

  function signUpClickHandler() {
    console.log("form", form);
    setForm(initialFormState);
  }

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-grow h-auto">
        <div className="w-[45%] bg-[#D9D9D9]"></div>
        <div className="w-[55%] flex justify-center">
          <div className="flex flex-col pt-[2rem] items-center w-[80%]">
            <h1 className="text-[#333] text-[1.75rem] font-[600] w-full">
              Sign Up
            </h1>
            <p className="mb-5 text-[#3C4242] text-[14px] w-full">
              Sign up for free to access any of our products
            </p>
            <button className="flex justify-center items-center font-[600] text-[#06105A] w-[100%]  mr-2 rounded-[8px] border-[#06105A] border-[1.75px] px-[2rem] py-[0.75rem]">
              <FcGoogle size={25} className="mr-2" /> Continue with Google
            </button>

            <div className="flex items-center w-full box-border mt-6 mb-8">
              <div className="flex-grow h-[1px] bg-[#666666]"></div>
              <span className="text-[#666666] pl-2 pr-2">OR</span>
              <div className="flex-grow h-[1px] bg-[#666666]"></div>
            </div>

            <div className="w-full mb-6">
              <span className="text-[#3C4242] text-[16px]">Email Address</span>
              <input
                value={form.email}
                name="email"
                onChange={formOnChangeHandler}
                placeholder="designer@gmail.com"
                className=" mt-2 rounded-[8px] border-[#3C4242] border-[1px] w-full p-[0.75rem] "
              />
            </div>

            <div className="w-full mb-6 flex flex-col">
              <div className="flex justify-between">
                <span className="text-[#3C4242] text-[16px]">Password</span>
                <span
                  className="flex items-center mb-[-5px] cursor-pointer"
                  onClick={hideOnClickHandler}
                >
                  <span className="mr-2">
                    {" "}
                    {showPassword ? <BsEyeFill /> : <BsEyeSlashFill />}
                  </span>{" "}
                  {showPassword ? "Show" : "Hide"}
                </span>
              </div>
              <input
                value={form.password}
                onChange={formOnChangeHandler}
                name="password"
                type={showPassword ? "password" : ""}
                className="mt-2 rounded-[8px] border-[#3C4242] border-[1px] w-full p-[0.75rem] "
              />

              <span className="text-[#807D7E] text-[14px] mt-1">
                Use 8 or more characters with a mix of letters, numbers &
                symbols
              </span>
            </div>

            <div className="flex items-center text-[#807D7E] text-[14px] w-full mb-10">
              <input
                name="agree"
                value={form.agree}
                onChange={(e) => formOnChangeHandler(e, !form.agree)}
                className="mr-2"
                type="checkbox"
              />
              <label>Agree to our Terms of use and Privacy Policy </label>
            </div>

            <button
              onClick={signUpClickHandler}
              className="bg-[#06105A] px-[2rem] py-[0.75rem] text-white rounded-[8px] self-start"
            >
              {" "}
              Sign Up
            </button>
            <span className="text-[#3C4242] text-[14px] mt-2 self-start">
              Already have an account?{" "}
              <Link to="/">
                <span className="underline">Log In</span>
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUP;
