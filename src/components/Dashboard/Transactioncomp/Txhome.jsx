/* eslint-disable react/prop-types */
/** @format */
import React, { useState } from "react";
import {
  Txbalance,
  TxReedem,
  TxDownload,
  Txdate,
  TxiconIn,
  TxiconOut,
  Txstatus,
  Txtype,
  TxCancel,
  Arrows,
} from "./Txcomp";

export default function Txhome({ windowWidth, data, setRedeemObj }) {
  const [switchAmounts, setSwitchAmounts] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState();
  const [switchAmountType, setSwitchAmountType] = useState("amount_created");

  const openSelected = (index) => {
    if (index !== undefined) {
      console.log("in in here");
      setSwitchAmounts(true);
      setSelectedIndex(index);
    } else {
      setSwitchAmounts(false);
      setSelectedIndex();
    }
  };

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
                <div className="flex items-center gap-2 relative">
                  <div className="flex items-end gap-1">
                    <Txbalance
                      amount={
                        item.type === "Payment"
                          ? switchAmountType === "amount_created"
                            ? item.payment.amount_created
                            : item.payment.amount_paid
                          : item.withdrawal.amount
                      }
                    />
                    {switchAmountType === "amount_created" ? (
                      <div className="font-semibold text-[7px] text-primary ">
                        <span>C</span>
                      </div>
                    ) : (
                      <div className="font-semibold text-[7px] text-primary ">
                        P
                      </div>
                    )}

                    {item.type === "Payment" && (
                      <Arrows
                        data={switchAmounts}
                        index={idx}
                        openSelected={openSelected}
                      />
                    )}

                    {switchAmounts && selectedIndex === idx && (
                      <div className="top-0 left-auto transform translate-x-0 absolute bg-[#fff] shadow rounded z-[9999] p-3">
                        {/* Amount Created */}
                        <div
                          onClick={() => {
                            setSwitchAmountType("amount_created");
                            setSelectedIndex(0);
                            setSwitchAmounts(false);
                          }}
                          className="flex items-end text-[#555] text-xs font-semibold cursor-pointer hover:text-primary mb-2"
                        >
                          <span>Amount Created</span>
                          <span className="font-semibold text-[7px] text-[#555] p-2">
                            C
                          </span>
                        </div>
                        {/* Amount Paid */}
                        <div
                          onClick={() => {
                            setSwitchAmountType("amount_paid");
                            setSelectedIndex(0);
                            setSwitchAmounts(false);
                          }}
                          className="flex items-end text-[#555] text-xs font-semibold cursor-pointer hover:text-primary"
                        >
                          <span>Amount Paid</span>
                          <span className="font-semibold text-[7px] text-[#555] p-2">
                            P
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
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
            <div className="flex items-center gap-2 relative">
              <div className="flex items-end gap-1">
                <Txbalance
                  amount={
                    item.type === "Payment"
                      ? switchAmountType === "amount_created"
                        ? item.payment.amount_created
                        : item.payment.amount_paid
                      : item.withdrawal.amount
                  }
                />
                {switchAmountType === "amount_created" ? (
                  <div className="font-semibold text-[7px] text-primary ">
                    <span>C</span>
                  </div>
                ) : (
                  <div className="font-semibold text-[7px] text-primary ">
                    P
                  </div>
                )}

                {item.type === "Payment" && (
                  <Arrows
                    data={switchAmounts}
                    index={idx}
                    openSelected={openSelected}
                  />
                )}

                {switchAmounts && selectedIndex === idx && (
                  <div className="top-0 left-auto transform translate-x-0 absolute bg-[#fff] shadow rounded z-[9999] p-3">
                    {/* Amount Created */}
                    <div
                      onClick={() => {
                        setSwitchAmountType("amount_created");
                        setSelectedIndex(0);
                        setSwitchAmounts(false);
                      }}
                      className="flex items-end text-[#555] text-xs font-semibold cursor-pointer hover:text-primary mb-2"
                    >
                      <span>Amount Created</span>
                      <span className="font-semibold text-[7px] text-[#555] p-2">
                        C
                      </span>
                    </div>
                    {/* Amount Paid */}
                    <div
                      onClick={() => {
                        setSwitchAmountType("amount_paid");
                        setSelectedIndex(0);
                        setSwitchAmounts(false);
                      }}
                      className="flex items-end text-[#555] text-xs font-semibold cursor-pointer hover:text-primary"
                    >
                      <span>Amount Paid</span>
                      <span className="font-semibold text-[7px] text-[#555] p-2">
                        P
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Redeem or Redeemed */}
          {console.log(item.payment.isPaid, "log is paid first")}
          {item.type === "Payment" && item.payment.isPaid === "pending" ? (
            <TxCancel data={item.payment} />
          ) : item.type === "Payment" &&
            item.payment.isPaid === "complete" &&
            !item.payment.isRedeemed ? (
            <TxReedem item={item} setRedeemObj={setRedeemObj} />
          ) : (
            <TxDownload data={item} />
          )}
        </div>
      ))}
    </>
  );
}
