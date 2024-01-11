import React, { useContext, useEffect, useState } from "react";
import { SearchIcon } from "../../icons/Icons";
import { ShopContext } from "../../../utils/contextShop";

export default function SavedAccounts({
  setAccNo,
  setAccname,
  setBankName,
  setBankCode,
  handleFront,
}) {
  const {
    setNotify,
    setNotifyType,
    setNotifymsg,
    profileData,
    setWithdrawModal,
  } = useContext(ShopContext);
  const [bene, setBene] = useState([{}]);
  const [length, setLength] = useState();
  const [searched, setSearched] = useState([]);
  const [pickedBene, setPickedBene] = useState({});
  const token = localStorage.getItem("token");

  const deleteBene = async () => {
    const endpoint = `https://paybeforeservice.onrender.com/PayBeforeService/v1/bene/delbeneficiary/${pickedBene._id}`;

    try {
      const response = await axios.delete(endpoint, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json", // You may include this header if required by the API
        },
      });

      if (response.data.status) {
        setNotify(true);
        setNotifyType("success");
        setNotifymsg(response.data.data.message);
      } else {
        setNotify(true);
        setNotifyType("warn");
        setNotifymsg(response.data.data.message);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const Search = (e) => {
    const searchTerm = e.target.value;

    const searchedData = supported.filter((bank) => {
      return bank.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setSearched(searchedData);
  };

  const select = () => {
    setAccNo(pickedBene.account_Number);
    setAccname(pickedBene.account_Name);
    setBankName(pickedBene.bank_Name);
    setBankCode(pickedBene.bank_Code);
    handleFront("bankDetails");
  };

  useEffect(() => {
    if (profileData?.beneficiaries.length !== length) {
      setLength(profileData.beneficiaries.length);
      setBene(profileData.beneficiaries);
    }
  }, [searched, pickedBene]);

  return (
    <div className="flex flex-col items-center justify-center gap-5 w-[100%]">
      <h3 className="font-ui-semi font-semibold text-lg mt-0 text-[#0D0033] mb-2 text-center ">
        Saved Accounts
      </h3>
      <div className="w-full bg-[#FFF] border items-center md:w-[85%] rounded-md p-2 px-3 flex">
        <input
          type="search"
          placeholder="Search"
          onChange={(e) => Search(e)}
          className="bg-transparent outline-none text-sm px-2 w-full  text-[#323232]"
        />
        <label htmlFor="date">
          <SearchIcon />
        </label>
      </div>
      {bene.length !== 0 ? (
        <div className="flex flex-col gap-2 overflow-y-scroll overflow-x-hidden w-[100%] h-40">
          {searched.length === 0
            ? bene.map((data, idx) => (
                <div
                  key={idx}
                  onClick={() => setPickedBene(data)}
                  className="cursor-pointer border-ui-border hover:bg-[#FFF] border-border rounded-[10px] p-2"
                >
                  <div className="">
                    <img src="./gtb.svg" className="h-38" alt="" />
                  </div>
                  <div className="flex justify-between w-100 mt-5">
                    <div className=" text-[#555] text-xs ">
                      <div className="">Bank Name</div>
                      <div className="">Account Name</div>
                      <div className="">Account Number</div>
                    </div>
                    <div className=" font-bold text-[#0D0033] text-xs">
                      <div className="">{data?.bank_Name}</div>
                      <div className="">{data.account_Name}</div>
                      <div className="">{data.account_Number}</div>
                    </div>
                  </div>
                </div>
              ))
            : searched.map((data, idx) => (
                <div
                  key={idx}
                  onClick={() => setPickedBene(data)}
                  className="cursor-pointer border-ui-border hover:bg-[#FFF] border-border rounded-[10px] p-2"
                >
                  <div className="">
                    <img src="./gtb.svg" className="h-38" alt="" />
                  </div>
                  <div className="flex justify-between w-100 mt-5">
                    <div className=" text-[#555] text-xs ">
                      <div className="">Bank Name</div>
                      <div className="">Account Name</div>
                      <div className="">Account Number</div>
                    </div>
                    <div className=" font-bold text-[#0D0033] text-xs">
                      <div className="">{data?.bank_Name}</div>
                      <div className="">{data.account_Name}</div>
                      <div className="">{data.account_Number}</div>
                    </div>
                  </div>
                </div>
              ))}
        </div>
      ) : (
        <div className="text-[#555] text-center w-full text-sm font-semibold">
          No Saved Beneficary
        </div>
      )}
      {Object.keys(pickedBene).length !== 0 && (
        <div className="w-100 flex justify-center items-center gap-10">
          <div
            onClick={deleteBene}
            className="bg-[#fff] border border-[#555555] text-[#555555] px-5 text-xs py-1 rounded-[15px] cursor-pointer"
          >
            Delete
          </div>
          <div
            onClick={select}
            className="bg-[#6E3EFF] text-white px-5 text-xs py-2 rounded-[15px] cursor-pointer"
          >
            Continue
          </div>
        </div>
      )}
    </div>
  );
}
