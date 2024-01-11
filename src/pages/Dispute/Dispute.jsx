import React, { useContext, useState } from "react";
import { Footer, Navigation } from "../../components";
import { ShopContext } from "../../utils/contextShop";
import TransactionDispute from "../../components/Dispute/TransactionDispute";
import NewDispute from "../../components/Dispute/NewDispute";

export default function Dispute() {
  const { profileData, disputeData } = useContext(ShopContext);
  const [disputeType, setDisputeType] = useState();
  const [reason, setReason] = useState();
  const [email, setEmail] = useState();
  const [reciever, setReciever] = useState();
  //for searched dispute component
  const [searchedDispute, setSearchedDispute] = useState();
  const [loadSearched, setLoadSearched] = useState();

  const findDispute = async (e) => {
    const endpoint = `https://paybeforeservice.onrender.com/PayBeforeService/v1/dispute/create_dispute/?find=${searchedDispute}`;

    try {
      const response = await axios.get(
        endpoint,
        {
          code: closeModalWarn.code,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json", // You may include this header if required by the API
          },
        }
      );

      if (!response.data.status || response.status !== 200) {
        console.log("reeedemed modal called");
        setNotify(true);
        setNotifyType("warn");
        setNotifymsg(response.data.message);
        return;
      }
      setSuccessRedeem(true);
    } catch (error) {
      setNotify(true);
      setNotifyType("error");
      setNotifymsg(error.response.data.message);
    }
  };

  return (
    <>
      {profileData === null && <Navigation />}
      <div className="p-10">
        <div className="w-full flex justify-between">
          <h1 className="font-bold text-3xl">Open dispute</h1>

          <div className="bg-[#FFF] border rounded-md p-2 px-3 flex w-[30%] md:w-[20%]">
            <input
              type="text"
              placeholder="Find dispute by id or email"
              onChange={findDispute}
              className="bg-transparent outline-none text-sm px-2 w-full text-[#323232]"
            />
          </div>
        </div>

        <div className="mt-5">
          {searchedDispute ? (
            <SearchedDispute
              loadSearched={loadSearched}
              searchedDispute={searchedDispute}
            />
          ) : (
            <>
              {/* Reference */}
              <div className="w-full text-start text-[#555] text-xs mb-2 font-semibold">
                {Object.keys(disputeData).length !== 0
                  ? "REFERS TO ORDER:"
                  : "REFER TO ISSUE"}
              </div>
              {/* Details of the dispute */}
              {Object.keys(disputeData).length !== 0 ? (
                <TransactionDispute disputeData={disputeData} />
              ) : (
                <NewDispute />
              )}

              <div className="w-full flex justify-center items-center mt-8">
                <button className="bg-primary px-10 py-3 rounded-[10px] text-white font-ui-bold text-[16px] border-none">
                  Submit
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      {/* FOOTER */}
      {profileData === null && <Footer />}
    </>
  );
}
