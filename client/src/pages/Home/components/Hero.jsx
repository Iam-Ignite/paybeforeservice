import React, { useState } from 'react'

// COMPONENTS
import TransactModal from './TransactModal';

// ASSETS
import appleIcon from '../../../assets/apple.png';
import playIcon from '../../../assets/playstore.png';

const Hero = () => {
    const [transactModalOpen, setTransactModalOpen] = useState(false);

    const handleTransaction = (ev) => {
        ev.preventDefault();
        setTransactModalOpen(true)
    }

    const handleCloseModal = (closeModal) => {
        setTransactModalOpen(closeModal)
    }

    return (
        <>
            <section className="hero-section py-[60px] flex md:flex-col justify-between gap-[60px] sm:mt-[50px] sm:py-0">
                <div className="left-side max-w-[589px] flex-[1.3]">
                    <h1 className='text-4xl w-[80%] font-ui-bold text-[27px] md:text-left sm:text-left sm:mt-[10vh] sm:w-full sm:text-[24px] sm:leading-[30px]'>Simplified Payment Processing with an <span className='text-primary'>Escrow</span> Approach</h1>
                    <p className='py-5 font-ui-regular text-[16px] text-body-text md:text-left sm:text-[16px] sm:text-left'>Experience effortless payment processing through our innovative Escrow Approach. We simplify and secure transactions, ensuring peace of mind for both senders and receivers. Say goodbye to complexity and embrace a straightforward, secure way to conduct business.</p>

                    <div className='flex justify-between w-fit gap-[16px] sm:flex-col sm:justify-center text-[12px] sm:w-full sm:items-center'>

                        <button className='flex p-[12.19px] gap-[10px] w-[180px] rounded-[10px] items-center text-white bg-[#0D0033] sm:items-center sm:justify-center'>
                            <img src={appleIcon} alt="link to apple store" />
                            <div className='flex items-start flex-col sm:text-center'>
                                <small className='font-ui-bold text-[12px]'>Download on the</small>
                                <h4 className='font-ui-bold'>App Store</h4>
                            </div>
                        </button>

                        <button className='flex py-[12.19px] px-[24px] w-[180px] gap-[10px] rounded-[10px] items-center text-white bg-[#0D0033] sm:items-center sm:justify-center'>
                            <img src={playIcon} alt="link to apple store" />
                            <div className='flex items-start flex-col'>
                                <small className='font-ui-bold text-[12px]'>Get it on</small>
                                <h4 className='font-ui-bold'>Google Play</h4>
                            </div>
                        </button>

                    </div>
                </div>

                <div className="right-side self-center flex-[1] max-w-[545px] sm:w-full sm:mb-[60px] lg:flex-1 xl:w-[545px]">
                    <form action="#" className=' bg-white rounded-[20px] px-[30px] py-[30px] sm:px-[15px] border-ui-border border-border'>
                        <h2 className='mb-[30px] text-center font-ui-semi text-[16px]'>Enter Transaction ID</h2>
                        <div className='flex flex-col gap-5'>
                            <div className='border-ui-border rounded-[10px] px-5 py-4 bg-base'>
                                <input type="text" placeholder='Enter transaction id' className='text-[0.875rem] font-ui-semi w-full border-none outline-none bg-transparent' />
                            </div>
                            <button className='bg-primary px-2 py-4 rounded-[10px] text-white font-ui-bold text-[16px] border-none' onClick={(e) => handleTransaction(e)}>Continue</button>
                        </div>
                    </form>
                </div>
            </section>
            {/* TRANSACTION MODAL */}
            {transactModalOpen && <div className='bg-[rgba(0,0,0,0.5)] w-screen h-screen overflow-hidden fixed inset-y-0 inset-x-0 z-[999] flex justify-center items-center'>
                <TransactModal _closeModal={handleCloseModal} />
            </div>}
        </>
    )
}

export default Hero