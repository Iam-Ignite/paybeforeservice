import React, { useState } from "react";

export default function RedeemModal({ redeemObj, setRedeemObj }) {
  const [inputValue, setInputValue] = useState("");

  const token = localStorage.getItem("token");
  const redeemTx = async () => {
    //check
    if (inputValue === "") return console.log("input needed");
    const endpoint =
      "https://paybeforeservice.onrender.com/PayBeforeService/v1/payment/redeemPayment";

    try {
      const response = await axios.post(
        endpoint,
        {
          redeemCode: inputValue,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json", // You may include this header if required by the API
          },
        }
      );

      if (response.data.status) {
        setData(response.data.data);
      } else {
        console.log("Failed to fetch transaction data");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const formatDate = (dateString) => {
    const options = {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      // minute: '2-digit',
      // second: '2-digit',
      // timeZoneName: 'short',
    };
    const formattedDate = new Date(dateString).toLocaleString("en-US", options);
    return formattedDate;
  };

  return (
    <div
      className={` absolute w-full  justify-center items-center h-full left-0 top-0 z-50 bg-black/70 ${
        redeemObj.open ? "flex" : "hidden"
      }`}
    >
      <div className="h-auto flex flex-col justify-center  w-1/3 bg-white relative p-5 rounded-md">
        <svg
          className="w-3 h-3 absolute right-8 top-6 cursor-pointer"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="black"
          viewBox="0 0 14 14"
          onClick={() => setRedeemObj({ open: false })}
        >
          <path
            stroke="black"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
          />
        </svg>
        <h3 className="font-ui-semi text-[24px] mt-5 text-[#0D0033] mb-2 text-left sm:text-[20px]">
          Redeem Payment
        </h3>
        <p className="text-[#555555] text-">
          Enter the redemption code sent to you to receive this payment in your
          main wallet.
        </p>
        <h4 className="text-[#555] font-medium mt-5  mb-2 text-sm">Details</h4>

        <div className="border p-5 rounded-md mb-4 flex flex-col gap-2">
          <div className="flex text-[#555] justify-between">
            <p className="text-sm">Full Name</p>
            <p className="text-xs font-semibold">
              {redeemObj.data.payment.sender.beneficiary_bank_name}
            </p>
          </div>
          <div className="flex text-[#555] justify-between">
            <p className="text-sm">Date</p>
            <p className="text-xs font-semibold">
              {formatDate(redeemObj.data.createdAt)}
            </p>
          </div>
          <div className="flex text-[#555] justify-between">
            <p className="text-sm">Transaction ID</p>
            <p className="text-xs font-semibold">{redeemObj.data.track_id}</p>
          </div>
          <div className="flex text-[#555] justify-between">
            <p className="text-sm">Note</p>
            <p className="text-xs font-semibold">_</p>
          </div>
          <div className="flex text-[#555] justify-between">
            <p className="text-sm">Amount</p>
            <p className="text-xs font-semibold text-[#6E3EFF]">
              ₦{redeemObj.data.payment.amount}
            </p>
          </div>
        </div>
        <div className="text-[#555] font-semibold mb-2 text-xs">Enter code</div>

        <input
          type="tel"
          name="phone"
          onChange={(e) => setInputValue(e.target.value)}
          className="flex-1 border text-black h-full px-5 py-[24px] w-full overflow-hidden rounded-full outline-primary"
          placeholder="Enter code"
        />
        <button
          className="bg-primary  px-[64px] sm:px-[0px] py-3 mt-4  w-full sm:w-full font-ui-semi text-[16px] text-[#ffffff] rounded-[200000px]"
          onClick={() => redeemTx()}
        >
          Continue
        </button>
      </div>
    </div>
  );
}
