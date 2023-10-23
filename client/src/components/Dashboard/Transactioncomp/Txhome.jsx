import React from 'react';
import { Txbalance, Txbutton, Txdate, Txicon, Txstatus, Txtype } from './Txcomp';

export default function Txhome({windowWidth}) {

   const tx = [
    {
        type: "Recieved from client",
        tx_id: "567773DTYY373",
        status: "pending",
        date: "2023-09-01T10:00:00Z",
        amount: 5000
    },
    {
        type: "Recieved from client",
        tx_id: "567773DTYY373",
        status: "pending",
        date: "2023-09-01T10:00:00Z",
        amount: 5000
    },
    {
        type: "Recieved from client",
        tx_id: "567773DTYY373",
        status: "pending",
        date: "2023-09-01T10:00:00Z",
        amount: 5000
    },
    {
        type: "Recieved from client",
        tx_id: "567773DTYY373",
        status: "pending",
        date: "2023-09-01T10:00:00Z",
        amount: 5000
    },
    {
        type: "Recieved from client",
        tx_id: "567773DTYY373",
        status: "pending",
        date: "2023-09-01T10:00:00Z",
        amount: 5000
    },    {
        type: "Recieved from client",
        tx_id: "567773DTYY373",
        status: "pending",
        date: "2023-09-01T10:00:00Z",
        amount: 5000
    }
   ]

  return (
    <div className='flex 2xl:justify-evenly md:justify-between items-center'>
        {/* tx icon and type */}
       <div className="flex items-center gap-2">
        {/* Icon */}
          <Txicon />
        {/* Type */}
        <div className="text-[#555] leading-[20px]">
            <Txtype />
            {
              windowWidth <= 768 &&
              <Txbalance />
            }
            <Txdate />
        </div>
       </div>

       {/* status */}
       {
        windowWidth > 768 &&
        <Txstatus />
       }
  
       {/* Amount */}
       {
        windowWidth > 768 &&
        <Txbalance />
       }
       
       {/* Redeem or Redeemed */}
       <Txbutton />
    </div>
  )
}
