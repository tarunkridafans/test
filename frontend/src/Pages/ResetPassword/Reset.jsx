import React, { useState } from "react";
import Header from "../../Components/Header/Header";
import { Link } from "react-router-dom";
import "./Reset.css";

let initialFormState = { email: "" };
function Reset() {
  const [form, setForm] = useState(initialFormState);

  function formOnChangeHandler(e) {
    let change = {};
    change[e.target.name] = e.target.value;
    setForm((prev) => {
      return { ...prev, ...change };
    });
  }

  function sendClickHandler() {
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
              Reset Your Password
            </h1>
            <p className="mb-5 text-[#3C4242] text-[14px] w-full">
              Enter your email and we'll send you a link to reset your password
            </p>

            <div className="w-full mb-6">
              <span className="text-[#3C4242] text-[16px]">Email</span>
              <input
                name="email"
                value={form.email}
                onChange={formOnChangeHandler}
                placeholder="designer@gmail.com"
                className=" mt-2 rounded-[8px] border-[#3C4242] border-[1px] w-full p-[0.75rem] "
              />
            </div>

            <button
              onClick={sendClickHandler}
              className="bg-[#06105A] px-[2rem] py-[0.75rem] text-white rounded-[8px] self-start"
            >
              {" "}
              Send
            </button>
            <span className="text-[#3C4242] text-[14px] mt-2 self-start">
              Back to
              <Link to="/">
                <span className="underline ml-2">Log In</span>
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reset;
