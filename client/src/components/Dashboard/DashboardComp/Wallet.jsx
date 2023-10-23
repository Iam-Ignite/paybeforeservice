import React from 'react'

export default function Wallet() {
  return (
    <div className=' grid md:grid-cols-1 md:gap-5 2xl:grid-cols-3 '>
       
       {/* Wallet one */}
       <div className="md:w-full 2xl:w-[300px] md:py-14 2xl:py-8 flex justify-center items-center bg-[#6E3EFF] rounded-[16px] relative">

          <div className="flex justify-between items-center w-full px-5">
            {/* Info */}
            <div className="">
                <div className="text-[#FFF] font-normal text-[13px] ">Total Wallet Balance</div>
                <div className="text-[#FFF] font-bold text-[25px]">₦50,000.00</div>
            </div>
            {/* Eye */}
            <div className="">EYE</div>
          </div>

          <div className="absolute bottom-[-10px] right-[-10px]">
            <svg xmlns="http://www.w3.org/2000/svg" width="92" height="43" viewBox="0 0 92 43" fill="none">
                <rect width="176" height="156" fill="white" fill-opacity="0.1"/>
                <rect x="14" y="13" width="176" height="156" fill="white" fill-opacity="0.2"/>
            </svg>
          </div>

       </div>



       {/* Wallet two */}
       <div className="md:w-full 2xl:w-[300px] px-3 md:py-14 2xl:py-8 flex justify-center items-center bg-[#FFF] rounded-[16px] relative  z-40">

          <div className="flex justify-between items-center w-full px-5">
            {/* Info */}
            <div className="">
                <div className="text-[#0D0033] font-normal text-[16px] ">Total Wallet Balance</div>
                <div className="text-[#0D0033] font-bold text-[25px]">₦50,000.00</div>
            </div>
            {/* Eye */}
            <div className="text-[#0D0033]">EYE</div>
          </div>

          <div className="absolute bottom-[-8px] right-[-8px]">
            <svg width="83" height="49" viewBox="0 0 83 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="50.505" cy="50.5069" rx="50.505" ry="50.5069" fill="#6E3EFF" fill-opacity="0.1"/>
                <ellipse cx="78.6785" cy="70.3158" rx="60.3278" ry="60.33" fill="#6E3EFF" fill-opacity="0.15"/>
            </svg>
          </div>

       </div>




       {/* Wallet three */}
       <div className="md:hidden 2xl:w-[300px] px-3 md:py-14 2xl:py-8 flex justify-center items-center bg-[#6E3EFF] rounded-[16px] relative">

          <div className="flex justify-between items-center w-full px-5">
            {/* Info */}
            <div className="">
                <div className="text-[#FFF] font-normal text-[13px] ">Total Wallet Balance</div>
                <div className="text-[#FFF] font-bold text-[25px]">₦50,000.00</div>
            </div>
            {/* Eye */}
            <div className="">EYE</div>
          </div>

          <div className="absolute bottom-[-10px] right-[-10px]">
            <svg xmlns="http://www.w3.org/2000/svg" width="92" height="43" viewBox="0 0 92 43" fill="none">
                <rect width="176" height="156" fill="white" fill-opacity="0.1"/>
                <rect x="14" y="13" width="176" height="156" fill="white" fill-opacity="0.2"/>
            </svg>
          </div>

       </div>       



    </div>
  )
}
