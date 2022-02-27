import React from "react";
import Logo from "../../Assets/svg/Logo.svg";
import { Link } from "react-router-dom";
const SignUp = () => {
  return (
    <div className="px-6 py-4">
      <div className="flex justify-center w-full">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="flex flex-col mt-12">
        <span className="text-[30px] font-bold text-[#595959] mb-4">
          Create Account
        </span>
        <div className="font-bold">
          <span className="text-base text-[#8A8B8B]">
            Already have an account?
          </span>

          <Link to="/" className="text-[red]">
            {" "}
            Sign in!
          </Link>
        </div>
      </div>
      <div className="flex flex-col">
        <input
          placeholder={"Email"}
          type={"email"}
          className="outline-none mt-24 border-b-2 p-2"
        />

        <input
          placeholder={"Full Name"}
          type={"text"}
          className="outline-none border-b-2 p-2 mt-10 "
        />
        <input
          placeholder={"Phone Number"}
          type={"text"}
          className="outline-none border-b-2 p-2 mt-10 "
        />
        
      </div>
      <div className="cursor-pointer mt-16 flex items-center justify-center bg-[#0E4E48] rounded-full p-3 text-[#fff] font-">
        Submit
      </div>
    </div>
  );
};

export default SignUp;
