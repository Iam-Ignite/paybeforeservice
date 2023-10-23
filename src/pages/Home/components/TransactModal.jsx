/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

// ICONS
import { AiOutlineClose } from "react-icons/ai";

const TransactModal = ({ _closeModal, paymentDetails, socketRecieved }) => {
  const [closeModal, setCloseModal] = useState(false);

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

  useEffect(() => {}, [socketRecieved]);

  return (
    <div className="max-w-[450px] bg-white rounded-2xl py-[40px] px-[30px] w-[50%] modal:h-fit sm:w-[95vw] relative">
      <div className="absolute right-[30px]" onClick={handleCloseModal}>
        <AiOutlineClose color="#555555" size={20} />
      </div>
      <h2 className="mb-[30px] font-ui-semi text-[20px] text-center">
        Transaction Details
      </h2>
      <div className="rounded-lg border-ui-border py-[23px] px-5 border-border">
        {socketRecieved ? (
          <div className="">Recieved</div>
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

export default TransactModal;
