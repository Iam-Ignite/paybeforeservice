import React, { useEffect, useState } from "react";
import { SearchIcon } from "../../icons/Icons";
import { supportedBanks } from "../../../utils/constants";

export default function ChooseBank({
  bankName,
  setBankName,
  bankCode,
  setBankCode,
  handleFront,
  setBankShortCode,
}) {
  const [supported, setSupported] = useState([{}]);
  const [searched, setSearched] = useState([]);

  const Search = (e) => {
    const searchTerm = e.target.value;

    const searchedData = supported.filter((bank) => {
      return bank.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setSearched(searchedData);
  };

  useEffect(() => {
    setSupported(supportedBanks);
    // console.log(supported);
    console.log(searched, "searched in");
  }, [supported, searched]);

  return (
    <div className="flex flex-col items-center justify-center gap-5 w-[100%] mt-10">
      <div className="bg-[#FFF] border items-center md:w-[85%] rounded-md p-2 px-3 flex">
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
      <div className="flex flex-col gap-2 overflow-y-scroll overflow-x-hidden w-[100%] h-40">
        {searched.length === 0
          ? supported.map((data, idx) => (
              <div
                key={idx}
                onClick={() => {
                  setBankName(data.name);
                  setBankCode(data.code);
                  setBankShortCode(data.short_code);
                  handleFront("bankDetails");
                }}
                className="cursor-pointer border-ui-border hover:bg-[#FFF] border-border rounded-[10px] p-2"
              >
                <div className="flex items-center gap-3 w-100">
                  <div className="">
                    <img
                      src="./gtb.svg"
                      className="h-10 rounded-[100%]"
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col ">
                    <div className=" font-bold text-[#0D0033] text-xs">
                      {data.name}
                    </div>
                    <div className=" text-[#555] text-xs ">Aa Finance</div>
                  </div>
                </div>
              </div>
            ))
          : searched.map((data, idx) => (
              <div
                key={idx}
                onClick={() => {
                  setBankName(data.name);
                  setBankCode(data.code);
                  handleFront("bankDetails");
                }}
                className="cursor-pointer border-ui-border hover:bg-[#FFF] border-border rounded-[10px] p-2"
              >
                <div className="flex items-center gap-3 w-100">
                  <div className="">
                    <img
                      src="./gtb.svg"
                      className="h-10 rounded-[100%]"
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col ">
                    <div className=" font-bold text-[#0D0033] text-xs">
                      {data.name}
                    </div>
                    <div className=" text-[#555] text-xs ">Aa Finance</div>
                  </div>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
}
