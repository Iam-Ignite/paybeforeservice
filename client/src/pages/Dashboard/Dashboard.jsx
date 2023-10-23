import React,{ useEffect, useState} from 'react';
import Topaction from '../../components/Dashboard/DashboardComp/Topaction';
import Wallet from '../../components/Dashboard/DashboardComp/Wallet';
import Txhome from '../../components/Dashboard/Transactioncomp/Txhome';
import Txref from '../../components/Dashboard/Refcomp/Txref';
import Userheader from '../../components/Dashboard/Userheader';

export default function Dashboard() {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Update the windowWidth state when the window is resized
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [windowWidth])
  
  return (
    <div className='p-7 mt-3  md:h-auto'>

         <div className="">
          {
            windowWidth > 768 ?
             <Topaction />
             :
             <div className='w-full flex justify-between items-center'>
               <Userheader />

               <div className="text-[#000]">Icon</div>
             </div>
           }
         </div>

         <div className="mt-7">
            <Wallet />
         </div>
         
         {
           windowWidth <= 768 &&
           <div className="mt-7">
             <Topaction />
           </div>
         }


         <div className="grid grid-cols-3 gap-6 mt-10">
            {/* Left sie with transaction */}
            <div className="md:col-span-full 2xl:col-span-2">
              {/* Info */}
              <div className="flex justify-between text-[#555]">
                <span className='font-semibold text-[#555]'>Recent Transactions</span>
                <span className='font-semibold text-[#555]'>View all</span>
              </div>

              {/* Main content */}
              <div className="bg-[#fff] border-2 border-[#DADADA] rounded-2xl w-100 p-4 md:px-6 mt-4 h-[200px]">
                 <Txhome windowWidth={windowWidth} />
              </div>
            </div>

            {/* Right side with referrals */}
            <div className="md:col-span-full 2xl:col-span-0">
              {/* info */}
              <div className="text-[#555] font-semibold">Referral Link</div>
              {/* Search */}
              <div className="bg-[#FFF] rounded-md p-2 flex">
                <input type="text" className='bg-transparent outline-none w-full text-[#0D0033]' />
                <div className="text-[#000]">Icon</div>
              </div>

              {/* Referrals showing */}
              <div className="flex flex-col justify-between md:hidden 2xl:block">
                {/* Info */}
                <div className="flex justify-between text-[#555] w-full">
                  <span className='font-semibold'>Referrals</span>
                  <span className='font-semibold'>View all</span>
                </div>

                {/* Main content */}
                <div className="bf-[#fff] border-2 border-[#DADADA] rounded-2xl w-100 p-2 bg-[#FFF] mt-4">
                  <Txref />
                </div>
            </div>
            </div>
         </div>
    </div>
  )
}
