import React from "react";
import {
  Txbalance,
  TxReedem,
  Txdate,
  TxiconIn,
  TxiconOut,
  Txstatus,
  Txtype,
} from "../Transactioncomp/Txcomp";

export default function Txref() {
  const tx = [
    {
      type: "Recieved from client",
      tx_id: "567773DTYY373",
      status: "pending",
      date: "2023-09-01T10:00:00Z",
      amount: 5000,
    },
    {
      type: "Recieved from client",
      tx_id: "567773DTYY373",
      status: "pending",
      date: "2023-09-01T10:00:00Z",
      amount: 5000,
    },
    {
      type: "Recieved from client",
      tx_id: "567773DTYY373",
      status: "pending",
      date: "2023-09-01T10:00:00Z",
      amount: 5000,
    },
    {
      type: "Recieved from client",
      tx_id: "567773DTYY373",
      status: "pending",
      date: "2023-09-01T10:00:00Z",
      amount: 5000,
    },
    {
      type: "Recieved from client",
      tx_id: "567773DTYY373",
      status: "pending",
      date: "2023-09-01T10:00:00Z",
      amount: 5000,
    },
    {
      type: "Recieved from client",
      tx_id: "567773DTYY373",
      status: "pending",
      date: "2023-09-01T10:00:00Z",
      amount: 5000,
    },
  ];

  return (
    <div className="flex justify-between px-2 items-center">
      {/* tx icon and type */}
      <div className="flex items-center gap-2">
        {/* Icon */}
        <Txicon />

        {/* Type */}
        <div className="text-[#555] leading-[20px]">
          <Txtype />
          <Txdate />
        </div>
      </div>

      {/* Amount */}
      <Txbalance />
    </div>
  );
}
