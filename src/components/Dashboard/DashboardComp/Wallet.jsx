/* eslint-disable react/prop-types */

import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../../../utils/contextShop";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";

export default function Wallet({ balances }) {
  const { paymentModal, successRedeem } = useContext(ShopContext);
  const [hideWallet, setHideWallet] = useState(false);

  useEffect(() => {}, [paymentModal, successRedeem]);
  return (
    <div className=" grid md:grid-cols-1 md:gap-5 2xl:grid-cols-3 gap-3">
      {/* Wallet one */}
      <div className="md:w-full py-0 md:py-6 2xl:py-8 flex justify-center items-center bg-[#6E3EFF] rounded-[16px] relative overflow-hidden">
        <div className="flex justify-between items-center w-full px-5">
          {/* Info */}
          <div className="">
            <div className="text-[#FFF] font-normal text-sm ">
              Total Wallet Balance
            </div>
            <div className="text-[#FFF] font-bold text-lg">
              {hideWallet ? "* * * *" : balances?.main_wallet?.toFixed(2)}
            </div>
          </div>
          {/* Eye */}
          <div onClick={() => setHideWallet(!hideWallet)}>
            {hideWallet ? (
              <BsEyeSlashFill color="#fff" size={20} />
            ) : (
              <BsEyeFill size={20} color="#fff" />
            )}
          </div>
        </div>

        <div className="absolute bottom-[-10px] right-[-10px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="92"
            height="43"
            viewBox="0 0 92 43"
            fill="none"
          >
            <rect width="176" height="156" fill="white" fillOpacity="0.1" />
            <rect
              x="14"
              y="13"
              width="176"
              height="156"
              fill="white"
              fillOpacity="0.2"
            />
          </svg>
        </div>
      </div>

      <div className=" px-3 md:py-6 2xl:py-8 flex justify-center items-center bg-[#A23EFF] rounded-[16px] relative overflow-hidden">
        <div className="flex justify-between items-center w-full px-5">
          {/* Info */}
          <div className="">
            <div className="text-[#FFF] font-normal text-sm ">
              Pending Balance
            </div>
            <div className="text-[#FFF] font-bold text-lg">
              {hideWallet ? "* * * *" : balances?.pending_wallet?.toFixed(2)}
            </div>
          </div>
          {/* Eye */}
          <div onClick={() => setHideWallet(!hideWallet)}>
            {hideWallet ? (
              <BsEyeSlashFill color="#fff" size={20} />
            ) : (
              <BsEyeFill size={20} color="#fff" />
            )}
          </div>
        </div>

        <div className="absolute bottom-[-10px] right-[-10px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="92"
            height="43"
            viewBox="0 0 92 43"
            fill="none"
          >
            <rect width="176" height="156" fill="white" fillOpacity="0.1" />
            <rect
              x="14"
              y="13"
              width="176"
              height="156"
              fill="white"
              fillOpacity="0.2"
            />
          </svg>
        </div>
      </div>
      {/* Wallet two */}
      <div className="md:hidden md:w-full  px-3 md:py-6 2xl:py-8 flex justify-center items-center bg-[#FFF] rounded-[16px] relative z-40 overflow-hidden">
        <div className="flex justify-between items-center w-full px-5">
          {/* Info */}
          <div className="">
            <div className="text-[#0D0033] font-normal text-sm ">
              Referral Balance
            </div>
            <div className="text-[#0D0033] font-bold text-lg">
              {hideWallet ? "* * * *" : balances?.refferal_wallet?.toFixed(2)}
            </div>
          </div>
          {/* Eye */}
          <div onClick={() => setHideWallet(!hideWallet)}>
            {hideWallet ? (
              <BsEyeSlashFill color="#000" size={20} />
            ) : (
              <BsEyeFill size={20} color="#000" />
            )}
          </div>
        </div>

        <div className="absolute bottom-[-8px] right-[-8px]">
          <svg
            width="83"
            height="49"
            viewBox="0 0 83 49"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse
              cx="50.505"
              cy="50.5069"
              rx="50.505"
              ry="50.5069"
              fill="#6E3EFF"
              fillOpacity="0.1"
            />
            <ellipse
              cx="78.6785"
              cy="70.3158"
              rx="60.3278"
              ry="60.33"
              fill="#6E3EFF"
              fillOpacity="0.15"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
