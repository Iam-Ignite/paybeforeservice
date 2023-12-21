import React from 'react'


import bolts from '../assets/bolts.png';
import shields from '../assets/shield.png';
import lock from '../assets/lock.png';

const WhyUsCard = ({ icon, title, body }) => {
    return (
        <div className='max-w-[385px] p-[20px] rounded-[20px] border-ui-border self-stretch md:max-w-full'>
            <div className='w-[46.67px] h-[45px]'>
                <img src={icon} alt="icon" className='bg-cover w-full h-full object-contain' />
            </div>
            <h3 className='font-ui-semi text-[20px] my-[10px]'>{title}</h3>
            <p className='font-ui-regular text-left text-[16.5px] text-body-text'>{body}</p>
        </div>
    )
}

const ChooseUs = () => {
    return (
        <section className='whyus px-[60px] sm:px-[20px] py-[60px]'>
            <h2 className='font-ui-semi text-[28px] text-center mb-[60px] text-[#0D0033]'>Why choose us?</h2>
            <div className='flex flex-row gap-[15px] justify-center items-start lg:grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
                <WhyUsCard icon={bolts} title={"Speed"} body={"Say goodbye to waiting. With us, your money transfers are lightning-fast, ensuring your funds reach their destination in no time."} />
                <WhyUsCard icon={shields} title={"Security"} body={"We prioritize your financial well-being. Our advanced security measures guarantee your money and personal information are safe and sound."} />
                <WhyUsCard icon={lock} title={"Secured Transactions"} body={"With our escrow service, your payments are held securely until both parties fulfill their obligations, ensuring a safe and fair exchange."} />
            </div>
        </section>
    )
}

export default ChooseUs