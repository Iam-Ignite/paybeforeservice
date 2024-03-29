/** @format */
import { useEffect, useState, useContext } from "react";
import RedeemModal from "../../components/Modals/RedeemModal";
import TransTable from "../../components/TableComp/TransTable";
import { FilterIcon, SearchIcon } from "../../components/icons/Icons";
import { ShopContext } from "../../utils/contextShop";

export default function Transactions() {
  const { redeemObj, setRedeemObj, filters, setFilters } =
    useContext(ShopContext);

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
    <>
      {redeemObj?.open && (
        <RedeemModal redeemObj={redeemObj} setRedeemObj={setRedeemObj} />
      )}

      <div className="pb-28">
        <div className="flex justify-between md:grid md:gap-3 p-5 mt-6 ">
          <h1 className="text-black">Transactions</h1>
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
        </div>

        <TransTable redeemObj={redeemObj} setRedeemObj={setRedeemObj} />
      </div>
    </>
  );
}
