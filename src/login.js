import React from "react";
import Logo from "../src/Assets/svg/Logo.svg";

const Login = () => {
  return (
    <div className="px-6 py-4">
      <div className="flex justify-center w-full">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="flex flex-col mt-12">
        <span className="text-[30px] font-bold text-[#595959]">
          Welcome Back!
        </span>
        <div className="font-bold">
          <span className="text-base text-[#8A8B8B]">
            Don't have an account?
          </span>

          <span className="text-[red]"> Sign up now!</span>
        </div>
      </div>
    </div>
  );
};

export default Login;
