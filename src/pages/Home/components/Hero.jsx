/** @format */

import { useContext, useEffect, useState } from "react";
import io from "socket.io-client";

// COMPONENTS
import TransactModal from "./TransactModal";

// ASSETS
import appleIcon from "../../../assets/apple.png";
import playIcon from "../../../assets/playstore.png";
import axios from "axios";
import Confetti from "react-dom-confetti";
import { useNavigate, useSearchParams } from "react-router-dom";
import { ShopContext } from "../../../utils/contextShop";
import Showdownload from "../../../components/Download/Showdownload";
import Notify from "../../../components/Notify";

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
  const [socketData, setSocketData] = useState({
    // type: "Payment",
    // payment: {
    //   created: "2023-12-21T18:09:52.109169776Z",
    //   sender: {
    //     account_number: "11128393",
    //     account_name: "Hey there",
    //   },
    //   amount: 200,
    // },
    // status: "failed",
    // reason: "incomplete amount",
    // infoR: 11234,
    // id: "AXBBD3",
    // reciever: "658f31375d464114e2109860",
    // createdAt: "2023-11-09T02:56:52.958+00:00",
  });
  const [confettiActive, setConfettiActive] = useState(false);
  const {
    notify,
    showDownload,
    setDisputeData,
    setNotify,
    setNotifyType,
    setNotifymsg,
  } = useContext(ShopContext);

  // type: "Payment",
  // payment: {
  //   created: "2023-12-21T18:09:52.109169776Z",
  //   sender: {
  //     account_number: "11128393",
  //     account_name: "Hey there",
  //   },
  //   amount: 200,
  // },
  // status: "successful",
  // infoR: 11234,
  // id: "100004231221180940109805574676",

  const getPayment = async () => {
    if (token === "") {
      setNotify(true);
      setNotifyType("warn");
      setNotifymsg("Token cannot be empty");
      return;
    }
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
  const navigate = useNavigate();

  const openDispute = () => {
    // if(Object.keys(socketData).length === 0) {
    //   setNotify(true);
    //   setNotifyType("warn");
    //   setNotifymsg("");
    // }
    setDisputeData(socketData);
    navigate("/dispute");
  };

  const config = {
    angle: 90,
    spread: 500,
    startVelocity: 40,
    elementCount: 70,
    decay: 0.75,
  };

  const [searchParams] = useSearchParams();
  const query = searchParams.get("ref"); // get query param value
  const queryLink = searchParams.get("payment"); // get query param value

  useEffect(() => {
    if (query) {
      localStorage.setItem("ref", query);
    }
    if (queryLink) {
      setToken(queryLink);
      getPayment();
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

        // // Log when the connection is closed
        // socket.on("disconnect", () => {
        //   console.log("Connection closed with the server");
        // });

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
  }, [token, responseRecieved, confettiActive]);

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
                  defaultValue={token}
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
              <div className="flex flex-col gap-2">
                <button
                  className="bg-primary px-2 py-4 rounded-[10px] text-white font-ui-bold text-[16px] border-none"
                  onClick={() => {
                    getPayment();
                  }}
                >
                  {loading ? "loading" : "Continue"}
                </button>
                <button
                  onClick={() => openDispute()}
                  className="bg-[#A23EFF] px-2 py-4 rounded-[10px] text-white font-ui-bold text-[16px] border-none"
                >
                  Create Dispute
                </button>
              </div>
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
            openDispute={openDispute}
          />
        </div>
      )}
      {/* DOWNLOAD MODAL */}
      {showDownload && <Showdownload />}
      {/* NOTIFY */}
      {notify && <Notify />}
    </>
  );
};

export default Hero;
