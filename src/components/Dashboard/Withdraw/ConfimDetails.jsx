import React from "react";
import { SearchIcon } from "../../icons/Icons";

export default function ConfimDetails({
  amount,
  bankName,
  accNo,
  accName,
  details,
  handleFront,
}) {
  return (
    <div className="flex flex-col gap-5 w-[100%]">
      <h3 className="font-ui-semi font-semibold text-lg mt-0 text-[#0D0033] mb-2 text-center ">
        Confirm Details
      </h3>
      <div className="text-[#555] text-xs text-center">
        Kindly confirm the details of your withdrawal below
      </div>
      <div className="cursor-pointer border-ui-border hover:bg-[#FFF] border-border rounded-[10px] p-2">
        <div className="">
          <img src="./gtb.svg" className="h-38" alt="" />
        </div>
        <div className="flex justify-between w-100 mt-5">
          <div className=" text-[#555] text-xs flex flex-col gap-3 text-start">
            <div className="">Bank Name</div>
            <div className="">Account Name</div>
            <div className="">Account Number</div>
            <div className="">Narration</div>
            <div className="">Transaction Fee</div>
            <div className="">Reference</div>
            <div className="">Amount</div>
          </div>
          <div className=" font-bold text-[#0D0033] flex flex-col gap-3 text-xs text-end">
            <div className="">{bankName}</div>
            <div className="">{accName}</div>
            <div className="">{accNo}</div>
            <div className="">{details}</div>
            <div className="">₦50</div>
            <div className="">-</div>
            <div className="">#{amount}</div>
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <div
          onClick={() => handleFront("otp")}
          className="bg-[#6E3EFF] text-white px-5 text-xs py-2 rounded-[15px] cursor-pointer"
        >
          Continue
        </div>
      </div>
    </div>
  );
}
