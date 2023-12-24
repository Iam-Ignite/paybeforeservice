import React, { useContext, useState } from "react";
import OTPInput from "otp-input-react";
import { ShopContext } from "../../../utils/contextShop";

export default function Otp({
  amount,
  bankName,
  bankCode,
  accNo,
  accName,
  details,
  handleFront,
  setStatus,
}) {
  const {
    setNotify,
    setNotifyType,
    setNotifymsg,
    profileData,
    setWithdrawModal,
  } = useContext(ShopContext);
  const [pin, setPin] = useState();
  const [errMsg, setErrMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const token = localStorage.getItem("token");

  const handleSubmit = async () => {
    setLoading(true);

    //check empty pin
    if (pin === undefined) {
      setLoading(false);
      setLoading(false);
      setNotify(true);
      setNotifyType("warn");
      setNotifymsg("Enter pin to continue");
      return;
    }
    console.log(typeof profileData.pin, typeof pin);
    //checkPin
    if (profileData?.pin !== parseInt(pin)) {
      setLoading(false);
      setNotify(true);
      setNotifyType("warn");
      setNotifymsg("wrong pin");
      return;
    }
    let endpoint = `https://paybeforeservice.onrender.com/PayBeforeService/v1/user/withdraw`;

    const data = {
      amount: amount,
      bank_code: bankCode,
      bank_name: bankName,
      account_number: accNo,
      account_name: accName,
      currency: "NGN",
      description: details,
    };

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      console.log(await response.json(), "checks ooo");
      if (response.ok) {
        setLoading(false);
        setStatus(true);
        handleFront("complete");
        return;
      } else {
        // setLoading(false);
        // setNotify(true);
        // setNotifyType("warn");
        // setNotifymsg(response.data.message);
        setLoading(false);
        setStatus(false);
        handleFront("complete");
      }
      // Handle the response data as needed
    } catch (error) {
      console.error("Error:", error.message);
      setLoading(!false);
      // Handle any network or other errors
    }
  };

  return (
    <>
      {/* {errMsg && (
        <div
          id="toast-warning"
          className="flex absolute top-10 right-10 items-center w-full max-w-xs p-4 text-white bg-white rounded-lg shadow dark:text-gray-400 dark:bg-[#6E3EFF]"
          role="alert"
        >
          <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8">
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM10 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm1-4a1 1 0 0 1-2 0V6a1 1 0 0 1 2 0v5Z" />
            </svg>
            <span className="sr-only">Warning icon</span>
          </div>
          <div className="ms-3 text-sm font-normal text-white">{errMsg}</div>
          <button
            type="button"
            className="ms-auto -mx-1.5 -my-1.5 text-white rounded-lg focus:ring-2 0 p-1.5 inline-flex items-center justify-center h-8 w-8"
            data-dismiss-target="#toast-warning"
            aria-label="Close"
          >
            <span className="sr-only">Close</span>
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
          </button>
        </div>
      )} */}
      <h3 className="font-ui-semi text-[20px] text-center text-[#0D0033] mb-2">
        Authorize Payment
      </h3>
      <div className="text-[#555] text-xs text-center">
        Enter your 4 digit secure PIN to complete this transaction
      </div>
      <div className="">
        <div className="flex justify-center ">
          <OTPInput
            value={pin}
            onChange={setPin}
            autoFocus
            OTPLength={4}
            otpType="number"
            disabled={false}
            inputStyles={{
              backgroundColor: "#F7F7F7",
              height: "50px",
              width: "50px",
              marginRight: "0px",
              color: "#555",
            }}
            style={{
              justifyContent: "center",
              alignItems: "center",
              width: "fit-content",
              gap: "20px",
            }}
            className="otp"
            inputClassName="otp-input"
          />
        </div>
        {/* <h4 className="font-ui-semi text-[14px] text-center mt-[10px] text-[#0D0033] underline">
          Change Number
        </h4> */}
      </div>
      <button
        onClick={() => handleSubmit()}
        className="bg-[#6E3EFF] text-white px-5 text-xs py-2 rounded-[15px] cursor-pointer mt-2"
      >
        {!loading ? "Pin" : "Loading ..."}
      </button>{" "}
      {/* <button
        // onClick={() => resendOtp()}
        className="text-primary text-center underline text-[14px] font-ui-semi sm:mt-5"
      >
        Resend
      </button> */}
    </>
  );
}
