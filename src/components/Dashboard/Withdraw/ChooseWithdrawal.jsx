import React from "react";

export default function ChooseWithdrawal({ handleFront }) {
  return (
    <div className="flex flex-col gap-5">
      <h3 className="font-ui-semi font-semibold text-lg mt-0 text-[#0D0033] mb-2 text-center ">
        Choose Bank
      </h3>
      <div
        onClick={() => handleFront("bankDetails")}
        className="flex items-center justify-center gap-3 cursor-pointer border-ui-border hover:bg-[#F7F5FF] border-border rounded-[40px] pr-20 pl-3 py-2"
      >
        <div className="">
          <img src="./bank.svg" alt="" />
        </div>
        <div className="">
          <div className="font-bold text-[#0D0033] text-sm">
            New Bank Account
          </div>
          <div className="text-[#555] text-xs">Send to a new account</div>
        </div>
      </div>
      <div
        onClick={() => handleFront("savedAccounts")}
        className="flex items-center justify-center gap-3 cursor-pointer border-ui-border hover:bg-[#F7F5FF] border-border rounded-[40px] pr-20 pl-3 py-2"
      >
        <div className="">
          <img src="./beneficiaries.svg" alt="" />
        </div>
        <div className="">
          <div className="font-bold text-[#0D0033] text-sm">Beneficiaries</div>
          <div className="text-[#555] text-xs">Send to a saved account</div>
        </div>
      </div>
    </div>
  );
}
