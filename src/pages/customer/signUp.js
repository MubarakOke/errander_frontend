import React, { useState } from "react";
import Logo from "../../Assets/svg/Logo.svg";
import { Link } from "react-router-dom";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { CustomerSignupAction } from "../../Redux/actionCreators/customers/customerActions";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const notify = () => toast("password dont match");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setconfirm_Password] = useState("");
  const [showError, setShowError] = useState("hidden");

  const handleSubmit = async (e) => {
    if (confirm_password !== password) {
      setShowError("");
      return;
    }
    e.preventDefault();
    let formData = new FormData();
    formData.append("first_name", firstName);
    formData.append("last_name", lastName);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("password", password);

    dispatch(CustomerSignupAction(navigate, formData));
  };

  const handleChange = (e) => {
    switch (e.target.placeholder) {
      case "First Name":
        setFirstName(e.target.value);
        break;
      case "Last Name":
        setLastName(e.target.value);
        break;
      case "Email":
        setEmail(e.target.value);
        break;
      case "Phone Number":
        setPhone(e.target.value);
        break;
      case "Password":
        setPassword(e.target.value);
        break;
      case "Confirm password":
        setconfirm_Password(e.target.value);
        break;
      default:
        break;
    }
  };

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
          placeholder={"First Name"}
          type={"text"}
          className="outline-none border-b-2 p-2 mt-6"
          onChange={handleChange}
        />
        <input
          placeholder={"Last Name"}
          type={"text"}
          className="outline-none border-b-2 p-2 mt-6"
          onChange={handleChange}
        />
        <input
          placeholder={"Email"}
          type={"email"}
          className="outline-none mt-6 border-b-2 p-2"
          onChange={handleChange}
        />
        <input
          placeholder={"Phone Number"}
          type={"phone"}
          className="outline-none border-b-2 p-2 mt-6 "
          onChange={handleChange}
        />
        <div className={`text-[red] mt-6 ${showError}`}>
          Password doesnt match!
        </div>
        <input
          placeholder={"Password"}
          type={"password"}
          className="outline-none border-b-2 p-2 mt-6 "
          onChange={handleChange}
        />
        <input
          placeholder={"Confirm password"}
          type={"password"}
          className="outline-none border-b-2 p-2 mt-6 "
          onChange={handleChange}
        />
      </div>
      <Toaster />
      <div
        onClick={handleSubmit}
        className="cursor-pointer mt-11 flex items-center justify-center bg-[#0E4E48] rounded-full p-3 text-[#fff] font-"
      >
        Submit
      </div>
    </div>
  );
};

export default SignUp;
