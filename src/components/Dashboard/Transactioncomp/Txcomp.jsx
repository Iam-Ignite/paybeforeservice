/* eslint-disable react/prop-types */
/**
 * eslint-disable react/prop-types
 *
 * @format
 */

export const Txicon = () => {
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

export const Txtype = ({ txtype }) => {
  return (
    <div className="font-semibold text-xs ml-2 text-[#0D0033]">{txtype}</div>
  );
};

export const Txdate = ({ date }) => {
  const formatDate = (dateString) => {
    const options = {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      // minute: '2-digit',
      // second: '2-digit',
      // timeZoneName: 'short',
    };
    const formattedDate = new Date(dateString).toLocaleString("en-US", options);
    return formattedDate;
  };
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
  // setNotify,
  // setNotifyType,
  // setNotifymsg,
  const { setNotify, setNotifyType, setNotifymsg } = useContext(ShopContext);
  const openRedeem = (item) => {
    console.log(item, "omo ooo oo");
    if (!item.isPaid) {
      setNotify(true);
      setNotifyType("warn");
      setNotifymsg("Tx not paid for cannot redeem");
      return;
    }
    setRedeemObj({
      open: true,
      data: item,
    });
  };

  return (
    <div
      className="bg-[#A23EFF] text-white px-3 text-xs py-2 rounded-[20px] cursor-pointer"
      onClick={() => openRedeem(item)}
    >
      Redeem
    </div>
  );
};
