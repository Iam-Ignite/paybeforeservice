import React, { useEffect, useState } from "react";

export default function NewDispute({
  setDisputeType,
  setEmail,
  setDisputeId,
  setReason,
}) {
  const [others, setOthers] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");

  const collectDisputeType = (e) => {
    setDisputeType(e.target.value);
  };

  const handleSelectChange = (event) => {
    // Check if the selected value is "others" and perform the necessary action
    const value = event.target.value;

    if (value === "others") {
      setOthers(true);
      return;
    }
    setSelectedValue(value);
    setDisputeType(value);
  };

  useEffect(() => {}, [others]);

  return (
    <div className="flex justify-between">
      <div className="flex flex-col gap-10">
        {others ? (
          <label htmlFor="">
            <span className="label-text text-[#555] font-semibold">
              Issue type
            </span>
            <div className="bg-[#FFF] border rounded-md p-3 px-3 flex items-center w-[330px] md:[100%]">
              <input
                onChange={collectDisputeType}
                type="text"
                placeholder="Your Issue"
                className="bg-transparent outline-none text-sm px-2 w-full text-[#323232]"
              />

              <svg
                onClick={() => {
                  setSelectedValue("");
                  setOthers(false);
                }}
                className="cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                width={30}
                height={30}
                viewBox="0 0 24 24"
              >
                <path
                  fill="#888888"
                  d="m12 12.727l-3.244 3.252q-.161.16-.358.15q-.196-.01-.358-.17q-.16-.159-.16-.363t.16-.363l3.233-3.231l-3.233-3.22q-.16-.162-.16-.368q0-.207.16-.368q.16-.16.364-.16t.363.16L12 11.298l3.219-3.252q.16-.16.358-.16t.358.16q.165.166.165.367t-.165.36L12.702 12l3.252 3.244q.16.161.16.358t-.16.358q-.166.165-.367.165t-.36-.165z"
                />
              </svg>
            </div>
          </label>
        ) : (
          <select
            className="select select-primary select-bordered w-full max-w-xs border border-[#DADADA] outline-none p-3 rounded flex flex-col gap-4 cursor-pointer"
            value={selectedValue}
            onChange={handleSelectChange}
          >
            <option disabled selected>
              Select closest issue
            </option>
            <option>inquiry</option>
            <option>transaction</option>
            <option>complaint</option>
            <option>others</option>
          </select>
        )}

        <label htmlFor="">
          <span className="label-text text-[#555] font-semibold">Email</span>
          <div className="bg-[#FFF] border rounded-md p-4 px-3 flex items-center w-[330px] md:[100%]">
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              placeholder="Your Email"
              className="bg-transparent outline-none text-sm px-2 w-full text-[#323232]"
            />
          </div>
        </label>

        <label htmlFor="">
          <span className="label-text text-[#555] font-semibold">
            Existing dispute id (Optional)?
          </span>
          <div className="bg-[#FFF] border rounded-md p-4 px-3 flex items-center w-[330px] md:[100%]">
            <input
              onChange={(e) => setDisputeId(e.target.value)}
              type="text"
              placeholder="Write Reason"
              className="bg-transparent outline-none text-sm px-2 w-full text-[#323232]"
            />
          </div>
        </label>

        <label htmlFor="">
          <span className="label-text text-[#555] font-semibold">
            Write your issue?
          </span>
          <div className="bg-[#FFF] border rounded-md p-4 px-3 flex items-center w-[330px] md:[100%]">
            <input
              type="text"
              onChange={(e) => setReason(e.target.value)}
              placeholder="Write Reason for the ticket"
              className="bg-transparent outline-none text-sm px-2 w-full text-[#323232]"
            />
          </div>
        </label>
      </div>

      {/* illustration */}
      <div className={`w-[50%] h-auto flex justify-center`}>
        <img src="./newdispute.svg" className="w-[50%] h-auto" alt="" />
      </div>
    </div>
  );
}
