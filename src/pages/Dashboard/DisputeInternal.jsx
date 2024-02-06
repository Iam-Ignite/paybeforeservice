/** @format */

import { useContext, useEffect, useState } from "react";
import TransactionDispute from "../../components/Dispute/TransactionDispute";
import DisputeTable from "../../components/TableComp/DisputeTable";
import { LOCAL_URL, PRODUCTION_URL } from "../../utils/constants";
import { ShopContext } from "../../utils/contextShop";
import { makeCall } from "../../utils/makeCall";
import Filter from "../../components/Filter/Filter";
import { SearchIcon } from "../../components/icons/Icons";
import TransactioninternalDispute from "../../components/Dispute/TransactioninternalDispute";

// import React from 'react'

export default function DisputeInternal() {
  const {
    filters,
    setFilters,
    profileData,
    setNotify,
    setNotifyType,
    setNotifymsg,
  } = useContext(ShopContext);
  //Restructured data
  const [reStructured, setRestructured] = useState({});
  //finding a transaction
  const [foundTx, setFoundTx] = useState(false);
  //id to find
  const [payId, setPayId] = useState("");
  //dispute return data
  const [disputeType, setDisputeType] = useState();
  const [reason, setReason] = useState();
  const [email, setEmail] = useState();
  const [reciever, setReciever] = useState();
  const [sender, setSender] = useState();
  const [disputeId, setDisputeId] = useState();
  const [paymentStatus, setPaymentStatus] = useState();
  const [amount, setAmount] = useState();
  const [amountCreated, setAmountCreated] = useState();
  const [loading, setLoading] = useState(false);

  const Structure = async () => {
    setLoading(true);
    try {
      if (payId === "") {
        setNotify(true);
        setNotifyType("warn");
        setNotifymsg("Id is empty");
        return;
      }
      const endpoint = `${LOCAL_URL}/dispute/check_id/${payId}`;
      const headers = {
        "Content-Type": "application/json", // You may include this header if required by the API
      };

      const response = await makeCall(endpoint, {}, headers, "get");

      if (!response.status) {
        // console.log("reeedemed modal called");
        setLoading(false);
        setNotify(true);
        setNotifyType("warn");
        setNotifymsg(response.message);
        return;
      }
      //restructuring happens here
      const newObj = {
        type: "Payment",
        payment: {
          sender: {
            account_number: response?.data.account_number,
            account_name: response?.data.account_name,
          },
          amount: response?.data.amount_paid,
        },
        status: response?.data.isPaid,
        amount_created: response?.data.amount_created,
        amount_paid: response?.data.amount_paid,
        id: response?.data.linkID,
        reciever: profileData.username,
        createdAt: response.data.created,
      };
      setLoading(false);
      setDisputeType("transaction");
      setSender(response?.data.account_name);
      setReciever(profileData.username);
      setPaymentStatus(response?.data.isPaid);
      setAmountCreated(response?.data.amount_created);
      setAmount(response?.data.amount_paid);
      setDisputeId(response?.data.linkID);
      setEmail(profileData.email);
      setFoundTx(true);
      setRestructured(newObj);
    } catch (error) {
      setLoading(false);
      setNotify(true);
      setNotifyType("error");
      setNotifymsg(error.response.data.message);
    }
  };

  const createDispute = async (e) => {
    setLoading(true);
    const endpoint = `${LOCAL_URL}/dispute/create_dispute`;
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
    };
    try {
      const response = await makeCall(endpoint, body, headers, "post");

      if (!response.status) {
        console.log("reeedemed modal called");
        setLoading(false);
        setNotify(true);
        setNotifyType("warn");
        setNotifymsg(response.message);
        return;
      }
      setLoading(false);
      setNotify(true);
      setNotifyType("success");
      setNotifymsg("Dispute created");
      setFoundTx(false);
    } catch (error) {
      setLoading(false);
      setNotify(true);
      setNotifyType("error");
      setNotifymsg(error.response.data.message);
    }
  };

  const addId = (e) => {
    // console.log("hey man");
    setPayId(e.target.value);
  };

  useEffect(() => {}, [loading]);

  return (
    <div className="flex flex-col p-14 gap-2 px-28 md:px-8">
      {foundTx ? (
        <TransactioninternalDispute
          disputeData={reStructured}
          setReason={setReason}
          setReciever={setReciever}
          setSender={setSender}
          amountCreated={amountCreated}
          amount={amount}
          paymentStatus={paymentStatus}
          createDispute={createDispute}
          loading={loading}
        />
      ) : (
        <>
          <h2 className="text-lg font-semibold text-[#6E3EFF]">Disputes</h2>

          <div className="">
            <div className="border rounded-md flex p-8 mt-5 gap-3">
              <div className="bg-[#FFF] border items-center w-[70%] md:w-[85%] rounded-md p-2 px-3 flex">
                <input
                  type="search"
                  placeholder="Search tx id to create dispute"
                  onChange={addId}
                  className="bg-transparent outline-none text-sm px-2 w-full  text-[#323232]"
                />
              </div>

              <div
                className="bg-[#6E3EFF] text-white text-center px-3 text-xs py-2 rounded-[10px] cursor-pointer flex justify-center items-center"
                onClick={Structure}
              >
                {loading ? "..." : "Check ID"}
              </div>
            </div>
            {/* End of imput */}
            <div className="pb-28">
              <div className="flex justify-between md:grid md:gap-3 p-5 mt-6 ">
                <Filter />
              </div>

              <DisputeTable />
            </div>
          </div>
        </>
      )}
    </div>
  );
}
