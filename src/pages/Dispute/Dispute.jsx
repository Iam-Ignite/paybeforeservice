import React, { useContext, useState } from "react";
import { Footer, Navigation } from "../../components";
import { ShopContext } from "../../utils/contextShop";
import TransactionDispute from "../../components/Dispute/TransactionDispute";
import NewDispute from "../../components/Dispute/NewDispute";
import axios from "axios";
import { makeCall } from "../../utils/makeCall";
import Notify from "../../components/Notify";

export default function Dispute() {
  const { profileData, disputeData, notify } = useContext(ShopContext);
  const [disputeType, setDisputeType] = useState();
  const [reason, setReason] = useState();
  const [email, setEmail] = useState();
  const [reciever, setReciever] = useState();
  const [sender, setSender] = useState();
  const [disputeId, setDisputeId] = useState();
  const [paymentStatus, setPaymentStatus] = useState();
  const [amount, setAmount] = useState();
  const [clienttx, setClientTx] = useState(false);
  const [refund, setRefund] = useState();

  //for searched dispute component
  const [searchedDispute, setSearchedDispute] = useState();
  const [loadSearched, setLoadSearched] = useState();

  const findDispute = async (e) => {
    const endpoint = `https://paybeforeservice.onrender.com/PayBeforeService/v1/dispute/create_dispute/?find=${searchedDispute}`;
    const headers = {
      "Content-Type": "application/json", // You may include this header if required by the API
    };
    try {
      const response = await makeCall(endpoint, {}, headers, "get");

      if (!response.status) {
        setNotify(true);
        setNotifyType("warn");
        setNotifymsg(response.message);
        return;
      }
      setSearchedDispute(response.data);
    } catch (error) {
      setNotify(true);
      setNotifyType("error");
      setNotifymsg(error.response.data.message);
    }
  };

  const createDispute = async () => {
    const endpoint = `https://paybeforeservice.onrender.com/PayBeforeService/v1/dispute/create_dispute`;
    const headers = {
      "Content-Type": "application/json", // You may include this header if required by the API
    };
    const body = {
      type: disputeType,
      email: email,
      dispute_id: disputeId,
      reason: reason,
      sender: sender,
      reciever: reciever,
      payment_status: paymentStatus,
      amount: amount,
      client_tx: clienttx,
      refund: refund,
    };
    try {
      // const response = await axios.post(
      //   endpoint,
      //   {
      //     type: disputeType,
      //     email: email,
      //     dispute_id: disputeId,
      //     reason: reason,
      //     sender: sender,
      //     reciever: reciever,
      //     payment_status: paymentStatus,
      //     amount: amount,
      //   },
      //   {
      //     headers: {
      //       "Content-Type": "application/json", // You may include this header if required by the API
      //     },
      //   }
      // );
      const response = await makeCall(endpoint, body, headers, "post");

      if (!response.status) {
        console.log("reeedemed modal called");
        setNotify(true);
        setNotifyType("warn");
        setNotifymsg(response.message);
        return;
      }
      setNotify(true);
      setNotifyType("success");
      setNotifymsg("Dispute created");
    } catch (error) {
      setNotify(true);
      setNotifyType("error");
      setNotifymsg(error.response.data.message);
    }
  };

  return (
    <>
      {profileData === null && <Navigation />}
      <div className="p-10">
        <div className="w-full flex justify-between">
          <h1 className="font-bold text-3xl">Open dispute</h1>

          <div className="bg-[#FFF] border rounded-md p-2 px-3 flex w-[30%] md:w-[20%]">
            <input
              type="text"
              placeholder="Find dispute by id or email"
              onChange={findDispute}
              className="bg-transparent outline-none text-sm px-2 w-full text-[#323232]"
            />
          </div>
        </div>

        <div className="mt-5">
          {searchedDispute ? (
            <SearchedDispute
              loadSearched={loadSearched}
              searchedDispute={searchedDispute}
            />
          ) : (
            <>
              {/* Reference */}
              <div className="w-full text-start text-[#555] text-xs mb-2 font-semibold">
                {Object.keys(disputeData).length !== 0
                  ? "REFERS TO ORDER:"
                  : "REFER TO ISSUE"}
              </div>
              {/* Details of the dispute */}
              {Object.keys(disputeData).length !== 0 ? (
                <TransactionDispute
                  disputeData={disputeData}
                  setReason={setReason}
                  setReciever={setReciever}
                  setSender={setSender}
                  clienttx={clienttx}
                  setClientTx={setClientTx}
                  setRefund={setRefund}
                  setAmount={setAmount}
                  setPaymentStatus={setPaymentStatus}
                />
              ) : (
                <NewDispute
                  setDisputeType={setDisputeType}
                  setEmail={setEmail}
                  setDisputeId={setDisputeId}
                  setReason={setReason}
                />
              )}

              <div className="w-full flex justify-center items-center mt-8">
                <button onClick={createDispute} className="bg-primary px-10 py-3 rounded-[10px] text-white font-ui-bold text-[16px] border-none">
                  Submit
                </button>
              </div>
            </>
          )}
        </div>
      </div>
      {profileData === null && notify && <Notify />}
      {/* {notify && <Notify />} */}

      {/* FOOTER */}
      {profileData === null && <Footer />}
    </>
  );
}
