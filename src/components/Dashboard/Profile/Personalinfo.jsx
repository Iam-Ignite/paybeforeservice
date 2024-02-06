import React from "react";

export default function Personalinfo() {
  return (
    <div className="flex flex-col p-10 justify-start items-start">
      <div className="text-[#706f6f] font-medium mt-5 mb-2 text-xs">
        Full Name
      </div>

      <input
        type="tel"
        name="phone"
        className="flex-1 border text-black h-full px-5 py-4 w-full overflow-hidden rounded-xl outline-primary"
      />
      <div className="text-[#706f6f] font-medium mt-5 mb-2 text-xs">
        Email Address
      </div>

      <input
        type="tel"
        name="phone"
        className="flex-1 border text-black h-full px-5 py-4 w-full overflow-hidden rounded-xl outline-primary"
      />

      <div className="text-[#706f6f] font-medium mt-5 mb-2 text-xs">
        Phone Number
      </div>

      <input
        type="tel"
        name="phone"
        className="flex-1 border text-black h-full px-5 py-4 w-full overflow-hidden rounded-xl outline-primary"
      />

      <div className="text-[#706f6f] font-medium mt-5 mb-2 text-xs">
        Location
      </div>

      <input
        type="tel"
        name="phone"
        className="flex-1 border text-black h-full px-5 py-4 w-full overflow-hidden rounded-xl outline-primary"
      />
    </div>
  );
}
