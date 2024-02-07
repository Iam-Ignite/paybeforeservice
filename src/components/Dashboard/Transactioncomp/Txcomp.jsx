/* eslint-disable react/prop-types */
/**
 * eslint-disable react/prop-types
 *
 * @format
 */

import { useContext, useState } from "react";
import { ShopContext } from "../../../utils/contextShop";
import { formatDate } from "../../../utils/constants";

export const TxiconIn = () => {
  return (
    <div className="rounded-[100%] flex justify-center items-center bg-[#a23eff33] p-2">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM8.64 7.15C8.93 6.86 9.41 6.86 9.7 7.15L14.08 11.53V9.1C14.08 8.69 14.42 8.35 14.83 8.35C15.24 8.35 15.58 8.69 15.58 9.1V13.34C15.58 13.44 15.56 13.53 15.52 13.63C15.44 13.81 15.3 13.96 15.11 14.04C15.02 14.08 14.92 14.1 14.82 14.1H10.58C10.17 14.1 9.83 13.76 9.83 13.35C9.83 12.94 10.17 12.6 10.58 12.6H13.01L8.64 8.21C8.35 7.92 8.35 7.45 8.64 7.15ZM18.24 17.22C16.23 17.89 14.12 18.23 12 18.23C9.88 18.23 7.77 17.89 5.76 17.22C5.37 17.09 5.16 16.66 5.29 16.27C5.42 15.88 5.84 15.66 6.24 15.8C9.96 17.04 14.05 17.04 17.77 15.8C18.16 15.67 18.59 15.88 18.72 16.27C18.84 16.67 18.63 17.09 18.24 17.22Z"
          fill="#A23EFF"
        />
      </svg>
    </div>
  );
};

export const TxiconOut = () => {
  return (
    <div className="rounded-[100%] flex justify-center items-center bg-[#a23eff33] p-2">
      <svg
        width="26"
        height="25"
        viewBox="0 0 26 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.89152 22.5338L17.2712 22.4656C20.9111 22.436 23.0634 20.2484 23.0338 16.6085L22.9657 8.2388C22.936 4.58892 20.7485 2.43665 17.1086 2.46625L8.73885 2.53433C5.09897 2.56394 2.94669 4.75152 2.9763 8.3914L3.04446 16.7711C3.06407 20.4111 5.25164 22.5634 8.89152 22.5338ZM16.3994 17.3225C16.1118 17.6149 15.6318 17.6188 15.3394 17.3311L10.9239 12.9869L10.9437 15.4168C10.947 15.8268 10.6098 16.1696 10.1998 16.1729C9.78984 16.1762 9.44709 15.839 9.44375 15.429L9.40927 11.1892C9.40845 11.0892 9.42772 10.999 9.46691 10.8987C9.54544 10.718 9.68422 10.5669 9.87356 10.4854C9.96323 10.4446 10.0631 10.4238 10.1631 10.423L14.4029 10.3885C14.8129 10.3852 15.1557 10.7224 15.159 11.1324C15.1623 11.5424 14.8251 11.8851 14.4151 11.8885L11.9852 11.9082L16.3908 16.2625C16.6831 16.5502 16.6869 17.0202 16.3994 17.3225ZM6.7178 7.33093C8.72228 6.6446 10.8294 6.28745 12.9494 6.27021C15.0693 6.25297 17.182 6.57579 19.1974 7.22942C19.5884 7.35625 19.8019 7.78452 19.6751 8.17557C19.5483 8.56661 19.1301 8.79002 18.729 8.65328C14.999 7.44358 10.9091 7.47684 7.19933 8.74706C6.8104 8.88023 6.37871 8.67373 6.24554 8.2848C6.12229 7.88579 6.32887 7.4641 6.7178 7.33093Z"
          fill="#A23EFF"
        />
      </svg>
    </div>
  );
};

export const Txtype = ({ txtype }) => {
  return (
    <div className="font-semibold text-xs ml-2 text-[#0D0033]">{txtype}</div>
  );
};

export const Txdate = ({ date }) => {
  return <div className="font-meduim  ml-2 text-xs">{formatDate(date)}</div>;
};

export const Txstatus = ({ status }) => {
  return (
    <div className="bg-[#a23eff33] flex justify-center items-center rounded-[18px] px-2 py-1 text-center">
      <span className="text-[#A23EFF] text-xs font-medium">{status}</span>
    </div>
  );
};

