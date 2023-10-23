
export default function Topaction({setPaymentModal}) {
  return (
    <div className="flex w-100 items-center justify-between">
        <div className="text-[#555] font-semibold 2xl:block md:hidden">Wallet</div>

        <div className=" cursor-pointer flex md:grid md:grid-cols-2 gap-2 items-center justify-center md:w-full">
           <div onClick={() => setPaymentModal(true)} className="bg-[#6E3EFF] flex  justify-center items-center text-[#FFF] md:rounded-full 2xl:rounded-full px-6 md:py-4 2xl:py-3">
             <i className="mr-1"><img src="/image/payment.svg" className="h-4" alt="" /></i>
             <div className="text-xs whitespace-pre">Generate payment link</div>
           </div>

           <div className="cursor-pointer bg-[#A23EFF] flex justify-center items-center text-[#FFF] md:rounded-full 2xl:rounded-full px-6 md:py-4 2xl:py-3">
             <i className="mr-1"><img src="/image/withdraw.svg" alt="" className="h-4" /></i>
             <div className="text-xs">Withdraw</div>
           </div>
        </div>
    </div>
  )
}
