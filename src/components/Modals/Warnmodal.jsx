import React, { useContext } from "react";
import { ShopContext } from "../../utils/contextShop";
import axios from "axios";

export default function Warnmodal({ closeModalWarn, setCloseModalWarn }) {
  const { setNotify, setNotifyType, setNotifymsg, cancelled, setCancelled } =
    useContext(ShopContext);
  const token = localStorage.getItem("token");
  const cancelTx = async () => {
    //check
    if (closeModalWarn.code === "") {
      setNotify(true);
      setNotifyType("warn");
      setNotifymsg("Code needed");
      return;
    }
    const endpoint =
      "https://paybeforeservice.onrender.com/PayBeforeService/v1/payment/cancelPayment";

    try {
      const response = await axios.post(
        endpoint,
        {
          code: closeModalWarn.code,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json", // You may include this header if required by the API
          },
        }
      );
      console.log(response.data, "awaiting data");
      if (!response.data.status || response.status !== 200) {
        console.log("reeedemed modal called");
        setNotify(true);
        setNotifyType("warn");
        setNotifymsg(response.data.message);
        return;
      }
      // setSuccessRedeem(true);

      setNotify(true);
      setNotifyType("success");
      setNotifymsg("transaction cancelled");
      setCancelled(!cancelled);
    } catch (error) {
      console.log(error, "errrrorrs");
      setNotify(true);
      setNotifyType("error");
      setNotifymsg(error.response.data.message);
    }
  };

  const handleContinue = async () => {
    if (closeModalWarn.type === "close_payment") {
      await cancelTx();
      setCloseModalWarn({
        status: false,
        type: "",
        code: "",
      });
    } else {
      setCloseModalWarn({
        status: false,
        type: "",
        code: "",
      });
    }
  };

  const handleCancel = () => {
    setCloseModalWarn({
      status: false,
      type: "",
      code: "",
    });
  };

  return (
    <div className="absolute w-full flex justify-center items-center h-full left-0 top-0 z-50 bg-black/70  z-[99999999]">
      <div className="h-auto flex flex-col justify-center items-center w-1/3 md:w-full md:mx-2 bg-white relative p-5 rounded-md">
        <svg
          onClick={() =>
            setCloseModalWarn({
              status: false,
              type: "",
              code: "",
            })
          }
          className="w-3 h-3 absolute right-8 top-6 cursor-pointer"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="black"
          viewBox="0 0 14 14"
        >
          <path
            stroke="black"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
          />
        </svg>
        <h3 className="font-ui-semi font-semibold text-[24px] mt-5 text-[#0D0033] mb-2 text-center sm:text-[20px]">
          Warning
        </h3>
        <p className="text-[#555555] text-center">
          Are you sure you want to do this ?
        </p>

        <div className="flex justify-center  items-center  gap-3">
          <button
            onClick={() => {
              handleContinue();
            }}
            className="bg-primary px-[64px] md:px-[10%] text-center sm:px-[0px] py-3 mt-4  w-1/2 sm:w-full font-ui-semi text-[16px] text-[#ffffff] rounded-[200000px]"
          >
            Continue
          </button>

          <button
            onClick={() => {
              handleCancel();
            }}
            className="bg-primary px-[64px] md:px-[10px] text-center sm:px-[0px] py-3 mt-4  w-1/2 sm:w-full font-ui-semi text-[16px] text-[#ffffff] rounded-[200000px]"
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
}
