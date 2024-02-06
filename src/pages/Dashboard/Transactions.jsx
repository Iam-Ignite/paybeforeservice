/** @format */
import { useEffect, useState, useContext } from "react";
import RedeemModal from "../../components/Modals/RedeemModal";
import TransTable from "../../components/TableComp/TransTable";
import { FilterIcon, SearchIcon } from "../../components/icons/Icons";
import { ShopContext } from "../../utils/contextShop";
import Filter from "../../components/Filter/Filter";

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
          <Filter />
        </div>

        <TransTable redeemObj={redeemObj} setRedeemObj={setRedeemObj} />
      </div>
    </>
  );
}
