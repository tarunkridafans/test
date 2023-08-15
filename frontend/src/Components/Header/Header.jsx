import React from "react";
import "./Header.css";
import logo from "../../Assets/logo.png";
import { Link } from "react-router-dom";
function Header() {
  return (
    <header className="flex justify-between px-[1rem] border-b-[#BEBCBD] border-b-[1px]">
      <img src={logo} className="h-[80px] " />
      <div className="mr-[2rem] flex justify-center items-center">
        <Link to="/">
          <button className="bg-[#06105A] rounded-[8px] text-white px-[2.5rem] py-[0.5rem] ">
            Login
          </button>
        </Link>
        <Link to="/signUp">
          <button className="rounded-[8px] text-[#06105A] px-[2.25rem] py-[0.5rem] border-[#06105A] border-[1px] ml-[2rem]">
            Sign Up
          </button>
        </Link>
      </div>
    </header>
  );
}

export default Header;