export const Txbalance = ({ amount }) => {
  return <div className="text-[#0D0033] text-xs ml-2 font-bold">₦{amount}</div>;
};

// eslint-disable-next-line no-unused-vars
export const TxReedem = ({ item, setRedeemObj }) => {
  const { setNotify, setNotifyType, setNotifymsg } = useContext(ShopContext);
  const openRedeem = (item) => {
    console.log(item, "omo ooo oo");
    if (item?.payment.isPaid === "incomplete") {
      setNotify(true);
      setNotifyType("warn");
      setNotifymsg("Payment is not comoplete");
      return;
    }

    if (item?.payment.isPaid === "pending") {
      setNotify(true);
      setNotifyType("warn");
      setNotifymsg("Payment has not been made");
      return;
    }
    setRedeemObj({
      open: true,
      data: item,
    });
  };

  return (
    <div
      className="bg-[#A23EFF] text-white text-center px-3 text-xs py-2 rounded-[20px] cursor-pointer"
      onClick={() => openRedeem(item)}
    >
      Redeem
    </div>
  );
};

export const TxCancel = ({ data }) => {
  const { closeModalWarn, setCloseModalWarn } = useContext(ShopContext);

  return (
    <div
      onClick={() => {
        setCloseModalWarn({
          status: true,
          type: "close_payment",
          code: data.linkID,
        });
      }}
      className=" bg-gradient-to-b from-[#6E3EFF] to-[#A23EFF]  text-white text-center px-3 text-xs py-2 rounded-[20px] cursor-pointer"
    >
      Cancel
    </div>
  );
};

export const TxDownload = ({ data }) => {
  const { setToDownload, setShowDownload } = useContext(ShopContext);
   console.log(data, "checks and opinion");
  return (
    <div
      onClick={() => {
        setToDownload(data);
        setShowDownload(true);
      }}
      className="bg-[#6E3EFF] text-white text-center px-3 text-xs py-2 rounded-[20px] cursor-pointer"
    >
      Download
    </div>
  );
};

export const Arrows = ({ data, index, openSelected }) => {
  return !data ? (
    <svg
      onClick={() => openSelected(index)}
      xmlns="http://www.w3.org/2000/svg"
      width={15}
      height={15}
      className="cursor-pointer"
      viewBox="0 0 24 24"
    >
      <path
        fill="#888888"
        d="M12 14.975q-.2 0-.375-.062T11.3 14.7l-4.6-4.6q-.275-.275-.275-.7t.275-.7q.275-.275.7-.275t.7.275l3.9 3.9l3.9-3.9q.275-.275.7-.275t.7.275q.275.275.275.7t-.275.7l-4.6 4.6q-.15.15-.325.213t-.375.062"
      />
    </svg>
  ) : (
    <svg
      onClick={() => openSelected()}
      xmlns="http://www.w3.org/2000/svg"
      width={15}
      height={15}
      className="cursor-pointer"
      viewBox="0 0 24 24"
    >
      <path
        fill="#888888"
        d="m12 10.8l-3.9 3.9q-.275.275-.7.275t-.7-.275q-.275-.275-.275-.7t.275-.7l4.6-4.6q.3-.3.7-.3t.7.3l4.6 4.6q.275.275.275.7t-.275.7q-.275.275-.7.275t-.7-.275z"
      />
    </svg>
  );
};

export const Amounts = ({ item, idx }) => {
  const [switchAmounts, setSwitchAmounts] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState();
  const [switchAmountType, setSwitchAmountType] = useState("amount_created");

  const openSelected = (index) => {
    console.log(index, "called");
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
    <div className="flex items-end gap-1">
      ₦
      {item.type === "Payment"
        ? switchAmountType === "amount_created"
          ? item.payment.amount_created
          : item.payment.amount_paid
        : item.withdrawal.amount}
      {switchAmountType === "amount_created" ? (
        <div className="font-semibold text-[7px] text-[#555] ">
          <span>C</span>
        </div>
      ) : (
        <div className="font-semibold text-[7px] text-[#555] ">P</div>
      )}
      {item.type === "Payment" && (
        <Arrows data={switchAmounts} index={idx} openSelected={openSelected} />
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
            <span className="font-semibold text-[7px] text-[#555] p-2">C</span>
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
            <span className="font-semibold text-[7px] text-[#555] p-2">P</span>
          </div>
        </div>
      )}
    </div>
  );
};
