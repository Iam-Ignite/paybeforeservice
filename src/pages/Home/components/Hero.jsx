/** @format */

import { useEffect, useState } from "react";
import io from "socket.io-client";

// COMPONENTS
import TransactModal from "./TransactModal";

// ASSETS
import appleIcon from "../../../assets/apple.png";
import playIcon from "../../../assets/playstore.png";
import axios from "axios";
import Confetti from "react-dom-confetti";
import { useSearchParams } from "react-router-dom";

const Hero = () => {
  const [transactModalOpen, setTransactModalOpen] = useState(false);
  const [token, setToken] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const [responseRecieved, setResponseRecieved] = useState(false);
  const [paymentDetails, setPaymentDetails] = useState({
    amount: "",
    payId: "",
    accountId: "",
    accountName: "",
    accountNumber: "",
    bank: "",
    expiration: "",
  });
  const [socketRecieved, setSocketReceived] = useState(false);
  const [socketData, setSocketData] = useState({});
  const [confettiActive, setConfettiActive] = useState(false);

  const getPayment = async () => {
    setLoading(true);
    //production  https://paybeforeservice.onrender.com
    //local   http://localhost:8000
    const endpoint = `https://paybeforeservice.onrender.com/PayBeforeService/v1/payment/verifyPayment/${token}`;

    try {
      const response = await axios.get(endpoint);

      // Check the response status and handle it accordingly
      if (response.data.status) {
        console.log(response.data, "checking something");
        setLoading(!true);
        setResponseRecieved(true);
        setPaymentDetails({
          amount: response.data.data.amount,
          payId: response.data.data.payId,
          accountId: response.data.data.accountId,
          accountName: response.data.data.accountName,
          accountNumber: response.data.data.accountNumber,
          bank: response.data.data.bank,
          expiration: response.data.data.expiration,
        });
        setErrMsg(response.data.message);
        setTransactModalOpen(true);

        // Handle other success scenarios if needed
      } else {
        console.log("Request failed with status:", response.status);
        // Handle the failed response
        setErrMsg(response.data.message);
        setLoading(!true);
      }
    } catch (error) {
      console.log(error);
      setErrMsg(error.message);
      setLoading(!true);

      // Handle other errors
    }
  };

  const handleCloseModal = (closeModal) => {
    setTransactModalOpen(closeModal);
    setPaymentDetails({
      amount: "",
      payId: "",
      accountId: "",
      accountName: "",
      accountNumber: "",
      bank: "",
      expiration: "",
    });
    setToken("");
    setSocketData({});
  };

  const config = {
    angle: 90,
    spread: 800,
    startVelocity: 60,
    elementCount: 100,
    decay: 0.9,
  };

  const [searchParams] = useSearchParams();
  const query = searchParams.get("ref"); // get query param value

  console.log(query, "here there and all that");

  useEffect(() => {
    if (query) {
      localStorage.setItem("ref", query);
    }

    let socket; // Declare socket outside of the try block to access it in the cleanup function

    if (responseRecieved) {
      try {
        // Connect to the server
        //production  https://paybeforeservice.onrender.com
        //local
        socket = io.connect("https://paybeforeservice.onrender.com");

        // Log that the connection is being attempted
        console.log("Attempting to connect to the server...");

        // Log when the connection is established
        socket.on("connect", () => {
          console.log(
            "Connection established with the server",
            `Payment${paymentDetails?.accountId}`
          );
        });
        // Listen for the 'message' event from the server
        socket.on(`Pay${paymentDetails?.accountId}`, (data) => {
          if (data.status === "successful") {
            setConfettiActive(true);
          }
          setSocketReceived(true);
          setSocketData(data);
        });

        // Log when the connection is closed
        socket.on("disconnect", () => {
          console.log("Connection closed with the server");
        });

        // Cleanup on unmount
        return () => {
          // Log that the connection is being closed
          console.log("Disconnecting from the server...");
          socket.disconnect();
        };
      } catch (error) {
        console.error("Error connecting to the server:", error);
      }
    }
  }, [responseRecieved, confettiActive]);

  return (
    <>
      <section className="hero-section py-[60px] flex md:flex-col justify-between gap-[60px] sm:mt-[50px] sm:py-0">
        <div className="left-side max-w-[589px] flex-[1.3]">
          <h1 className="text-4xl w-[80%] font-ui-bold text-[27px] md:text-left sm:text-left sm:mt-[10vh] sm:w-full sm:text-[24px] sm:leading-[30px]">
            Simplified Payment Processing with an{" "}
            <span className="text-primary">Escrow</span> Approach
          </h1>
          <p className="py-5 font-ui-regular text-[16px] text-body-text md:text-left sm:text-[16px] sm:text-left">
            Experience effortless payment processing through our innovative
            Escrow Approach. We simplify and secure transactions, ensuring peace
            of mind for both senders and receivers. Say goodbye to complexity
            and embrace a straightforward, secure way to conduct business.
          </p>

          <div className="flex justify-between w-fit gap-[16px] sm:gap-[3px] modal:flex-col modal:gap-[16px] sm:flex-row sm:justify-between text-[12px] sm:w-full sm:items-center">
            <button className="flex p-[12.19px] gap-[10px] w-[180px] rounded-[10px] items-center text-white bg-[#0D0033] sm:items-center sm:justify-center">
              <img src={appleIcon} alt="link to apple store" />
              <div className="flex items-start flex-col sm:text-center">
                <small className="font-ui-bold text-[12px]">
                  Download on the
                </small>
                <h4 className="font-ui-bold">App Store</h4>
              </div>
            </button>

            <button className="flex py-[12.19px] px-[24px] w-[180px] gap-[10px] rounded-[10px] items-center text-white bg-[#0D0033] sm:items-center sm:justify-center">
              <img src={playIcon} alt="link to apple store" />
              <div className="flex items-start flex-col">
                <small className="font-ui-bold text-[12px]">Get it on</small>
                <h4 className="font-ui-bold">Google Play</h4>
              </div>
            </button>
          </div>
        </div>

        <div className="right-side self-center flex-[1] max-w-[545px] sm:w-full sm:mb-[60px] lg:flex-1 xl:w-[545px]">
          <div className=" bg-white rounded-[20px] px-[30px] py-[30px] sm:px-[15px] border-ui-border border-border">
            <h2 className="mb-[30px] text-center font-ui-semi text-[16px]">
              Enter Transaction ID
            </h2>
            <div className="flex flex-col gap-5">
              <div className="border-ui-border rounded-[10px] px-5 py-4 bg-base">
                <input
                  type="text"
                  placeholder="Enter transaction id"
                  onChange={(e) => setToken(e.target.value)}
                  className="text-[0.875rem] font-ui-semi w-full border-none outline-none bg-transparent"
                />
              </div>
              {errMsg && (
                <div className="text-[#cc3300] font-semibold mb-2 text-xs">
                  {errMsg}
                </div>
              )}
              <button
                className="bg-primary px-2 py-4 rounded-[10px] text-white font-ui-bold text-[16px] border-none"
                onClick={() => {
                  getPayment();
                }}
              >
                {loading ? "loading" : "Continue"}
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* TRANSACTION MODAL */}
      {transactModalOpen && (
        <div className="bg-[rgba(0,0,0,0.5)] w-screen h-screen overflow-hidden fixed inset-y-0 inset-x-0 z-[999] flex justify-center items-center">
          {<Confetti active={confettiActive} config={config} />}
          <TransactModal
            paymentDetails={paymentDetails}
            _closeModal={handleCloseModal}
            socketRecieved={socketRecieved}
            socketData={socketData}
          />
        </div>
      )}
    </>
  );
};

export default Hero;
