/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

// ICONS
import { AiOutlineClose } from "react-icons/ai";

const TransactModal = ({
  _closeModal,
  paymentDetails,
  socketRecieved,
  socketData,
}) => {
  const [closeModal, setCloseModal] = useState(false);
  const [copy, setCopy] = useState(false);

  const handleCloseModal = () => {
    setCloseModal(true);
    _closeModal(closeModal);
  };
  const handleCloseModal = () => {
    setCloseModal(true);
    _closeModal(closeModal);
  };

  // const handlePayment = () => {
  //     handleCloseModal()
  //     alert("Transaction Initiated ✅")
  // }
  const formatDate = (dateString) => {
    const options = {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      // minute: '2-digit',
      // second: '2-digit',
      // timeZoneName: 'short',
    };
    const formattedDate = new Date(dateString).toLocaleString("en-US", options);
    return formattedDate;
  };

  useEffect(() => {
    setTimeout(() => {
      setCopy(false);
    }, 4500);
  }, [socketRecieved, copy]);

  return (
    <div className="max-w-[450px] bg-white rounded-2xl py-[40px] px-[30px] w-[50%] modal:h-fit sm:w-[95vw] relative">
      <div className="absolute right-[30px]" onClick={handleCloseModal}>
        <AiOutlineClose color="#555555" size={20} />
      </div>
      <h2 className="mb-[30px] font-ui-semi text-[20px] text-center">
        Transaction Detail
      </h2>
      <div className="rounded-lg border-ui-border py-[23px] px-5 border-border">
        {socketRecieved ? (
          <div className="">
            <div className="text-[#555] font-semibold mb-2 text-xs">
              Redeem Code
            </div>
            {socketData?.status === "successful" && (
              <div className="bg-[#F7F5FF] border rounded-md p-2 px-3 flex">
                <input
                  type="text"
                  value={socketData?.infoR}
                  className="bg-transparent outline-none text-sm px-2 w-full text-[#323232]"
                />
                {copy ? (
                  <div className="text-[#6E3EFF] font-semibold mb-2 text-xs">
                    copied
                  </div>
                ) : (
                  <svg
                    onClick={() => {
                      copyCode(socketData?.infoR), setCopy(true);
                    }}
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
                )}
              </div>
            )}
            <div className="">{socketData?.message}</div>
          </div>
        ) : (
          <ul className="font-ui-regular text-[14px] text-body-text">
            <li className="flex w-full justify-between mb-[15px] modal:flex-col">
              <h3>Account Name</h3>
              <h5 className="font-ui-semi text-black">
                {paymentDetails.accountName}
              </h5>
            </li>
            <li className="flex w-full justify-between mb-[15px] modal:flex-col">
              <h3>Account Number</h3>
              <h5 className="font-ui-semi text-black">
                {paymentDetails.accountNumber}
              </h5>
            </li>
            <li className="flex w-full justify-between mb-[15px] modal:flex-col">
              <h3>Bank Name</h3>
              <h5 className="font-ui-semi text-black">{paymentDetails.bank}</h5>
            </li>
            <li className="flex w-full justify-between mb-[15px] modal:flex-col">
              <h3>Payment ID</h3>
              <h5 className="font-ui-semi text-black">
                {paymentDetails.payId}
              </h5>
            </li>
            <li className="flex w-full justify-between mb-[15px] modal:flex-col">
              <h3>Expiration Time</h3>
              <h5 className="font-ui-semi text-black">
                {formatDate(paymentDetails.expiration)}
              </h5>
            </li>
            <li className="flex w-full justify-between modal:flex-col">
              <h3>Amount</h3>
              <h5 className="font-ui-semi text-primary">
                ₦{paymentDetails.amount}
              </h5>
            </li>
          </ul>
        )}
      </div>
      {/* <form action="#">
                <h4 className='font-ui-semi text-body-text text-[14px] mb-[10px] mt-5'>Narration</h4>
                <input type="text" placeholder='Enter Code' className='py-[20px] px-[16px] border-border text-[14px] w-full outline-none border-ui-border rounded-lg mb-[30px]' />
                <button className='bg-primary font-ui-semi py-[17px] text-white w-full rounded-lg' onClick={handlePayment}>Pay</button>
            </form> */}
    </div>
  );
};
            </form> */}
    </div>
  );
};

export default TransactModal;
