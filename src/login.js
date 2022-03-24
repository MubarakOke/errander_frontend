import React from "react";
import Logo from "../src/Assets/svg/Logo.svg";
import { Link } from "react-router-dom";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";

const Login = () => {
  const [showpassword, setShowpassword] = React.useState(0);
  const [toggleText, setToggleText] = React.useState("password");
  const [passwordIcon, setPasswordIcon] = React.useState(0);

  const handleChange = (e) => {
    if (e.target.value.length > 0) {
      setShowpassword(1);
    } else {
      setShowpassword(0);
    }
  };
  const handleShowPassword = () => {
    if (toggleText === "password") {
      setToggleText("text");
      setPasswordIcon(0);
    } else {
      setToggleText("password");
      setPasswordIcon(1);
    }
  };

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
        {/* -------------------------------email input-------------------------------------- */}
        <div className="relative group mt-10">
          <input
            type="email"
            required
            className="w-full h-10 text-sm peer outline-none border-b-2 p-2"
          />

          <label className="text-[#8A8B8B] pb-4 transform transition-all absolute top-0 left-0 h-full flex items-center pl-1 text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0">
            Email
          </label>
        </div>

        {/* --------------------------------Password input----------------------------------- */}

        <div className="relative group mt-10 flex">
          <input
            onChange={handleChange}
            type={toggleText}
            required
            className="w-full h-10 text-sm peer outline-none border-b-2 p-2"
          />

          <label className="text-[#8A8B8B] pb-4 transform transition-all absolute top-0 left-0 h-full flex items-center pl-1 text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0">
            Password
          </label>
          <div
            className="text-[20px] border-b-2 cursor-pointer"
            onClick={handleShowPassword}
          >
            {passwordIcon ? (
              <AiOutlineEye
                className={`text-[#8A8B8B] text-[20px] ${
                  showpassword ? "" : "hidden"
                }`}
              />
            ) : (
              <AiOutlineEyeInvisible
                className={`text-[#8A8B8B] text-[20px] ${
                  showpassword ? "" : "hidden"
                }`}
              />
            )}
          </div>
        </div>

        {/* <input
          placeholder={"Email"}
          type={"email"}
          className="outline-none mt-24 border-b-2 p-2"
        /> */}

        {/* testing code */}

        {/* testing code */}

        {/* <input
          placeholder={"Password"}
          type={"password"}
          className="outline-none border-b-2 p-2 mt-10 "
        /> */}

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
