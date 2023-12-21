
import deviceMockup from '../../../assets/device-mockup.png';
import eclipse from '../../../assets/Ellipse-cut.png';
import fastPay from '../../../assets/fast-pay.png';
import referal from '../../../assets/referal.png';


import { AiFillCheckCircle } from "react-icons/ai";

const Features = () => {
    return (
        <section>
            <section className='px-[60px] sm:px-[20px] relative font-ui-regular text-[16px]'>
                {/* wrapper div */}
                <div className='flex gap-[50px] justify-between py-[30px] md:flex-col-reverse'>
                    <div className='flex-1'>
                        <div>
                            <h5 className='font-ui-bold text-[20px] text-primary mb-5'>Escrow</h5>
                            <h2 className='font-ui-bold text-[32px] mb-[10px]'>Secure Transactions</h2>
                            <p className='font-ui-regular text-[16px] text-body-text mb-5'>At Swiftsettle, we prioritize your peace of mind when it comes to financial dealings. That's why we've developed our cutting-edge<strong> "Secure Transaction"</strong> feature.</p>
                        </div>
                        <div className='[&>:not(:last-child)]:mb-5'>
                            <div className='flex justify-between gap-[10px]'>
                                <div>
                                    <AiFillCheckCircle size={24} color='#6E3EFF' />
                                </div>
                                <p className='text-[16px] text-body-text'>
                                    <strong className='text-black'>State-of-the-Art Encryption:</strong> Your data and financial details are protected with industry-standard encryption, ensuring that sensitive information remains confidential.
                                </p>
                            </div>
                            <div className='flex justify-between gap-[10px]'>
                                <div>
                                    <AiFillCheckCircle size={24} color='#6E3EFF' />
                                </div>
                                <p className='text-[16px] text-body-text'>
                                    <strong className='text-black'>Peace of Mind:</strong> Rest assured that your hard-earned money is in safe hands, allowing you to focus on what matters most to you
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* wrapper div ends here */}
                    <div className='flex-1 lg:self-center'>
                        <img src={deviceMockup} alt="mockup" className='max-w-full' />
                        <img src={eclipse} alt="background" className='absolute top-0 right-0 -z-10 w-[30%]' />
                    </div>
                </div>
            </section>


            <section className='px-[60px] sm:px-[20px] relative'>
                {/* wrapper div */}
                <div className='flex gap-[70px] justify-between py-[104px] md:flex-col'>
                    <div className='flex-1 lg:self-center'>
                        <img src={fastPay} alt="mockup" className='max-w-full' />
                    </div>
                    <div className='flex-1'>
                        <div>
                            <h5 className='font-ui-bold text-[20px] text-primary mb-5'>Fast Payment</h5>
                            <h2 className='font-ui-bold text-[32px] mb-[10px]'>Speed Transactions</h2>
                            <p className='font-ui-regular text-[16px] text-body-text mb-5'>Experience the future of quick and hassle-free payments with our <strong>'Fast Payment'</strong> feature. Say goodbye to waiting for funds to transfer, and hello to instant transactions at your fingertips.</p>
                        </div>
                        <div className='[&>:not(:last-child)]:mb-5'>
                            <div className='flex justify-between gap-[10px]'>
                                <div>
                                    <AiFillCheckCircle size={24} color='#6E3EFF' />
                                </div>
                                <p className='text-[16px] text-body-text font-ui-regular'>
                                    <strong className='text-black'>User-friendly Interface:</strong> Our intuitive design ensures that making payments is a breeze, even for first-time users.
                                </p>
                            </div>
                            <div className='flex justify-between gap-[10px]'>
                                <div>
                                    <AiFillCheckCircle size={24} color='#6E3EFF' />
                                </div>
                                <p className='text-[16px] text-body-text font-ui-regular'>
                                    <strong className='text-black'>Real-Time Updates:</strong> Stay in the know with real-time transaction updates. Track your payments as they happen, providing peace of mind and transparency.
                                </p>
                            </div>
                            <div className='flex justify-between gap-[10px]'>
                                <div>
                                    <AiFillCheckCircle size={24} color='#6E3EFF' />
                                </div>
                                <p className='text-[16px] text-body-text font-ui-regular'>
                                    <strong className='text-black'>Security First:</strong> We prioritize your financial safety. 'Fast Payment Using' employs top-notch encryption and authentication measures to protect your transactions.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='px-[60px] sm:px-[20px] relative'>
                {/* wrapper div */}
                <div className='flex gap-[70px] justify-between py-[104px] md:flex-col-reverse'>
                    <div className='flex-1'>
                        <div>
                            <h5 className='font-ui-bold text-[20px] text-primary mb-5'>Referrals</h5>
                            <h2 className='font-ui-bold text-[32px] mb-[10px]'>Earn with Referals</h2>
                            <p className='font-ui-regular text-[16px] text-body-text mb-5'>Unlock a world of rewards with our <strong>"Referrals"</strong> feature. Share the love and invite your friends, family, and colleagues to join SwiftSettle, and both you and your referrals can enjoy exclusive benefits. It's a win-win opportunity to expand our community while reaping the rewards together.</p>
                        </div>
                        <div className='[&>:not(:last-child)]:mb-5'>
                            <div className='flex justify-between gap-[10px]'>
                                <div>
                                    <AiFillCheckCircle size={24} color='#6E3EFF' />
                                </div>
                                <p className='text-[16px] text-body-text font-ui-regular'>
                                    <strong className='text-black'>Refer and Earn:</strong> Invite your friends to join Swiftsettle and earn rewards for every successful referral. The more you refer, the more you earn!
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='flex-1 lg:self-center'>
                        <img src={referal} alt="mockup" className='max-w-full' />
                    </div>
                </div>
            </section>
        </section>
    )
}

export default Features