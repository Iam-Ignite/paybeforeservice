import React, {useContext, useEffect} from "react";
import { formatDate } from "../../utils/constants";
import { ShopContext } from "../../utils/contextShop";


export default function TransactionDispute({
  disputeData,
  setReason,
  clienttx,
  setClientTx,
  setRefund,
  setAmount,
  setPaymentStatus,
  setReciever,
  setSender,
}) {
  const { profileData, setNotify, setNotifyType, setNotifymsg } =
    useContext(ShopContext);

  useEffect(() => {
    setAmount(
      profileData === null ? disputeData.amount : disputeData.amount_paid
    );
    setPaymentStatus(
      profileData === null ? disputeData.status : disputeData.amount_paid
    );
    setReciever(
      profileData === null ? disputeData.reciever : disputeData.amount_paid
    );
    setSender(
      profileData === null
        ? disputeData?.payment?.sender.account_name
        : disputeData.amount_paid
    );
  }, []);

  const setRefundAfterTx = (e) => {
    if (clienttx) {
      setRefund(e.target.value);
    } else {
      setNotify(true);
      setNotifyType("warn");
      setNotifymsg("Cannot request refund, if transfer failed");
    }
  };

  return (
    <div className="w-full">
      <div className="border border-[#DADADA] p-4 w-full flex  flex-row md:flex-col justify-between gap-0 md:gap-5 md:items-start items-center  rounded text-[#555] font-semibold text-sm">
        <div className="flex gap-1">
          <div className="">Seller:</div>
          <div className="">{disputeData.reciever}</div>
        </div>
        <div className="flex gap-1">
          <div className="">ID:</div>
          <div className="">{disputeData.id}</div>
        </div>

        <div className="flex gap-1">
          <div className="">Date</div>
          <div className="">{formatDate(disputeData.createdAt)}</div>
        </div>
      </div>

      {/* Getting reasons for the dispute */}
      <div className="mt-7 flex justify-between">
        {/* Questions */}
        <div className="flex flex-col gap-5">
          {/* Question one */}
          <div className="flex flex-col gap-2">
            <div className="font-semibold text-sm text-[#555]">
              1. was your transaction succesfull ?
            </div>

            <div className="radio-button">
              <input
                onChange={() => setClientTx(true)}
                name="radio-group-success"
                id="radio-tx-yes"
                value="yes"
                className="radio-button__input"
                type="radio"
              />
              <label htmlFor="radio-tx-yes" className="radio-button__label">
                <span className="radio-button__custom"></span>
                Yes
              </label>
            </div>

            <div className="radio-button">
              <input
                onChange={() => setClientTx(false)}
                name="radio-group-success"
                id="radio-tx-no"
                value="no"
                className="radio-button__input"
                type="radio"
              />
              <label htmlFor="radio-tx-no" className="radio-button__label">
                <span className="radio-button__custom"></span>
                No
              </label>
            </div>
          </div>
          {/* Question two */}
          <div className="flex flex-col gap-2">
            <div className="font-semibold text-sm text-[#555]">
              2. if yes, Would you like to recieve a refund ?
            </div>

            <div className="radio-button">
              <input
                onChange={setRefundAfterTx}
                name="radio-group"
                id="radio-refund-yes"
                value="yes"
                className="radio-button__input"
                type="radio"
              />
              <label htmlFor="radio-refund-yes" className="radio-button__label">
                <span className="radio-button__custom"></span>
                Yes
              </label>
            </div>

            <div className="radio-button">
              <input
                onChange={setRefundAfterTx}
                name="radio-group"
                id="radio-refund-no"
                value="no"
                className="radio-button__input"
                type="radio"
              />
              <label htmlFor="radio-refund-no" className="radio-button__label">
                <span className="radio-button__custom"></span>
                No
              </label>
            </div>
          </div>

          {/* Question three */}
          <div className="flex flex-col gap-2">
            <div className="font-semibold text-sm text-[#555]">
              3. Add reason
            </div>

            <div className="bg-[#FFF] border rounded-md p-2 px-3 flex items-center w-[600px] md:[100%]">
              <input
                type="text"
                onChange={(e) => setReason(e.target.value)}
                placeholder="Write Reason"
                className="bg-transparent outline-none text-sm px-2 w-full text-[#323232]"
              />

              <div className="text-[#6E3EFF] font-semibold text-xs flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                >
                  <path
                    fill="#888888"
                    d="m22 27.18l-2.59-2.59L18 26l4 4l8-8l-1.41-1.41z"
                  />
                  <path
                    fill="#888888"
                    d="M25 5h-3V4a2.006 2.006 0 0 0-2-2h-8a2.006 2.006 0 0 0-2 2v1H7a2.006 2.006 0 0 0-2 2v21a2.006 2.006 0 0 0 2 2h9v-2H7V7h3v3h12V7h3v11h2V7a2.006 2.006 0 0 0-2-2m-5 3h-8V4h8Z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        {/* illustration */}
        <div
          className={`w-[50%] h-auto flex justify-center md:hidden ${
            Object.keys(disputeData).length !== 0
              ? "items-center"
              : "item-start"
          }`}
        >
          <img src="./fast-pay.png" className="w-[50%] h-auto" alt="" />
        </div>
      </div>

      {/* Getting reasons for the dispute end */}
    </div>
  );
}
