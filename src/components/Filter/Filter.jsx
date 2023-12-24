import React from "react";

export default function Filter({ data }) {
  const [filters, setFilters] = useState({
    search: "",
    dateFrom: "",
    dateTo: "",
    otherFilters: [],
  });

  const filteredData = useMemo(() => {
    return data.filter((row) => {
      // Search filter
      if (filters.search && !row.name.includes(filters.search)) {
        return false;
      }

      // Date filter
      if (filters.dateFrom && new Date(row.date) < new Date(filters.dateFrom)) {
        return false;
      }

      // Other filters
      if (
        filters.otherFilters.length > 0 &&
        !filters.otherFilters.includes(row.category)
      ) {
        return false;
      }

      return true;
    });
  }, [filters, data]);

  return (
    <>
      {/* Inputs to set filters  */}
      <tr className="bg-white border-b mr-10 sm:hidden block" key={idx}>
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
          <Txstatus
            status={
              item.type === "Payment"
                ? item.payment.status
                : item.withdrawal.status
            }
          />
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
            <TxDownload id={item._id} />
          )}
        </td>
      </tr>
      {/* Table rendering filteredData */}
      {/* mobile view table */}
      <div
        className=" justify-between  items-center w-full py-3  flex hidden sm:block"
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
        <div
          className="bg-[#A23EFF] text-white px-3 text-xs py-2 rounded-[20px]"
          // onClick={() =>
          //   setRedeemObj({
          //     open: true,
          //     data: item,
          //   })
          // }
        >
          {item.type === "Payment" && !item.payment.isRedeemed ? (
            <TxReedem item={item} setRedeemObj={setRedeemObj} />
          ) : (
            <TxDownload id={item._id} />
          )}
        </div>
      </div>
    </>
  );
}
