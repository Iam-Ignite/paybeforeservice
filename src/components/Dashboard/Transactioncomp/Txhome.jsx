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
} from "./Txcomp";

export default function Txhome({ windowWidth, data, setRedeemObj }) {
  return (
    <>
      {data?.map((item, idx) => (
        <div className="flex justify-between items-center mb-2" key={idx}>
          {/* tx icon and type */}
          <div className="flex justify-between items-center ">
            {/* Icon */}
            {item.type === "Payment" ? (
              <TxiconIn status={item.status} />
            ) : (
              <TxiconOut status={item.status} />
            )}
            {/* Type */}
            <div className="text-[#555] leading-[20px]">
              <Txtype txtype={item.type} />
              {windowWidth <= 768 && (
                <Txbalance
                  amount={
                    item.type === "Payment"
                      ? item.payment.amount
                      : item.withdrawal.amount
                  }
                />
              )}
              <Txdate
                date={
                  item.type === "Payment"
                    ? item.payment.created
                    : item.createdAt
                }
              />
            </div>
          </div>

          {/* status */}
          {windowWidth > 768 && <Txstatus status={item.status} />}

          {/* Amount */}
          {windowWidth > 768 && (
            <Txbalance
              amount={
                item.type === "Payment"
                  ? item.payment.amount
                  : item.withdrawal.amount
              }
            />
          )}

          {/* Redeem or Redeemed */}
          {item.type === "Payment" && !item.payment.isRedeemed ? (
            <TxReedem item={item} setRedeemObj={setRedeemObj} />
          ) : (
            <TxDownload data={item} />
          )}
        </div>
      ))}
    </>
  );
}
