/** @format */

import React, { useState } from "react";
import EnterAmount from "./EnterAmount";
import ChooseWithdrawal from "./ChooseWithdrawal";
import SavedAccounts from "./SavedAccounts";
import BankDetails from "./BankDetails";
import ChooseBank from "./ChooseBank";
import ConfimDetails from "./ConfimDetails";
import Otp from "./Otp";
import Complete from "./Complete";
import Fail from "./Fail";

export default function Withdrawal({ setWithdrawModal }) {
  const [selected, setSelected] = useState("amount");
  const [history, setHistory] = useState(["amount"]);
  const [amount, setAmount] = useState();
  const [bankName, setBankName] = useState("");
  const [bankCode, setBankCode] = useState();
  const [bankShortCode, setBankShortCode] = useState();
  const [accNo, setAccNo] = useState("");
  const [accName, setAccname] = useState("");
  const [details, setDetails] = useState("");

  //withdrawal status after everything
  const [status, setStatus] = useState(false);

  const handleback = () => {
    if (history.length > 0) {
      const newHistory = history.slice(0, -1);
      console.log(newHistory, "new history");
      const previousStep = newHistory[newHistory.length - 1];
      console.log(previousStep, "running though six");
      setHistory(newHistory);
      setSelected(previousStep);
    }
  };

  const handleFront = (goto) => {
    console.log("hi hi");

    setSelected(goto);
    const newHistory = [...history, goto];
    console.log(newHistory, "lets goooos");
    setHistory(newHistory);
    console.log(goto, selected, "amount to amount");
  };
  const withdrawprocess = () => {
    switch (selected) {
      case "amount":
        return (
          <EnterAmount
            amount={amount}
            setAmount={setAmount}
            handleFront={handleFront}
            setHistory={setHistory}
          />
        );

      case "choosewithdrawal":
        return (
          <ChooseWithdrawal handleFront={handleFront} setHistory={setHistory} />
        );

      case "savedAccounts":
        return (
          <SavedAccounts
            setAccNo={setAccNo}
            setAccname={setAccname}
            setBankName={setBankName}
            setBankCode={setBankCode}
            handleFront={handleFront}
            setHistory={setHistory}
          />
        );

      case "bankDetails":
        return (
          <BankDetails
            bankName={bankName}
            accNo={accNo}
            setAccNo={setAccNo}
            accName={accName}
            setAccname={setAccname}
            handleFront={handleFront}
            setHistory={setHistory}
            setDetails={setDetails}
            bankShortCode={bankShortCode}
          />
        );

      case "chooseBank":
        return (
          <ChooseBank
            bankName={bankName}
            setBankName={setBankName}
            bankCode={bankCode}
            setBankCode={setBankCode}
            handleFront={handleFront}
            setHistory={setHistory}
            setBankShortCode={setBankShortCode}
          />
        );

      case "confirmDetails":
        return (
          <ConfimDetails
            amount={amount}
            bankName={bankName}
            accNo={accNo}
            accName={accName}
            details={details}
            handleFront={handleFront}
            setHistory={setHistory}
          />
        );

      case "otp":
        return (
          <Otp
            amount={amount}
            bankName={bankName}
            bankCode={bankCode}
            accNo={accNo}
            accName={accName}
            details={details}
            setDetails={setDetails}
            handleFront={handleFront}
            setHistory={setHistory}
            setStatus={setStatus}
          />
        );

      case "complete":
        return (
          <Complete
            amount={amount}
            bankName={bankName}
            accNo={accNo}
            accName={accName}
            details={details}
            status={status}
          />
        );

      case "fail":
        return <Fail handleFront={handleFront} setHistory={setHistory} />;

      default:
        break;
    }
  };

  return (
    <div className="fixed w-full flex justify-center items-center h-full left-0 top-0 z-50 bg-black/70  z-[99999999]">
      <div
        className={`h-auto flex gap-1  flex-col justify-center items-center w-1/3 md:w-full md:mx-2 ${
          selected === "savedAccounts" || selected === "otp"
            ? "bg-[#FAFAFA]"
            : "bg-white"
        } relative p-6 pb-8 rounded-2xl`}
      >
        {selected !== "amount" && (
          <svg
            onClick={() => handleback()}
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 absolute left-8 top-[21px] cursor-pointer"
            viewBox="0 0 24 24"
          >
            <path
              fill="#000"
              d="M20 11H7.83l5.59-5.59L12 4l-8 8l8 8l1.41-1.41L7.83 13H20z"
            />
          </svg>
        )}

        <svg
          onClick={() => setWithdrawModal(false)}
          className="w-3 h-3 absolute right-8 top-6 cursor-pointer"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="black"
          viewBox="0 0 14 14"
        >
          <path
            stroke="black"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
          />
        </svg>

        {withdrawprocess()}
      </div>
    </div>
  );
}
