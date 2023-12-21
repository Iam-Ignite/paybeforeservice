
import { Link } from 'react-router-dom';

// ICONS
import { ImFacebook, ImLinkedin2, ImTwitter, ImInstagram } from "react-icons/im";

const Footer = () => {
    return (
        <>
            <footer className='bg-primary'>
                <div className='px-[60px] sm:px-5 w-full pt-[60px] pb-[100px] gap-[60px] flex flex-row justify-start md:flex-col-reverse'>
                    <div className='left flex-[1.5] max-w-[420px]'>
                        <h2 className='text-[24px] font-ui-bold text-white  mb-[10px] sm:text-center'>SwiftSettle</h2>
                        <p className='text-[14px] w-[97%] text-white font-ui-regular mb-[20px] sm:text-center'>Explore a simplified approach to effortless money transfers with Swiftsettle. Enjoy fast, secure transactions via personalized payment links. Begin now for a seamless journey!</p>
                        <div className='icons flex w-fit gap-5 sm:justify-center sm:items-center sm:w-full'>
                            <a href="#" className='text-center'>
                                <div className='p-[0.6px] rounded-full bg-white w-[30px] h-[30px] flex items-center justify-center'>
                                    <ImLinkedin2 color='#6E3EFF' />
                                </div>
                            </a>
                            <a href="#" className='text-center'>
                                <div className='p-[0.6px] rounded-full bg-white w-[30px] h-[30px] flex items-center justify-center'>
                                    <ImFacebook color='#6E3EFF' />
                                </div>
                            </a>
                            <a href="#" className='text-center'>
                                <div className='p-[0.6px] rounded-full bg-white w-[30px] h-[30px] flex items-center justify-center'>
                                    <ImTwitter color='#6E3EFF' />
                                </div>
                            </a>
                            <a href="#" className='text-center'>
                                <div className='p-[0.6px] rounded-full bg-white w-[30px] h-[30px] flex items-center justify-center'>
                                    <ImInstagram color='#6E3EFF' />
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className='right flex-[2] w-fit sm:flex-1 sm:w-full'>
                        <ul className='flex gap-[40px] font-ui-regular text-[14px] text-white list-none sm:flex-col sm:text-center'>
                            <li>
                                <h3 className='font-ui-semi text-[20px] text-white mb-5'>Features</h3>
                                <div className='flex flex-col gap-[10px] sm:gap-5'>
                                    <a href="#">Escrow</a>
                                    <a href="#">Fast Payment</a>
                                    <a href="#">Referrals</a>
                                </div>
                            </li>
                            <li>
                                <h3 className='font-ui-semi text-[20px] text-white mb-5'>About</h3>
                                <div className='flex flex-col gap-[10px] sm:gap-5'>
                                    <Link to={'/about'}>About</Link>
                                    <Link to={'/faq'}>FAQs</Link>
                                    <a href="#">Privacy Policy</a>
                                </div>
                            </li>
                            <li>
                                <h3 className='font-ui-semi text-[20px] text-white mb-5'>Contact Us</h3>
                                <div className='flex flex-col gap-[10px] sm:gap-5'>
                                    <a href="#">Lagos, Nigeria</a>
                                    <a href="#">Email: hello@swiftsettle.com</a>
                                    <a href="#">Phone: +2347089234543</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
            {/* FOOTER RULE */}
            <div className='border-t h-[76px] bg-primary'></div>
        </>
    )
}

export default Footer