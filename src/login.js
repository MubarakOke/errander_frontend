import React from "react";
import Logo from "../src/Assets/svg/Logo.svg";

const Login = () => {
  return (
    <div className="px-6 py-4">
      <div className="flex justify-center w-full">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="flex flex-col mt-12">
        <span className="text-[30px] font-bold text-[#595959] mb-4">
          Welcome Back!
        </span>
        <div className="font-bold">
          <span className="text-base text-[#8A8B8B]">
            Don't have an account?
          </span>

          <span className="text-[red]"> Sign up now!</span>
        </div>
      </div>
      <div className="flex flex-col">
        <input
          placeholder={"Email"}
          type={"email"}
          className="outline-none mt-24 border-b-2 p-2"
        />

        <input
          placeholder={"Password"}
          type={"password"}
          className="outline-none border-b-2 p-2 mt-10 "
        />
        <div className="mt-12 flex justify-between items-center">
          <div className="text-[#8A8B8B] flex items-center ">
            <input type={"checkbox"} className="outline-none " />
            <span className="font-normal pl-1 text-[15px]"> Remember me</span>
          </div>
          <div className="font-bold text-[#8A8B8B] text-[15px]">
            Forgot Password?
          </div>
        </div>
      </div>
      <div className="cursor-pointer mt-16 flex items-center justify-center bg-[#0E4E48] rounded-full p-3 text-[#fff] font-">
        Sign in
      </div>
    </div>
  );
};

export default Login;
