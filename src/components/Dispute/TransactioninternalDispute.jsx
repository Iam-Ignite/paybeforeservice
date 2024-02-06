import React, { useContext } from "react";
import { formatDate } from "../../utils/constants";
import { ShopContext } from "../../utils/contextShop";

export default function TransactioninternalDispute({
  disputeData,
  createDispute,
  setReason,
  clienttx,
  setClientTx,
  setRefund,
  amountCreated,
  amount,
  paymentStatus,
  setReciever,
  setSender,
  loading,
}) {
  const { profileData, setNotify, setNotifyType, setNotifymsg } =
    useContext(ShopContext);

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
        <div className="flex gap-1 w-24">
          <div className="">Sender:</div>
          <div className="trauncate">
            {disputeData.payment.sender.account_name}
          </div>
        </div>
        <div className="flex gap-1">
          <div className="">Reciever:</div>
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
              Transaction status
            </div>

            <div
              className={`radio-button ${
                paymentStatus === "complete"
                  ? "text-[#22bb33]"
                  : paymentStatus === "incomplete"
                  ? "text-[#ffcc00]"
                  : "text-[#FF3E3E]"
              }`}
            >
              {paymentStatus}
            </div>
          </div>

          {/* Question two */}
          <div className="flex flex-col gap-2">
            <div className="font-semibold text-sm text-[#555]">
              Transaction amount created
            </div>

            <div className="radio-button text-[#6E3EFF] text-xs font-semibold">
              N{amountCreated.toFixed(2)}
            </div>
          </div>

          {/*Info four*/}
          <div className="flex flex-col gap-2">
            <div className="font-semibold text-sm text-[#555]">
              Transaction amount Paid
            </div>

            <div className="radio-button text-[#6E3EFF] text-xs font-semibold">
              N{amount.toFixed(2)}
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
                placeholder="Write Reason"
                onChange={(e) => setReason(e.target.value)}
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

      <div className="w-full flex justify-center items-center mt-8">
        <button
          onClick={createDispute}
          className="bg-primary px-7 py-2 rounded-[10px] text-white font-ui-bold text-[16px] border-none"
        >
          {loading ? "..." : "Create dispute"}
        </button>
      </div>
    </div>
  );
}
