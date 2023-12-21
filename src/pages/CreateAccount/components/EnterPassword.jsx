/** @format */

import { useState } from "react";
import { BsEyeFill, BsEyeSlashFill, BsCheckCircleFill } from "react-icons/bs";
import Container from "./Container";
import { BiX } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const EnterPassword = () => {
  const [hidePassword, setHidePassword] = useState(true);
  const [loading, setLoading] = useState(false);
  const [hideConfirmPwd, setHideConfirmPwd] = useState(true);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  let navigate = useNavigate();

  const handleHidePassword = () => {
    setHidePassword(!hidePassword);
  };

  const handleHideConfirmPwd = () => {
    setHideConfirmPwd(!hideConfirmPwd);
  };

  const handlePassword = (ev) => {
    const newPassword = ev.target.value;
    setPassword(newPassword);
    validatePassword(newPassword, confirmPassword);
  };

  const handleConfirmPassword = (ev) => {
    const newConfirmPassword = ev.target.value;
    setConfirmPassword(newConfirmPassword);
    validatePassword(password, newConfirmPassword);
  };

  const validatePassword = (newPassword, newConfirmPassword) => {
    // Implement your password validation logic here
    const isValid =
      newPassword.length >= 8 &&
      /[0-9]/.test(newPassword) &&
      /[A-Z]/.test(newPassword) &&
      /[!@#$%^&*()_+]/.test(newPassword);

    console.log("Password:", newPassword);
    console.log("Confirm Password:", newConfirmPassword);
    console.log(
      "Is Password Valid:",
      isValid && newPassword === newConfirmPassword
    );

    setIsPasswordValid(isValid && newPassword === newConfirmPassword);
  };

  const handleSubmit = async () => {
    const email = localStorage.getItem("email");
    const userName = localStorage.getItem("userName");
    const userGender = localStorage.getItem("userGender");
    const userDateOfBirth = localStorage.getItem("userDateOfBirth");
    const ref = localStorage.getItem("ref");
    setLoading(true);
    let endpoint = `https://paybeforeservice.onrender.com/PayBeforeService/v1/auth/signup/`;

    if (ref !== null) {
      endpoint += `?ref=${ref}`;
    }

    const data = {
      username: userName,
      email: email,
      password: password,
      gender: userGender,
      date_of_birth: userDateOfBirth,
    };

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        localStorage.clear();
        // Handle error responses
        navigate("/login");

        return;
      }
      setLoading(!true);

      const responseData = await response.json();
      console.log("Response:", responseData);

      // Handle the response data as needed
    } catch (error) {
      console.error("Error:", error.message);
      setLoading(!true);

      // Handle any network or other errors
    }
  };

  return (
    <Container>
      <h3 className="font-ui-semi text-[20px] text-center text-[#0D0033] mb-5">
        Create Password
      </h3>
      <div className="flex bg-base py-[16px] px-[24px] gap-5 rounded-[200000px] border-ui-border border-border">
        <input
          type={hidePassword ? "password" : "text"}
          name="password"
          placeholder="Enter password"
          className="bg-inherit inline-block w-full flex-1 outline-none font-ui-semi text-[14px]"
          onChange={(e) => handlePassword(e)}
        />
        <div onClick={handleHidePassword}>
          {hidePassword ? (
            <BsEyeSlashFill color="#808080" size={20} />
          ) : (
            <BsEyeFill size={20} color="#808080" />
          )}
        </div>
      </div>
      <h3 className="mt-[16px] mb-[8px] font-ui-semi text-[14px]">
        Confirm Password
      </h3>
      <div className="flex bg-base py-[16px] px-[24px] gap-5 rounded-[200000px] border-ui-border border-border">
        <input
          type={hideConfirmPwd ? "password" : "text"}
          name="password"
          placeholder="Enter password"
          className="bg-inherit inline-block w-full flex-1 outline-none font-ui-semi text-[14px]"
          onChange={(e) => handleConfirmPassword(e)}
        />
        <div onClick={handleHideConfirmPwd}>
          {hideConfirmPwd ? (
            <BsEyeSlashFill color="#808080" size={20} />
          ) : (
            <BsEyeFill size={20} color="#808080" />
          )}
        </div>
      </div>
      <div className="mt-2 sm:mb-5">
        <div
          className={`flex items-start gap-2 mb-2 ${
            isPasswordValid ? "text-success" : "text-error"
          }`}
        >
          {isPasswordValid ? (
            <BsCheckCircleFill color="green" />
          ) : (
            <BiX color="red" />
          )}

          <p className="text-[14px] text-body-text">
            {isPasswordValid
              ? "Password is valid"
              : "Password must be 8 characters or more and include a symbol, number, and upper-case letter"}
          </p>
        </div>
      </div>
      <button
        onClick={() => handleSubmit()}
        className="bg-primary px-[64px] m-auto sm:px-[0px] py-[21px] w-fit sm:w-full font-ui-semi text-[16px] text-[#ffffff] rounded-[200000px]"
      >
        {!loading ? "Continue" : "Loading ..."}
      </button>{" "}
    </Container>
  );
};

export default EnterPassword;
