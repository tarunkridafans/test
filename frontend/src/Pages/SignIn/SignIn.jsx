import React, { useState } from "react";
import "./SignIn.css";
import Header from "../../Components/Header/Header";
import { FcGoogle } from "react-icons/fc";
import { BsEyeFill } from "react-icons/bs";
import { BsEyeSlashFill } from "react-icons/bs";
import { Link } from "react-router-dom";

let initialFormState = { email: "", password: "" };
function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState(initialFormState);

  function hideOnClickHandler() {
    setShowPassword((prev) => !prev);
  }

  function formOnChangeHandler(e, bool) {
    let change = {};
    change[e.target.name] = e.target.value;
    setForm((prev) => {
      return { ...prev, ...change };
    });
  }

  function signInClickHandler() {
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
            <h1 className="text-[#333] text-[1.75rem] font-[600] w-full mb-5 ">
              Sign In Page
            </h1>
            <button className="flex justify-center items-center font-[600] text-[#06105A] w-[100%]  mr-2 rounded-[8px] border-[#06105A] border-[1.75px] px-[2rem] py-[0.75rem]">
              <FcGoogle size={25} className="mr-2" /> Continue with Google
            </button>

            <div className="flex items-center w-full box-border mt-6 mb-8">
              <div className="flex-grow h-[1px] bg-[#666666]"></div>
              <span className="text-[#666666] pl-2 pr-2">OR</span>
              <div className="flex-grow h-[1px] bg-[#666666]"></div>
            </div>

            <div className="w-full mb-6">
              <span className="text-[#3C4242] text-[16px]">
                User name or email address
              </span>
              <input
                name="email"
                value={form.email}
                onChange={formOnChangeHandler}
                className=" mt-2 rounded-[8px] border-[#3C4242] border-[1px] w-full p-[0.75rem] "
              />
            </div>

            <div className="w-full mb-8 flex flex-col">
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
                name="password"
                value={form.password}
                onChange={formOnChangeHandler}
                type={showPassword ? "password" : ""}
                className="mt-2 rounded-[8px] border-[#3C4242] border-[1px] w-full p-[0.75rem] "
              />
              <Link className="ml-auto" to="/resetPassword">
                <span className="underline  text-[14px] mt-1">
                  Forgot your Password
                </span>
              </Link>
            </div>

            <button
              onClick={signInClickHandler}
              className="bg-[#06105A] px-[2rem] py-[0.75rem] text-white rounded-[8px] self-start"
            >
              {" "}
              Sign In
            </button>
            <span className="text-[#3C4242] text-[14px] mt-2 self-start">
              Don't have an account?{" "}
              <Link to="/signUp">
                <span className="underline">Sign Up</span>
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
