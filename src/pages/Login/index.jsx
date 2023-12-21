/** @format */

import { useContext, useState } from "react";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import Container from "../CreateAccount/components/Container";
import { Link, useNavigate } from "react-router-dom";
import { Navigation } from "../../components";
import { ShopContext } from "../../utils/contextShop";
import Notify from "../../components/Notify";

const Login = () => {
  const {
    notify,
    setNotify,
    notifymsg,
    notifyType,
    setNotifyType,
    setNotifymsg,
    tokenActive,
    setTokenActive,
  } = useContext(ShopContext);

  const [hidePassword, setHidePassword] = useState(true);
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleHidePassword = () => {
    setHidePassword(!hidePassword);
  };

  const handleSubmit = async () => {
    // Get email and password from the form
    const email = document.querySelector('input[name="email"]').value;

    // Add your password validation if needed
    if (!password) {
      console.error("Password is required");
      return;
    }

    setLoading(true);

    const endpoint =
      "https://paybeforeservice.onrender.com/PayBeforeService/v1/auth/login";

    const data = {
      email: email,
      password: password,
    };

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      console.log(response, "checking response");

      if (response.ok) {
        console.log("one one");
        const res = await response.json();
        // Login successful
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("token", res.token);
        setTokenActive(true);
        navigate("/dashboard"); // Redirect to the dashboard or any other page
      } else {
        const res = await response.json();
        console.log(res, "one two");
        // Handle error responses
        setLoading(false);
        setNotify(true);
        setNotifyType("warn");
        setNotifymsg(res.message);
        return;
      }
    } catch (error) {
      console.log("three one");

      // setLoading(false);

      // setNotify(true);
      // setNotifyType("warn");
      // setNotifymsg(error);
      // Handle any network or other errors
    }
  };

  return (
    <div className="mx-5 relative z-[9999]">
      <Navigation />
      {notify && <Notify />}
      <div className="my-5">
        <h2 className="text-primary text-[24px] font-ui-bold text-center ">
          SwiftSettle
        </h2>
        {/* <div className="">{notify && notifymsg}</div> */}
      </div>
      <Container>
        <h3 className="mt-[16px] mb-[8px] font-ui-semi text-[14px]">Email</h3>
        <input
          type="email"
          placeholder="Email Address"
          name="email"
          className="px-[25px] py-[21px] bg-base border-border border-ui-border rounded-lg font-ui-semi text-[14px] outline-primary"
        />
        <h3 className="mt-[16px] mb-[8px] font-ui-semi text-[14px]">
          Password
        </h3>
        <div className="flex bg-base py-[16px] px-[24px] gap-5 rounded-lg border-ui-border border-border">
          <input
            type={hidePassword ? "password" : "text"}
            name="password"
            placeholder="Enter password"
            className="bg-inherit inline-block w-full flex-1 outline-none font-ui-semi text-[14px]"
            onChange={(e) => setPassword(e.target.value)}
          />
          <div onClick={handleHidePassword}>
            {hidePassword ? (
              <BsEyeSlashFill color="#808080" size={20} />
            ) : (
              <BsEyeFill size={20} color="#808080" />
            )}
          </div>
        </div>
        <Link
          to="/forget-password"
          className="mt-[16px] mb-[8px] text-primary text-right font-ui-semi text-[14px]"
        >
          Forgot password?
        </Link>
        <button
          onClick={() => handleSubmit()}
          className="bg-primary px-[64px] m-auto sm:px-[0px] py-3 mt-4 w-fit sm:w-full font-ui-semi text-[16px] text-[#ffffff] rounded-3xl"
        >
          {!loading ? "Login" : "Loading ..."}
        </button>{" "}
      </Container>
    </div>
  );
};

export default Login;
