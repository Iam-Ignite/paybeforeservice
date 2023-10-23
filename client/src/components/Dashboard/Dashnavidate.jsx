import React, {useState} from 'react';
import Userheader from './Userheader';

export default function Dashnavidate() {
 
  const [active, setActive] = useState("home");
  

  return (
    <div className='md:bg-[#FFF] md:shadow-2xl bg-[#F7F7F7] flex md:flex-row 2xl:flex-col gap-5 border-[#DADADA] border-r-2 md:h-[90px] 2xl:h-[100vh] 2xl:p-4 md:p-0'>
      {/* Top */}
      <div className="md:hidden 2xl:block">
         <Userheader />
      </div>


      {/* Bottom */}
      <div className="p-5 flex md:flex-row md:justify-evenly md:items-center md:w-full 2xl:flex-col gap-3 pl-7">
       {/* Items */}
        {/* Home */}
        <div className={`flex items-center p-4 gap-3 cursor-pointer hover:bg-[#6e3eff1a] hover:text-[#6E3EFF] ${active == "home" ? "bg-[#6e3eff1a] rounded-[10px] text-[#6E3EFF] h-14" : "text-[#555]" } `}>
          <i><img src="/image/home.svg" alt="" /></i>
          <div className="font-[500] md:hidden">Home</div>
        </div>

          {/* Transactions */}
          <div className={`flex items-center p-4 gap-3 cursor-pointer hover:bg-[#6e3eff1a] hover:rounded-[10px] hover:text-[#6E3EFF] ${active == "transactions" ? "bg-[#6e3eff1a] rounded-[10px] text-[#6E3EFF] h-10" : "text-[#555]" } `}>
          <i><img src="/image/tx.svg" alt="" /></i>
          <div className="font-[400] md:hidden">Transactions</div>
        </div>

        {/* Referrals */}
        <div className={`flex items-center p-4 gap-3 cursor-pointer hover:bg-[#6e3eff1a] hover:rounded-[10px] hover:text-[#6E3EFF] ${active == "referrals" ? "bg-[#6e3eff1a] rounded-[10px] text-[#6E3EFF] h-10" : "text-[#555]" } `}>
          <i><img src="/image/referrals.svg" alt="" /></i>
          <div className="font-[400] md:hidden">Referrals</div>
        </div>          
        
          {/* Edit Profile */}
          <div className={`flex items-center p-4 gap-3 cursor-pointer hover:bg-[#6e3eff1a] hover:rounded-[10px] hover:text-[#6E3EFF] ${active == "profile" ? "bg-[#6e3eff1a] rounded-[10px] text-[#6E3EFF] h-10" : "text-[#555]" } `}>
            <i><img src="/image/profile.svg" alt="" /></i>
            <div className="font-[400] md:hidden">Edit Profile</div>
        </div>

          {/* Contact & FAQs */}
          <div className={`flex items-center p-4 gap-3 cursor-pointer hover:bg-[#6e3eff1a] hover:rounded-[10px] hover:text-[#6E3EFF] ${active == "contact" ? "bg-[#6e3eff1a] rounded-[10px] text-[#6E3EFF] h-10" : "text-[#555]" } `}>
            <i><img src="/image/contact.svg" alt="" /></i>
            <div className="font-[400] md:hidden">Contact & FAQs</div>
        </div>


          {/* Logout */}
          <div className={`md:hidden 2xl:flex items-center p-4 gap-3 cursor-pointer hover:bg-[#6e3eff1a] hover:rounded-[10px] hover:text-[#6E3EFF] ${active == "logout" ? "bg-[#6e3eff1a] rounded-[10px] text-[#6E3EFF] h-10" : "text-[#555]" } `}>
            <i><img src="/image/logout.svg" alt="" /></i>
            <div className="font-[400] md:hidden">Logout</div>
        </div>                
      </div>

    </div>
  )
}
