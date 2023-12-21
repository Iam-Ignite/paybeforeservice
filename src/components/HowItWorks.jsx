const HowItWorks = () => {
    return (
        <section className="how bg-primary py-[61px] px-[80px] md:px-[100px] sm:px-[20px] relative overflow-hidden">
            <div className='how__overlay'></div>
            <h2 className='mb-[53px] font-ui-semi text-[32px] text-center text-white'>How it works</h2>
            <div className='flex gap-[30px] sm:gap-[50px] text-center items-stretch md:text-left md:flex-col sm:text-center'>
                <div className='text-white flex-1 justify-items-center items-center flex flex-col'>
                    <div className='w-[100px] h-[100px] border-[3px] border-white rounded-full text-center leading-[100px] mb-[20px]'>
                        <span className='font-ui-semi text-[32px]'>01</span>
                    </div>
                    <h3 className='font-ui-semi text-[20px] mb-[10px] text-center'>Create account</h3>
                    <div className='items-start flex flex-1'>
                        <p className='text-[15px] text-center font-ui-regular max-w-[400px]'>Register an account with us today. Setting up your swiftsettle takes less than a minute.</p>
                    </div>
                </div>
                <div className='text-white flex-1 justify-items-center items-center flex flex-col'>
                    <div className='w-[100px] h-[100px] border-[3px] border-white rounded-full text-center leading-[100px] mb-[20px]'>
                        <span className='font-ui-semi text-[32px]'>02</span>
                    </div>
                    <h3 className='font-ui-semi text-[20px] mb-[10px] flex-[3] '>Create a Payment Link or ID</h3>
                    <div className='items-start flex flex-1'>
                        <p className='text-[15px] text-center font-ui-regular max-w-[400px]'>Create a personalized payment link for your transaction. Specify the amount, recipient, and any additional details. </p>
                    </div>
                </div>
                <div className='text-white flex-1 justify-items-center items-center flex flex-col'>
                    <div className='w-[100px] h-[100px] border-[3px] border-white rounded-full text-center leading-[100px] mb-[20px]'>
                        <span className='font-ui-semi text-[32px]'>03</span>
                    </div>
                    <h3 className='font-ui-semi text-[20px] mb-[10px]'>Send Money Securely</h3>
                    <div className='items-start flex flex-1'>
                        <p className='text-[15px] text-center font-ui-regular max-w-[400px]'>Ensure safe transactions with our robust security measures. Your money is protected every step of the way.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HowItWorks