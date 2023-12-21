/** @format */

import { useContext, useState } from "react";
import Reftable from "../../components/Dashboard/Refcomp/Reftable";
import TransTable from "../../components/Transaction/TransTable";
import { FilterIcon, SearchIcon } from "../../components/icons/Icons";
import { ShopContext } from "../../utils/contextShop";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";

export default function Referrals() {
  const { profileData } = useContext(ShopContext);
  const [hideWallet, setHideWallet] = useState(false);

  return (
    <div className="h-auto pb-24">
      <div className="w-2/6 md:w-4/5 m-4 mt-8 border  px-3 md:py-6 2xl:py-8 flex justify-center items-center bg-[#FFF] rounded-[16px] relative z-40 overflow-hidden">
        <div className="flex justify-between items-center w-full px-5">
          {/* Info */}
          <div className="">
            <div className="text-[#0D0033] font-normal text-sm ">
              Referral Balance
            </div>
            <div className="text-[#0D0033] font-bold text-lg">
              ₦
              {hideWallet
                ? "* * * *"
                : profileData?.balances?.refferal_wallet?.toFixed(2)}
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
      <div className="flex justify-between md:grid p-5 mt-6">
        <h1 className="text-black">Referrals</h1>
        <div className="flex items-center md:grid gap-4 md:gap-3 ">
          <div className="bg-[#FFF] border items-center md:w-[85%] rounded-md p-2 px-3 flex">
            <input
              type="search"
              placeholder="Search"
              className="bg-transparent outline-none text-sm px-2 w-full  text-[#323232]"
            />
            <label htmlFor="date">
              <SearchIcon />
            </label>
          </div>
          <div className="flex gap-3 ">
            <div className="bg-[#FFF] border rounded-md p-2 px-3 flex md:w-[30%]">
              <input
                type="Date"
                className="bg-transparent outline-none text-xs px-2 w-full  text-[#707070]"
              />
              {/* <label htmlFor="date">
            <DateIcon/>
           </label> */}
            </div>
            <div className="bg-[#FFF] border rounded-md p-2 px-3 flex md:w-[30%]">
              <input
                type="date"
                id="date1"
                className="bg-transparent outline-none text-xs px-2 w-full  text-[#707070]"
              />
              {/* <label htmlFor="date1">
            <DateIcon/>
           </label> */}
            </div>
            <button className="bg-[#6E3EFF] border items-center text-xs justify-center rounded-md p-2 px-3 flex">
              <label htmlFor="date1">
                <FilterIcon />
              </label>
              Filter
            </button>
          </div>
        </div>
      </div>
      <Reftable />
    </div>
  );
}
