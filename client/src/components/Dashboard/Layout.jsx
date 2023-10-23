import React from 'react';
import Dashnavidate from './Dashnavidate';
import Top from './Top';

export default function Layout({children}) {
  return (
    <div className=''>
    
    {/* {
        isBalancesLoading || isRefLoading &&
        <Preloader />
    }
    */}

      <div className="w-[100%] h-screen bg-[#F7F7F7] relative z-[9999] grid grid-cols-4 text-[#FFF]">
        {/* Left */}
        <div className="md:fixed md:bottom-0 md:w-full z-[99999] 2xl:col-span-1 row-span-full ">
            <Dashnavidate  />
        </div>

        {/* Right */}
        <div className="md:col-span-full col-span-3">
          <Top />
          {children}
        </div>
      </div>


    {/* {isSuccessVaccinate && !clickout &&
     <Congratulate />
    } */}
    
  
        {/* <div className="absolute w-[100%] h-[100%] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex justify-center items-center z-[99]">
             <img src="/walletedited.png" alt="" />
         </div> */}

    </div>
  )
}
