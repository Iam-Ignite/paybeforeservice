/** @format */

import React, { useContext, useMemo, useState } from "react";
import FilterPC from "../Filter/FilterPC";
import FilterMobile from "../Filter/FilterMobile";
import {
  TxDownload,
  TxReedem,
  TxiconIn,
  TxiconOut,
  Txstatus,
  Arrows,
  TxCancel,
} from "../Dashboard/Transactioncomp/Txcomp";
import { RedeemIcon, WithdrawIcon } from "../icons/Icons";
import axios from "axios";
import { useEffect } from "react";
import { ShopContext } from "../../utils/contextShop";
import { formatDate } from "../../utils/constants";

function TransTable({ redeemObj, setRedeemObj }) {
  const [data, setData] = useState(null);
  const [switchAmounts, setSwitchAmounts] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState();
  const [switchAmountType, setSwitchAmountType] = useState("amount_created");

  const {
    setNotify,
    setNotifyType,
    setNotifymsg,
    paymentModal,
    successRedeem,
    pagination,
    setPagination,
    currentPage,
    setCurrentPage,
    filters,
    allInfo,
    setAllInfo,
  } = useContext(ShopContext);

  const token = localStorage.getItem("token");
  const getTransaction = async () => {
    const endpoint = `https://paybeforeservice.onrender.com/PayBeforeService/v1/transaction/getTx?page=${currentPage}`;

    try {
      const response = await axios.get(endpoint, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json", // You may include this header if required by the API
        },
      });

      if (response.data.status) {
        // Process the response data as needed
        setData(response.data.data);
        setPagination(response.data.pagination);
        setAllInfo(response.data.allTx);
      } else {
        if (response.data.data.message === "invalid token")
          setTokenActive(false);

        setNotify(true);
        setNotifyType("warn");
        setNotifymsg(response.data.data.message);
        return;
      }
    } catch (error) {
      // setNotify(true);
      // setNotifyType("error");
      // setNotifymsg(error);
      console.log(error);
    }
  };

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const NumSelectPage = (page) => {
    setCurrentPage(page);
  };

  const hasActiveFilters = useMemo(() => {
    return Boolean(filters.search || filters.dateTo || filters.dateFrom);
  }, [filters]);

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

  useEffect(() => {
    getTransaction();
    console.log(data, "set data here");
  }, [paymentModal, successRedeem, currentPage]);

  return (
    <div className="relative">
      <div className="m-5 border rounded-2xl flex justify-center overflow-hidden h-96 bg-white px-4 md:px-0 py-2">
        {data?.length !== 0 ? (
          <div className="relative  overflow-x-auto pt-4 md:pt-0 sm:rounded-lg w-[100%] px-0 md:px-[10px]">
            <table className="max-w-[none] w-full text-sm text-left rtl:text-right text-[#555] ">
              <thead className="text-xs text-[#555555] uppercase table-auto">
                <tr>
                  <th scope="col" className="px-5 py-3">
                    Transactions
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Transaction ID
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Time/Date
                  </th>

                  <th scope="col" className="px-6 py-3">
                    Amount
                  </th>
                </tr>
              </thead>
              <tbody>
                {hasActiveFilters ? (
                  <FilterPC setRedeemObj={setRedeemObj} data={allInfo} />
                ) : (
                  data?.map((item, idx) => (
                    <tr className="bg-white border-b mr-10" key={idx}>
                      <th
                        scope="row"
                        className="px-4 py-4 font-medium text-gray-900 flex items-center justify-center gap-3"
                      >
                        <td scope="row" className="font-medium text-gray-900">
                          {item.type === "Payment" ? (
                            <TxiconIn />
                          ) : (
                            <TxiconOut />
                          )}
                        </td>
                        {item.type}
                      </th>
                      <td className="px-6 py-4">{item.track_id}</td>
                      <td className="px-6 py-4">
                        <Txstatus status={item.status} />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {formatDate(item.createdAt)}
                      </td>
                      <td className="px-6 py-4 flex items-center gap-2 relative">
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
                            <div className="font-semibold text-[7px] text-[#555] ">
                              P
                            </div>
                          )}
                          {item.type === "Payment" && (
                            <Arrows
                              data={switchAmounts}
                              index={idx}
                              openSelected={openSelected}
                            />
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
                                <span className="font-semibold text-[7px] text-[#555] p-2">
                                  C
                                </span>
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
                                <span className="font-semibold text-[7px] text-[#555] p-2">
                                  P
                                </span>
                              </div>
                            </div>
                          )}
                        </div>
                      </td>

                      <td className="px-6 py-4 ">
                        {/* <TxReedem item={item} setRedeemObj={setRedeemObj} /> */}
                        {item.type === "Payment" &&
                        item.payment.isPaid === "pending" ? (
                          <TxCancel data={item.payment} />
                        ) : item.type === "Payment" &&
                          item.payment.isPaid === "complete" &&
                          !item.payment.isRedeemed ? (
                          <TxReedem item={item} setRedeemObj={setRedeemObj} />
                        ) : (
                          <TxDownload data={item} />
                        )}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>

            {/* mobile view table */}
            <div className="hidden sm:block">
              {hasActiveFilters ? (
                <FilterMobile setRedeemObj={setRedeemObj} data={allInfo} />
              ) : (
                data?.map((item, idx) => (
                  <div
                    className=" justify-between  items-center w-full py-3  flex"
                    key={idx}
                  >
                    <div className="flex justify-between items-center md:mr-8">
                      <div className="rounded-[100%] bg-[#a23eff33] p-2">
                        <RedeemIcon />
                      </div>
                      <div className="text-[#555] ">
                        <div className="font-semibold text-xs ml-2 text-[#0D0033]">
                          {item.type}
                        </div>
                        <div className="text-[#0D0033] text-xs ml-2 font-bold">
                          ₦
                          {item.type === "Payment"
                            ? item.payment.amount_to_recieve
                            : item.withdrawal.amount}
                        </div>
                        <div className="font-meduim  ml-2 text-xs">
                          {formatDate(item.createdAt)}
                        </div>
                      </div>
                    </div>
                    {item.type === "Payment" && !item.payment.isRedeemed ? (
                      <TxReedem item={item} setRedeemObj={setRedeemObj} />
                    ) : (
                      <TxDownload data={item} />
                    )}
                  </div>
                ))
              )}
            </div>
          </div>
        ) : (
          <div className="flex justify-center flex-col mt-20 items-center ">
            <img src="./empty.svg" className="w-28 h-28" alt="" />
            <p className="font-semibold text-xs text-black">
              You have no transactions
            </p>
            <p className="font-normal text-xs text-gray-600">
              Your payments would show up here after you have made a successful
              transaction
            </p>
          </div>
        )}
      </div>
      <nav className="absolute right-8">
        <ul className="inline-flex -space-x-px text-sm">
          {currentPage > 1 && (
            <li onClick={prevPage}>
              <a
                href="#"
                className="flex items-center justify-center px-3 h-8 ms-0 leading-tight bg-[#6E3EFF] rounded-md"
              >
                Previous
              </a>
            </li>
          )}

          {data?.length >= 4 && (
            <PageNum
              NumSelectPage={NumSelectPage}
              current={currentPage + 1}
              total={data?.length / 4} // total pages
            />
          )}

          {data?.length >= 4 && (
            <li onClick={nextPage}>
              <a
                href="#"
                className="flex items-center justify-center px-3 h-8 leading-tight bg-[#6E3EFF] text-white rounded-md "
              >
                Next
              </a>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
}

export default TransTable;

export function PageNum({ current, total, NumSelectPage }) {
  return total > 3 ? (
    <li>
      <a
        onClick={() => NumSelectPage(current)}
        className="flex items-center justify-center px-3 h-8 leading-tight bg-white text-black"
      >
        {current}...{total}
      </a>
    </li>
  ) : (
    <a
      className="flex items-center justify-center text-black px-3 h-8"
      onClick={() => NumSelectPage(current)}
    >
      {current}
    </a>
  );
}
