import React from "react";

export default function NewDispute() {
  return (
    <div className="flex justify-between">
      <div className="flex flex-col gap-10">
        <select className="select select-primary select-bordered w-full max-w-xs border border-[#DADADA] outline-none p-3 rounded flex flex-col gap-4">
          <option disabled selected>
            Select closest issue
          </option>
          <option>Homer</option>
          <option>Marge</option>
          <option>Bart</option>
          <option>Lisa</option>
          <option>Maggie</option>
        </select>

        <label htmlFor="">
          <span className="label-text text-[#555] font-semibold">Email</span>
          <div className="bg-[#FFF] border rounded-md p-4 px-3 flex items-center w-[330px] md:[100%]">
            <input
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
