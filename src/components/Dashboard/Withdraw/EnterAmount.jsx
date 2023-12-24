import React, { useContext, useState } from "react";
import { ShopContext } from "../../../utils/contextShop";

export default function EnterAmount({
  amount,
  setAmount,
  handleFront,
  setHistory,
}) {
  const {
    setNotify,
    setNotifyType,
    setNotifymsg,
    profileData,
    setWithdrawModal,
  } = useContext(ShopContext);
  const [inputAmount, setInputAmount] = useState("");

  const moveBy = () => {
    if (inputAmount === "") {
      setNotify(true);
      setNotifyType("warn");
      setNotifymsg("Amount should not be empty");
      return;
    }

    console.log(
      inputAmount,
      profileData?.balances?.main_wallet,
      inputAmount < profileData.balances.main_wallet
    );
    if (parseInt(inputAmount) > parseInt(profileData?.balances?.main_wallet)) {
      setNotify(true);
      setNotifyType("error");
      setNotifymsg("Insufficient amount, try lesser amount");
      return;
    }
    handleFront("choosewithdrawal");
  };

  const enterAmount = (e) => {
    setInputAmount(e.target.value);
    setAmount(e.target.value);
  };

  return (
    <>
      <h3 className="font-ui-semi font-semibold text-lg mt-5 text-[#0D0033] mb-2 text-center ">
        Enter Amount
      </h3>
      <div className="text-[#0D0033] text-center font-thin">
        Enter the amount you wish to withdraw to your bank account.
      </div>
      <div className="flex h-full w-4/5 mt-4 border-border border-ui-border rounded-2xl bg-[#F7F5FF] font-ui-semi text-[14px] text-[#555555]">
        <h4 className="text-center border-r-ui-border bg-[#F7F5FF] border-border font-ui-regular px-5 py-[20px] rounded-l-[20000px]">
          ₦
        </h4>
        <input
          type="number"
          defaultValue={inputAmount}
          onChange={(e) => enterAmount(e)}
          className="flex-1 bg-[#F7F5FF] h-full px-5 py-[24px] w-full overflow-hidden rounded-r-[20000px] outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none "
          placeholder="Enter Amount"
        />
      </div>

      <div
        onClick={() => moveBy()}
        className="bg-[#6E3EFF] text-white px-3 text-xs py-2 rounded-[20px] cursor-pointer mt-5"
      >
        Continue
      </div>
    </>
  );
}
