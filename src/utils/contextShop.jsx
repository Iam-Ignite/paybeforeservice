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
  //congratulate user on redeeming
  const [successRedeem, setSuccessRedeem] = useState(false);
  //to check if token is active
  const [tokenActive, setTokenActive] = useState(false);
  //payment modal
  const [paymentModal, setPaymentModal] = useState(false);
  //warn before modal close
  const [closeModalWarn, setCloseModalWarn] = useState({
    status: false,
    type: "",
    code: "",
  });
  //pagination
  const [pagination, setPagination] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [allInfo, setAllInfo] = useState();
  //profile
  const [profileData, setProfileData] = useState(null);
  //show download
  const [showDownload, setShowDownload] = useState(false);
  const [toDownload, setToDownload] = useState();
  //withdrawal
  const [withdrawModal, setWithdrawModal] = useState(false);
  //For filter
  const [filters, setFilters] = useState({
    search: "",
    dateFrom: "",
    dateTo: "",
    otherFilters: [],
  });
  //for dispute
  const [disputeData, setDisputeData] = useState({});
  //for cancelling transactions
  const [cancelled, setCancelled] = useState(false);

  //Useeffect
  useEffect(() => {
    if (notify) {
      setTimeout(() => {
        setNotify(false);
        setNotifymsg("");
      }, 3500);
    }

    if (successRedeem) {
      setTimeout(() => {
        setSuccessRedeem(false);
      }, 3000);
    }
  }, [notify, successRedeem]);

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
    showDownload,
    setShowDownload,
    toDownload,
    setToDownload,
    withdrawModal,
    setWithdrawModal,
    filters,
    setFilters,
    allInfo,
    setAllInfo,
    disputeData,
    setDisputeData,
    closeModalWarn,
    setCloseModalWarn,
    cancelled,
    setCancelled,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
