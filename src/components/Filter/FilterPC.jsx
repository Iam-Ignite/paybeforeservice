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

export default function FilterPC({ data }) {
  const { filters } = useContext(ShopContext);
  const filteredData = useMemo(() => {
    return data.filter((row) => {
      const searchTerm = filters.search.toLowerCase();

      const matchesSearch =
        row.track_id?.toLowerCase().includes(searchTerm) ||
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
            ₦
            {item.type === "Payment"
              ? item.payment.amount
              : item.withdrawal.amount}
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
      ))}
      {/* Table rendering filteredData */}
    </>
  );
}
