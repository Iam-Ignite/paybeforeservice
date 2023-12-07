/** @format */

import { useEffect, useState } from "react";
import Topaction from "../../components/Dashboard/DashboardComp/Topaction";
import Wallet from "../../components/Dashboard/DashboardComp/Wallet";
import Txhome from "../../components/Dashboard/Transactioncomp/Txhome";
import Txref from "../../components/Dashboard/Refcomp/Txref";
import Userheader from "../../components/Dashboard/Userheader";
import PaymentModal from "../../components/Dashboard/PaymentModal";
import axios from "axios";
import RedeemModal from "../../components/Dashboard/RedeemModal";

export default function Dashboard() {
  const [paymentModal, setPaymentModal] = useState(false);
  const [redeemModal, setRedeemModal] = useState(false);
  const [data, setData] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [profileData, setProfileData] = useState(null);

  const token = localStorage.getItem("token");

  useEffect(() => {
    // Function to make the GET request
    const fetchData = async () => {
      try {
        // Replace with your actual bearer token

        const response = await fetch(
          "https://paybeforeservice.onrender.com/PayBeforeService/v1/user/getProfile",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          console.log(data, "first one first");
          setProfileData(data.data);
        } else {
          console.error("Failed to fetch profile data");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    // Call the function to fetch data
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getTransaction = async () => {
    const endpoint =
      "https://paybeforeservice.onrender.com/PayBeforeService/v1/transaction/getTx";

    try {
      const response = await axios.get(endpoint, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json", // You may include this header if required by the API
        },
      });

      if (response.status >= 200 && response.status < 300) {
        // Process the response data as needed
        setData(response.data.data);
      } else {
        console.log("Failed to fetch transaction data");
      }
    } catch (error) {
      console.error(error);
    }
  };

  // Call the function to make the GET request
  useEffect(() => {
    getTransaction();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
    <div className="p-7 mt-3 pb-24">
      <RedeemModal setRedeemModal={setRedeemModal} redeemModal={redeemModal} />
      <div className="">
        {windowWidth > 768 ? (
          <Topaction setPaymentModal={setPaymentModal} />
        ) : (
          <div className="w-full flex justify-between items-center">
            <Userheader />

            <div className="text-[#000]">
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.74994 19.15C2.33994 19.15 1.99994 18.81 1.99994 18.4V12.7C1.94994 9.98999 2.95994 7.42999 4.83994 5.50999C6.71994 3.59999 9.23994 2.54999 11.9499 2.54999C17.4899 2.54999 21.9999 7.05999 21.9999 12.6V18.3C21.9999 18.71 21.6599 19.05 21.2499 19.05C20.8399 19.05 20.4999 18.71 20.4999 18.3V12.6C20.4999 7.88999 16.6699 4.04999 11.9499 4.04999C9.63994 4.04999 7.49994 4.93999 5.90994 6.55999C4.30994 8.18999 3.45994 10.36 3.49994 12.68V18.39C3.49994 18.81 3.16994 19.15 2.74994 19.15Z"
                  fill="#555555"
                />
                <path
                  d="M5.94 12.95H5.81C3.71 12.95 2 14.66 2 16.76V18.64C2 20.74 3.71 22.45 5.81 22.45H5.94C8.04 22.45 9.75 20.74 9.75 18.64V16.76C9.75 14.66 8.04 12.95 5.94 12.95Z"
                  fill="#555555"
                />
                <path
                  d="M18.19 12.95H18.06C15.96 12.95 14.25 14.66 14.25 16.76V18.64C14.25 20.74 15.96 22.45 18.06 22.45H18.19C20.29 22.45 22 20.74 22 18.64V16.76C22 14.66 20.29 12.95 18.19 12.95Z"
                  fill="#555555"
                />
              </svg>
            </div>
          </div>
        )}
      </div>

      <div className="mt-7">
        <Wallet balances={profileData?.balances} />
      </div>

      {windowWidth <= 768 && (
        <div className="mt-7">
          <Topaction setPaymentModal={setPaymentModal} />
        </div>
      )}

      <PaymentModal
        paymentModal={paymentModal}
        setPaymentModal={setPaymentModal}
      />

      {/* <RedeemModal/> */}
      <div className="grid md:flex grid-cols-3 md:flex-col-reverse items-start gap-6 mt-10">
        {/* Left sie with transaction */}
        <div className="md:col-span-full md:w-full 2xl:col-span-2">
          {/* Info */}
          <div className="flex justify-between text-[#555]">
            <span className="font-semibold text-xs text-[#555]">
              Recent Transactions
            </span>
            <span className="font-semibold text-xs text-[#555]">View all</span>
          </div>

          {/* Main content */}
          <div className="bg-[#fff] border border-[#DADADA] rounded-2xl w-100  p-4 md:px-4 md:p-3 mt-2 h-80">
            {profileData?.recent_transactions.length !== 0 ? (
              <Txhome
                windowWidth={windowWidth}
                data={profileData?.recent_transactions}
              />
            ) : (
              <div className="flex justify-center flex-col mt-20 items-center ">
                <img src="/src/assets/empty.svg" className="w-28 h-28" alt="" />
                <p className="font-semibold text-xs text-black">
                  You have no transactions
                </p>
                <p className="font-normal text-xs text-gray-600">
                  Your payments would show up here after you have made a
                  successful transaction
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Right side with referrals */}
        <div className="md:col-span-full 2xl:col-span-0 md:w-full">
          {/* info */}
          <div className="text-[#555] font-semibold mb-2 text-xs">
            Referral Link
          </div>
          {/* Search */}
          <div className="bg-[#FFF] border rounded-md p-2 px-3 flex">
            <input
              type="text"
              value={`https://www.example.com/randht${profileData?.userReferralID}`}
              className="bg-transparent outline-none text-sm px-2 w-full text-[#323232]"
            />
            <svg
              className="cursor-pointer"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.75 17.25V20.625C15.75 21.246 15.246 21.75 14.625 21.75H4.875C4.57663 21.75 4.29048 21.6315 4.0795 21.4205C3.86853 21.2095 3.75 20.9234 3.75 20.625V7.875C3.75 7.254 4.254 6.75 4.875 6.75H6.75C7.25257 6.74966 7.7543 6.79114 8.25 6.874M15.75 17.25H19.125C19.746 17.25 20.25 16.746 20.25 16.125V11.25C20.25 6.79 17.007 3.089 12.75 2.374C12.2543 2.29114 11.7526 2.24966 11.25 2.25H9.375C8.754 2.25 8.25 2.754 8.25 3.375V6.874M15.75 17.25H9.375C9.07663 17.25 8.79048 17.1315 8.5795 16.9205C8.36853 16.7095 8.25 16.4234 8.25 16.125V6.874M20.25 13.5V11.625C20.25 10.7299 19.8944 9.87145 19.2615 9.23852C18.6286 8.60558 17.7701 8.25 16.875 8.25H15.375C15.0766 8.25 14.7905 8.13148 14.5795 7.9205C14.3685 7.70952 14.25 7.42337 14.25 7.125V5.625C14.25 5.18179 14.1627 4.74292 13.9931 4.33345C13.8235 3.92397 13.5749 3.55191 13.2615 3.23852C12.9481 2.92512 12.576 2.67652 12.1666 2.50691C11.7571 2.3373 11.3182 2.25 10.875 2.25H9.75"
                stroke="#0D0033"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* Referrals showing */}
          <div className="flex flex-col justify-between md:hidden 2xl:block">
            {/* Info */}
            <div className="flex justify-between mt-3 text-[#555] w-full">
              <span className="font-semibold text-xs">Referrals</span>
              <span className="font-semibold text-xs">View all</span>
            </div>

            {/* Main content */}
            <div className="bf-[#fff] border border-[#DADADA] rounded-2xl w-100  p-2 bg-[#FFF] mt-3">
              {/* <Txref /> */}
              <div className="flex justify-center flex-col items-center my-5">
                <img src="/src/assets/empty.svg" className="w-28 h-28" alt="" />
                <p className="font-semibold text-xs text-black">
                  You have no refferals
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
