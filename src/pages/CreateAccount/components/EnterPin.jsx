/** @format */

import { useEffect, useState } from "react";

import OTPInput from "otp-input-react";
import Container from "./Container";

const EnterPin = ({ setStep }) => {
  const [pin, setPin] = useState();
  const [errMsg, setErrMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    setLoading(true);
    localStorage.setItem("userPin", pin);
    setTimeout(() => {
      setLoading(!true);

      setStep((prev) => prev + 1);
    }, 3000);
  };
  return (
    <Container>
      {errMsg && (
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
      )}
      <h3 className="font-ui-semi text-[20px] text-center text-[#0D0033] mb-5">
        Enter your safety pin
      </h3>
      <div className="">
        <div className="flex justify-center">
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
      </div>
      <button
        onClick={() => handleSubmit()}
        className="bg-primary px-[64px] m-auto sm:px-[0px] py-[21px] w-fit sm:w-full font-ui-semi text-[16px] text-[#ffffff] rounded-[200000px]"
      >
        {!loading ? "Continue" : "Loading ..."}
      </button>
    </Container>
  );
};

export default EnterPin;
