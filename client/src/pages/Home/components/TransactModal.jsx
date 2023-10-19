import { useState } from 'react'


// ICONS
import { AiOutlineClose } from 'react-icons/ai'

const TransactModal = ({ fullName, date, txID, amount, _closeModal }) => {
    const [closeModal, setCloseModal] = useState(false)

    const handleCloseModal = () => {
        setCloseModal(true)
        _closeModal(closeModal)
    }

    const handlePayment = () => {
        handleCloseModal()
        alert("Transaction Initiated ✅")
    }
    return (
        <div className='max-w-[450px] bg-white rounded-2xl py-[40px] px-[30px] w-[50%] modal:h-fit sm:w-[95vw] relative'>
            <div className='absolute right-[30px]' onClick={handleCloseModal}>
                <AiOutlineClose color='#555555' size={20} />
            </div>
            <h2 className='mb-[30px] font-ui-semi text-[20px] text-center'>Transaction Details</h2>
            <div className='rounded-lg border-ui-border py-[23px] px-5 border-border'>
                <ul className='font-ui-regular text-[14px] text-body-text'>
                    <li className='flex w-full justify-between mb-[15px] modal:flex-col'>
                        <h3>Full Name</h3>
                        <h5 className='font-ui-semi text-black'>{fullName || "Joelene Ekene"}</h5>
                    </li>
                    <li className='flex w-full justify-between mb-[15px] modal:flex-col'>
                        <h3>Date</h3>
                        <h5 className='font-ui-semi text-black'>{date || "26/7/2023"}</h5>
                    </li>
                    <li className='flex w-full justify-between mb-[15px] modal:flex-col'>
                        <h3>Transaction ID</h3>
                        <h5 className='font-ui-semi text-black'>{txID || "k2we8lksd00plsdnm8B"}</h5>
                    </li>
                    <li className='flex w-full justify-between modal:flex-col'>
                        <h3>Amount</h3>
                        <h5 className='font-ui-semi text-primary'>{amount || "30,000"}</h5>
                    </li>
                </ul>
            </div>
            <form action="#">
                <h4 className='font-ui-semi text-body-text text-[14px] mb-[10px] mt-5'>Narration</h4>
                <input type="text" placeholder='Enter Code' className='py-[20px] px-[16px] border-border text-[14px] w-full outline-none border-ui-border rounded-lg mb-[30px]' />
                <button className='bg-primary font-ui-semi py-[17px] text-white w-full rounded-lg' onClick={handlePayment}>Pay</button>
            </form>
        </div>
    )
}

export default TransactModal