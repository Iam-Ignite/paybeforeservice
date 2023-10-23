import React from 'react'

export default function Topaction() {
  return (
    <div className="flex w-100 items-center justify-between">
        <div className="text-[#555] font-semibold 2xl:block md:hidden">Wallet</div>

        <div className=" cursor-pointer flex md:grid md:grid-cols-2 gap-2 items-center justify-center md:w-full">
           <div className="bg-[#6E3EFF] flex gap-3 justify-center items-center text-[#FFF] md:rounded-lg 2xl:rounded-2xl px-4 md:py-4 2xl:py-2">
             <i><img src="/image/payment.svg" alt="" /></i>
             <div className="">Generate payment link</div>
           </div>

           <div className="cursor-pointer bg-[#A23EFF] flex gap-3 justify-center items-center text-[#FFF] md:rounded-lg 2xl:rounded-2xl px-4 md:py-4 2xl:py-2">
             <i><img src="/image/withdraw.svg" alt="" /></i>
             <div className="">Withdraw</div>
           </div>
        </div>
    </div>
  )
}
