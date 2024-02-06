import React, { useContext, useMemo, useState } from "react";
import { ShopContext } from "../../utils/contextShop";
import {
  Amounts,
  TxDownload,
  TxReedem,
  TxiconIn,
  TxiconOut,
  Txstatus,
} from "../Dashboard/Transactioncomp/Txcomp";
import { formatDate } from "../../utils/constants";

export default function FilterPC({ setRedeemObj, data }) {
  const { filters } = useContext(ShopContext);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowObj, setWindowObj] = useState();

  const filteredData = useMemo(() => {
    try {
      return data.filter((row) => {
        const searchTerm = filters.search.toLowerCase();

        const matchesSearch =
          row.track_id?.toLowerCase().includes(searchTerm) ||
          row.payment?.amount_created.toString().includes(searchTerm) ||
          row.payment?.amount_paid.toString().includes(searchTerm) ||
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
    } catch (error) {
      console.log(error);
    }
  }, [filters, data]);

  useEffect(() => {
    setWindowObj(window);
  }, [copy]);

  useEffect(() => {
    // Update the windowWidth state when the window is resized
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    console.log(profileData, "pro pro");

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth]);

  return (
    <>
      {/* Inputs to set filters  */}
      {filteredData?.map((item, idx) =>
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
      )}
      {/* Table rendering filteredData */}
    </>
  );
}
