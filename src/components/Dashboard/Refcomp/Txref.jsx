/* eslint-disable react/prop-types */
/** @format */

import {
  Txbalance,
  TxReedem,
  TxDownload,
  Txdate,
  TxiconIn,
  TxiconOut,
  Txstatus,
  Txtype,
} from "../Transactioncomp/Txcomp";

export default function Txref({ windowWidth, data }) {
  return (
    <>
      {data?.map((item, idx) => (
        <div className="flex justify-between items-center mb-2" key={idx}>
          {/* tx icon and type */}
          <div className="flex justify-between items-center ">
            {/* Icon */}

            <TxiconIn status={item.status} />

            {/* Type */}
            <div className="text-[#555] leading-[20px]">
              <Txtype txtype={item.type} />
              {windowWidth <= 768 && <Txbalance amount={item.amount} />}
              <Txdate date={item.createdAt} />
            </div>
          </div>

          {/* status */}
          {/* {windowWidth > 768 && <Txstatus status={item.status} />} */}

          {/* Amount */}
          {windowWidth > 768 && <Txbalance amount={item.amount} />}
        </div>
      ))}
    </>
  );
}
