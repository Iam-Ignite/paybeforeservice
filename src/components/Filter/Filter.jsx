import React, { useContext, useEffect, useMemo, useState } from "react";
import { ShopContext } from "../../utils/contextShop";
import { FilterIcon, RedeemIcon, SearchIcon } from "../icons/Icons";
import {
  Amounts,
  TxDownload,
  TxReedem,
  TxiconIn,
  TxiconOut,
  Txstatus,
} from "../Dashboard/Transactioncomp/Txcomp";
import { formatDate } from "../../utils/constants";

export default function Filter() {
  const { filters, setFilters } = useContext(ShopContext);

  function handleSearchChange(event) {
    setFilters((prevFilters) => ({
      ...prevFilters,
      search: event.target.value,
    }));
  }

  function handleDateFromChange(event) {
    setFilters((prevFilters) => ({
      ...prevFilters,
      dateFrom: event.target.value,
    }));
  }

  function handleDateToChange(event) {
    setFilters((prevFilters) => ({
      ...prevFilters,
      dateTo: event.target.value,
    }));
  }

  return (
    <div className="flex items-center md:grid gap-4 md:gap-3 ">
      <div className="bg-[#FFF] border items-center md:w-[85%] rounded-md p-2 px-3 flex">
        <input
          type="search"
          placeholder="Search"
          value={filters.search}
          onChange={handleSearchChange}
          className="bg-transparent outline-none text-sm px-2 w-full  text-[#323232]"
        />
        <label htmlFor="date">
          <SearchIcon />
        </label>
      </div>
      <div className="flex gap-3 ">
        <div className="bg-[#FFF] border rounded-md p-2 px-3 flex md:w-[30%]">
          <input
            type="Date"
            value={filters.dateFrom}
            onChange={handleDateFromChange}
            className="bg-transparent outline-none text-xs px-2 w-full  text-[#707070]"
          />
          {/* <label htmlFor="date">
                    <DateIcon/>
                   </label> */}
        </div>
        <div className="bg-[#FFF] border rounded-md p-2 px-3 flex md:w-[30%]">
          <input
            type="date"
            value={filters.dateTo}
            onChange={handleDateToChange}
            id="date1"
            className="bg-transparent outline-none text-xs px-2 w-full  text-[#707070]"
          />
          {/* <label htmlFor="date1">
                    <DateIcon/>
                   </label> */}
        </div>
        <button className="bg-[#6E3EFF] border items-center text-xs justify-center rounded-md p-2 px-3 flex">
          <label htmlFor="date1">
            <FilterIcon />
          </label>
          Filter
        </button>
      </div>
    </div>
  );
}

export const FilterResult = ({ type, data, setRedeemObj }) => {
  const { filters, openDetails, moreDetails, detailIndex } =
    useContext(ShopContext);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowObj, setWindowObj] = useState();

  const filteredData = useMemo(() => {
    try {
      return data.filter((row) => {
        console.log("they are calling me ooooo");
        const searchTerm = filters.search.toLowerCase();

        const matchesSearch =
          row.track_id?.toLowerCase().includes(searchTerm) ||
          row.payment?.amount_created.toString().includes(searchTerm) ||
          row.payment?.amount_paid.toString().includes(searchTerm) ||
          row.withdrawal?.amount.toString().includes(searchTerm) ||
          row.type?.toLowerCase().includes(searchTerm) ||
          row.status?.toLowerCase().includes(searchTerm) ||
          row.payment_status?.toLowerCase().includes(searchTerm) ||
          row.dispute_id?.toString().toLowerCase().includes(searchTerm) ||
          row.amount?.toString().includes(searchTerm) ||
          row.email?.toLowerCase().includes(searchTerm) ||
          row.sender?.toLowerCase().includes(searchTerm) ||
          row.reciever?.toLowerCase().includes(searchTerm) ||
          row.reason?.toLowerCase().includes(searchTerm) ||
          row.client_tx?.toString().toLowerCase().includes(searchTerm) ||
          row.refund?.toLowerCase().includes(searchTerm) ||
          row.owner?.toLowerCase().includes(searchTerm);

        if (filters.search && !matchesSearch) {
          return false;
        }

        const isAfterDate =
          !filters.dateFrom ||
          new Date(row.createdAt) >= new Date(filters.dateFrom);

        if (filters.dateFrom && !isAfterDate) {
          return false;
        }

        return true;
      });
    } catch (error) {
      console.log(error);
    }
  }, [filters, data]);

  useEffect(() => {
    setWindowObj(window);
  }, []);

  useEffect(() => {
    // Update the windowWidth state when the window is resized
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    // console.log(profileData, "pro pro");

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth]);

  return (
    <>
      {filteredData?.map((item, idx) =>
        type === "transaction" ? (
          windowWidth <= 768 ? (
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
                    <Amounts item={item} idx={idx} />
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
          ) : (
            <tr className="bg-white border-b mr-10" key={idx}>
              <th
                scope="row"
                className="px-4 py-4 font-medium text-gray-900 flex items-center justify-center gap-3"
              >
                <td scope="row" className="font-medium pl-2 text-gray-900">
                  {item.type === "Payment" ? <TxiconIn /> : <TxiconOut />}
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
              <td className="px-6 py-4 ">
                <Amounts item={item} idx={idx} />
              </td>
              <td className="px-6 py-4 ">
                {/* <TxReedem item={item} setRedeemObj={setRedeemObj} /> */}
                {item.type === "Payment" && !item.payment.isRedeemed ? (
                  <TxReedem item={item} setRedeemObj={setRedeemObj} />
                ) : (
                  <TxDownload data={item} />
                )}
              </td>
            </tr>
          )
        ) : type === "dispute" ? (
          windowWidth <= 768 ? (
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
                    <Amounts item={item} idx={idx} />
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
          ) : (
            <tr className="bg-white border-b mr-10" key={idx}>
              <th
                scope="row"
                className="px-4 py-4 font-medium text-gray-900 flex items-center justify-center gap-3"
              >
                <td scope="row" className="font-medium text-gray-900">
                  {item.type === "transaction" ? <TxiconIn /> : <TxiconOut />}
                </td>
                {item.type}
              </th>
              <td className="px-6 py-4">{item.dispute_id}</td>
              <td className="px-6 py-4">
                <Txstatus status={item.status} />
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {formatDate(item.createdAt)}
              </td>
              {item?.amount && (
                <td className="px-6 py-4 flex items-center gap-2 relative">
                  {item.amount}
                </td>
              )}
            </tr>
          )
        ) : windowWidth <= 768 ? (
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
                  ₦{item.amount}
                </div>
                <div className="font-meduim  ml-2 text-xs">
                  {formatDate(item.createdAt)}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <tr className="bg-white border-b " key={idx}>
            <th
              scope="row"
              className="px-4 py-4 font-medium text-gray-900 flex items-center justify-center gap-3"
            >
              <td scope="row" className="font-medium pl-2 text-gray-900">
                <TxiconIn />
              </td>
              {item.type}
            </th>
            <td className="px-6 py-4">{item._id}</td>
            <td className="px-6 py-4">
              <Txstatus status={item.status} />
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              {formatDate(item.createdAt)}
            </td>
            <td className="px-6 py-4 ">₦{item.amount}</td>
          </tr>
        )
      )}
    </>
  );
};
