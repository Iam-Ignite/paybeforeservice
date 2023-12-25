import React, { useContext, useMemo } from "react";
import { ShopContext } from "../../utils/contextShop";
import {
  TxDownload,
  TxReedem,
  TxiconIn,
  TxiconOut,
  Txstatus,
} from "../Dashboard/Transactioncomp/Txcomp";
import { formatDate } from "../../utils/constants";
import { RedeemIcon } from "../icons/Icons";

export default function FilterMobile({ data }) {
  const { filters } = useContext(ShopContext);

  const filteredData = useMemo(() => {
    return data.filter((row) => {
      const searchTerm = filters.search.toLowerCase();

      const matchesSearch =
        row.type?.toLowerCase().includes(searchTerm) ||
        row.track_id?.toString().toLowerCase().includes(searchTerm) ||
        row.payment?.amount.toString().includes(searchTerm) ||
        row.withdrawal?.amount.toString().includes(searchTerm);

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
  }, [filters, data]);

  return (
    <>
      {/* Inputs to set filters  */}
      {filteredData?.map((item, idx) => (
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
                  ? item.payment.amount
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
      ))}
      {/* Table rendering filteredData */}
    </>
  );
}
