/* eslint-disable react/prop-types */
/** @format */

import {
  Txbalance,
  Txbutton,
  Txdate,
  Txicon,
  Txstatus,
  Txtype,
} from "./Txcomp";

export default function Txhome({ windowWidth, data }) {
  return (
    <>
      {data?.map((item, idx) => (
        <div className="flex justify-between items-center mb-2" key={idx}>
          {/* tx icon and type */}
          <div className="flex justify-between items-center ">
            {/* Icon */}
            <Txicon />
            {/* Type */}
            <div className="text-[#555] leading-[20px]">
              <Txtype txtype={item.type} />
              {windowWidth <= 768 && <Txbalance amount={item.amount} />}
              <Txdate date={item.createdAt} />
            </div>
          </div>

          {/* status */}
          {windowWidth > 768 && <Txstatus status={item.status} />}

          {/* Amount */}
          {windowWidth > 768 && <Txbalance amount={item.amount} />}

          {/* Redeem or Redeemed */}
          <Txbutton id={item._id} />
        </div>
      ))}
    </>
  );
}
