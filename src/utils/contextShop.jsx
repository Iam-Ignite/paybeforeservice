import React, { createContext, useEffect, useState } from "react";

export const ShopContext = createContext("context");

export const ContextProvider = (props) => {
  //notification and error message
  const [notify, setNotify] = useState(false);
  const [notifyType, setNotifyType] = useState(""); //it can be success, error, warn
  const [notifymsg, setNotifymsg] = useState("");
  const [redeemObj, setRedeemObj] = useState({
    open: false,
    data: {},
  });
  const [successRedeem, setSuccessRedeem] = useState(false);
  const [tokenActive, setTokenActive] = useState(false);
  const [paymentModal, setPaymentModal] = useState(false);
  //pagination
  const [pagination, setPagination] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  //profile
  const [profileData, setProfileData] = useState(null);

  //Useeffect
  useEffect(() => {
    setTimeout(() => {
      setNotify(false);
      setNotifymsg("");
    }, 3500);
  }, [notify]);

  const contextValue = {
    notify,
    setNotify,
    notifyType,
    setNotifyType,
    notifymsg,
    setNotifymsg,
    redeemObj,
    setRedeemObj,
    successRedeem,
    setSuccessRedeem,
    tokenActive,
    setTokenActive,
    paymentModal,
    setPaymentModal,
    pagination,
    setPagination,
    currentPage,
    setCurrentPage,
    profileData,
    setProfileData,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
