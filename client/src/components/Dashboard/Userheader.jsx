import React from 'react'

export default function Userheader() {
  return (
    <div className="flex gap-2 items-center justify-start pl-3 w-100">
        <div className="rounded-[100%] h-auto p-1 flex justify-center items-center border-[#6E3EFF] border-2">
            <div className="bg-[#B190B6] rounded-[100%] h-auto p-1 flex justify-center items-center">
                <img src="/image/avatar.svg" alt="" className='h-12' />
            </div>
        </div>

        <div className="text-[#6E3EFF] font-[600]">Jolene Ekene</div>
  </div>
  )
}
