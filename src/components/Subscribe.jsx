

const Subscribe = () => {
    return (
        <section className='py-[90px] w-full bg-[#FAFAFA] flex justify-center items-center sm:px-5'>
            <div className='max-w-[733px] w-[60%] sm:w-full'>
                <h2 className='mb-[20px] font-ui-semi text-[32px] text-center sm:text-[24px]'>Subscribe To Our News Letter</h2>
                <h4 className='text-center font-ui-regular text-[24px] text-body-text mb-[30px] sm:text-[16px]'>Subscribe To Our News Letter For more Update</h4>
                <form className='flex text-[17px] sm:text-[16px]'>
                    <div className='border-ui-border  bg-white border-border flex-1 rounded-l-3xl px-[32px] sm:px-[16px] py-[16px]'>
                        <input type="email" name="email" placeholder='Your email address' className='bg-inherit flex-1 w-full outline-none border-0 text-body-text font-ui-regular' />
                    </div>
                    <button className='bg-primary w-[133px] sm:w-[100px] rounded-r-3xl text-white font-ui-semi'>Subscribe</button>
                </form>
            </div>
        </section>
    )
}

export default Subscribe