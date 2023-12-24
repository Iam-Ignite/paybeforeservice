import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../../../utils/contextShop";
import axios from "axios";

export default function BankDetails({
  bankName,
  bankCode,
  accNo,
  setAccNo,
  accName,
  setAccname,
  details,
  setDetails,
  handleFront,
  bankShortCode,
}) {
  const {
    setNotify,
    setNotifyType,
    setNotifymsg,
    profileData,
    setWithdrawModal,
  } = useContext(ShopContext);
  const [loading, setLoading] = useState(false);
  const [loadingAccN, setLoadingAccN] = useState(false);
  const token = localStorage.getItem("token");

  const Complete = () => {
    if (bankName === "") {
      setNotify(true);
      setNotifyType("warn");
      setNotifymsg("Select Bank to Proceed");
      return;
    }
    if (accNo === "") {
      setNotify(true);
      setNotifyType("warn");
      setNotifymsg("Please Enter account number to proceed");
      return;
    }
    if (accName === "") {
      setNotify(true);
      setNotifyType("warn");
      setNotifymsg("Add account name");
      return;
    }

    handleFront("confirmDetails");
  };

  //Add beneficairy
  const addBeneFiciary = async () => {
    if (bankName === "") {
      setNotify(true);
      setNotifyType("warn");
      setNotifymsg("Select Bank to Proceed");
      return;
    }
    if (accNo === "") {
      setNotify(true);
      setNotifyType("warn");
      setNotifymsg("Please Enter account number to proceed");
      return;
    }
    if (accName === "") {
      setNotify(true);
      setNotifyType("warn");
      setNotifymsg("Add account name");
      return;
    }

    const endpoint =
      "https://paybeforeservice.onrender.com/PayBeforeService/v1/bene/addbeneficiary";

    setLoading(true);

    try {
      const response = await axios.post(
        endpoint,
        {
          account_Name: accName,
          account_Number: accNo,
          bank_Name: bankName,
          bank_Code: bankCode,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data.status) {
        console.log(response.data);
        setNotify(true);
        setNotifyType("success");
        setNotifymsg(response.data.message);
      } else {
        setNotify(true);
        setNotifyType("warn");
        setNotifymsg(response.data.data.message);
        return;
      }
    } catch (error) {
      // Error in making the request or server returned an error status
      console.error("Error:", error);
      setNotify(true);
      setNotifyType("warn");
      setNotifymsg(error.response.data.message);
      return;
      // setLoading(!true);
      // setErrMsg(error.response.data.message);
    }
  };

  const setAndSetDetails = async (e) => {
    const newValue = e.target.value;
    setAccNo(newValue);

    if (newValue.length === 10) {
      const endpoint = `https://paybeforeservice.onrender.com/PayBeforeService/v1/user/getAccountName/${newValue}/${bankShortCode}`;

      setLoadingAccN(true);

      try {
        const response = await axios.get(endpoint, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        if (response.data.status) {
          setLoadingAccN(false);
          setNotify(true);
          setNotifyType("success");
          setNotifymsg(response.data.data.message);
          console.log(response.data);
          setAccname(response.data.data.data.account_name);
        } else {
          setLoadingAccN(false);
          setNotify(true);
          setNotifyType("warn");
          setNotifymsg(response.data.data.message);
          return;
        }
      } catch (error) {
        console.error("Error:", error);
        setNotify(true);
        setNotifyType("warn");
        setNotifymsg(error.response.data.message);
        return;
      }
    }
  };

  useEffect(() => {
    console.log(bankName, "checking");
  }, [bankName]);

  return (
    <div className="flex flex-col gap-5 w-[100%]">
      <h3 className="font-ui-semi font-semibold text-lg mt-0 text-[#0D0033] mb-2 text-center ">
        Bank Details
      </h3>
      <div className="text-[#555] text-xs text-center">
        Kindly fill in your bank details
      </div>
      <div className="flex flex-col gap-3 w-[100%]">
        <div
          onClick={() => handleFront("chooseBank")}
          className=" flex justify-between items-center w-100 p-3 bg-base rounded-[15px] font-normal  text-[14px] cursor-pointer"
        >
          <input
            type="text"
            defaultValue={bankName}
            placeholder={"Bank Name"}
            className={`outline-none bg-transparent text-[#555]`}
            readOnly
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="5"
            viewBox="0 0 10 5"
            fill="none"
          >
            <path d="M0 0L5 5L10 0H0Z" fill="#555555" />
          </svg>
        </div>

        <div className="w-100 p-3 bg-base rounded-[15px] font-normal text-[14px]">
          <input
            type="text"
            placeholder="Account Number"
            defaultValue={accNo}
            onChange={(e) => setAndSetDetails(e)}
            className="outline-none bg-transparent text-[#555]"
          />
        </div>

        <div className="w-100 p-3 bg-base rounded-[15px] font-normal text-[14px]">
          <input
            type="text"
            defaultValue={accName}
            placeholder={` ${loadingAccN ? "..." : "Account Name"}`}
            onChange={(e) => setAccname(e.target.value)}
            className="outline-none bg-transparent text-[#555]"
          />
        </div>

        <div className="w-100 p-3 py-10 bg-base rounded-[15px] font-normal text-[14px]">
          <input
            type="text"
            placeholder="Narration(optional)"
            onChange={(e) => setDetails(e.target.value)}
            className="outline-none bg-transparent text-[#555] w-100 h-100"
          />
        </div>
      </div>

      <div className="w-100 flex justify-center items-center gap-10">
        <div
          onClick={addBeneFiciary}
          className="bg-[#fff] border border-[#555555] text-[#555555] px-5 text-xs py-1 rounded-[15px] cursor-pointer"
        >
          {loading ? "..." : "Save"}
        </div>
        <div
          onClick={Complete}
          className="bg-[#6E3EFF] text-white px-5 text-xs py-2 rounded-[15px] cursor-pointer"
        >
          Continue
        </div>
      </div>
    </div>
  );
}
