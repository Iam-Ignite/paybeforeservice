import './home.css';

import { useState } from 'react';

import appleIcon from '../../assets/apple.png';
import playIcon from '../../assets/playstore.png';
import bolts from '../../assets/bolts.png';
import shields from '../../assets/shield.png';
import lock from '../../assets/lock.png';
import deviceMockup from '../../assets/device-mockup.png';
import eclipse from '../../assets/Ellipse-cut.png';
import fastPay from '../../assets/fast-pay.png';
import referal from '../../assets/referal.png';

import { AiFillCheckCircle, AiOutlineClose } from "react-icons/ai";
import { ImFacebook, ImLinkedin2, ImTwitter, ImInstagram } from "react-icons/im";
import { RxHamburgerMenu } from 'react-icons/rx';

import { WhyUsCard } from './components';



const Home = () => {
  const [activeNavLink, setActiveNavLink] = useState("home");
  const [hideModel, setHideModal] = useState(false);

  const handleNavClick = (link) => {
    setActiveNavLink(link);
    setHideModal(!hideModel);
  }

  const handleHideModal = () => {
    setHideModal(!hideModel);
  }

  return (
    <div className='w-full min-h-screen'>
      <div className="hero px-[120px] bg-base sm:px-[20px] relative">
        <nav className={`py-[35px] w-full ${!hideModel ? 'sm:fixed sm:left-0  sm:px-5 sm:z-50 sm:h-screen sm:bg-[rgba(0,0,0,0.75)]' : null} flex items-center justify-between sm:justify-center gap-[97px] sm:gap-5 sm:py-[30px] lg:flex-col lg:gap-20`}>
          <div className='self-start sm:px-5 sm:fixed sm:left-0 sm:z-50 sm:top-0 sm:h-[10vh] sm:bg-white sm:flex sm:justify-between items-center sm:w-full'>
            <h5 className='text-[28px] font-ui-bold text-primary'>SwiftSettle</h5>
            <div className='hidden p-2 border-ui-border rounded-lg sm:block ease-in-out transition-all' onClick={handleHideModal}>
              {hideModel ? <RxHamburgerMenu /> : <AiOutlineClose />}
            </div>
          </div>
          <div className='flex flex-row items-center justify-between sm:hidden flex-[2] sm:w-full lg:w-full'>
            <div className='flex-[2] sm:hidden'>
              <ul className='flex flex-row gap-5 text-[16px] text-body-text font-ui-regular list-none transition-all ease-in-out h-full items-center'>
                <a href="#home" className='hover:text-primary'>
                  <li className={` w-fit ${activeNavLink === 'home' ? 'font-ui-semi text-primary' : ''}`} onClick={() => handleNavClick('home')}>Home</li>
                </a>
                <a href="#about-us" className='hover:text-primary'>
                  <li className={` w-fit ${activeNavLink === 'about' ? 'font-ui-semi text-primary' : ''}`} onClick={() => handleNavClick('about')}>About us</li>
                </a>
                <a href="#faq" className='hover:text-primary'>
                  <li className={` w-fit ${activeNavLink === 'faq' ? 'font-ui-semi text-primary' : ''}`} onClick={() => handleNavClick('faq')}>Faq</li>
                </a>
              </ul>
            </div>
            <div className='flex flex-row items-center gap-[20px] justify-between text-[16px] font-ui-semi sm:hidden'>
              <button className='py-[10px] text-primary'>Log in</button>
              <div className='w-[3px] h-[30px] bg-primary rounded-full'></div>
              <button className=' bg-primary px-[20px] py-[10px] rounded-[20000px] text-white'>Signup</button>
            </div>
          </div>
          {/* mobile  navigation*/}
          <div className={`hidden h-fit ${hideModel ? 'hidden' : 'sm:flex flex-col'} border-ui-border rounded-lg bg-white justify-between px-5 py-5 sm:w-full lg:w-full`}>
            <div className='mb-[50px]'>
              <ul className='flex flex-col gap-5 text-[16px] text-body-text font-ui-regular list-none transition-all ease-in-out h-full items-center text-center'>
                <a href="#home" className='hover:text-primary w-full' onClick={() => handleNavClick('home')}>
                  <li className={` w-full py-4 ${activeNavLink === 'home' ? 'font-ui-semi text-primary' : ''}`}>Home</li></a>
                <a href="#about-us" className='hover:text-primary w-full'>
                  <li className={`w-full py-4 ${activeNavLink === 'about' ? 'font-ui-semi text-primary' : ''}`} onClick={() => handleNavClick('about')}>About us</li></a>
                <a href="#faq" className='hover:text-primary  w-full'>
                  <li className={`w-full py-4 ${activeNavLink === 'faq' ? 'font-ui-semi text-primary' : ''}`} onClick={() => handleNavClick('faq')}>Faq</li></a>
              </ul>
            </div>
            <div className='flex flex-col items-center gap-[8px] justify-between text-[16px] font-ui-semi'>
              <button className='py-[15px] text-primary border-ui-border rounded-[5px] w-full'>Log in</button>
              <div className='w-[3px] h-[30px] bg-primary rounded-none rotate-90'></div>
              <button className=' bg-primary py-[15px] rounded-[5px] w-full text-white'>Signup</button>
            </div>
          </div>
        </nav>

        <section className="hero-section py-[60px] flex justify-between gap-[66px] sm:mt-[50px] sm:py-0 xl:flex-col xl:w-full">
          <div className="left-side max-w-[589px] flex-[2] xl:flex-1 xl:min-w-full xl:items-center xl:text-center">
            <h1 className='text-4xl font-ui-bold text-[42px] leading-[54px] md:text-left sm:text-center sm:w-full sm:text-[30px] sm:leading-[35px]'>Simplified Payment Processing with an <span className='text-primary'>Escrow</span> Approach</h1>
            <p className='py-5 font-ui-regular text-[20px] leading-[28px] text-body-text md:text-left sm:text-[16px] sm:text-center'>Experience effortless payment processing through our innovative Escrow Approach. We simplify and secure transactions, ensuring peace of mind for both senders and receivers. Say goodbye to complexity and embrace a straightforward, secure way to conduct business.</p>

            <div className='flex justify-between w-fit gap-[16px] sm:flex-col sm:justify-center xl:justify-center xl:w-full'>

              <button className='flex p-[12.19px] gap-[10px] rounded-[10px] items-center text-white bg-[#0D0033] sm:items-center sm:justify-center'>
                <img src={appleIcon} alt="link to apple store" />
                <div className='flex items-start flex-col sm:text-center'>
                  <small className='font-ui-bold text-[12px]'>Download on the</small>
                  <h4 className='font-ui-bold'>App Store</h4>
                </div>
              </button>

              <button className='flex py-[12.19px] px-[24px] gap-[10px] rounded-[10px] items-center text-white bg-[#0D0033] sm:items-center sm:justify-center'>
                <img src={playIcon} alt="link to apple store" />
                <div className='flex items-start flex-col'>
                  <small className='font-ui-bold text-[12px]'>Get it on</small>
                  <h4 className='font-ui-bold'>Google Play</h4>
                </div>
              </button>

            </div>
          </div>

          <div className="right-side self-center flex-[1] max-w-[545px] sm:w-full lg:flex-1 xl:w-[545px]">
            <form action="#" className=' bg-white rounded-[20px] px-[50px] py-[40px] sm:px-[15px] border-ui-border border-border'>
              <h2 className='mb-[30px] text-center font-ui-semi text-[16px]'>Enter Transaction ID</h2>
              <div className='flex flex-col gap-5'>
                <div className='border-ui-border rounded-[10px] px-5 py-4 bg-base'>
                  <input type="text" placeholder='Enter transaction id' className='text-[0.875rem] font-ui-semi w-full border-none outline-none bg-transparent' />
                </div>
                <button className='bg-primary px-2 py-4 rounded-[10px] text-white font-ui-bold text-[16px] border-none'>Continue</button>
              </div>
            </form>
          </div>
        </section>
      </div>

      <section className='whyus px-[120px] sm:px-[20px] py-[60px]'>
        <h2 className='font-ui-semi text-[28px] text-center mb-[60px] text-[#0D0033]'>Why choose us?</h2>
        <div className='flex flex-row gap-[20px] justify-center items-start lg:grid lg:grid-cols-2 md:grid-cols-1'>
          <WhyUsCard icon={bolts} title={"Speed"} body={"Say goodbye to waiting. With us, your money transfers are lightning-fast, ensuring your funds reach their destination in no time."} />
          <WhyUsCard icon={shields} title={"Security"} body={"We prioritize your financial well-being. Our advanced security measures guarantee your money and personal information are safe and sound."} />
          <WhyUsCard icon={lock} title={"Secured Transactions"} body={"With our escrow service, your payments are held securely until both parties fulfill their obligations, ensuring a safe and fair exchange."} />
        </div>
      </section>

      <section className='px-[120px] sm:px-[20px] relative'>
        {/* wrapper div */}
        <div className='flex gap-[70px] justify-between py-[104px] lg:flex-col lg:flex-col-reverse'>
          <div className='flex-1'>
            <div>
              <h5 className='font-ui-bold text-[20px] text-primary mb-5'>Escrow</h5>
              <h2 className='font-ui-bold text-[32px] mb-[10px]'>Secure Transactions</h2>
              <p className='font-ui-regular text-[18px] leading-[28px] text-body-text mb-5'>At Swiftsettle, we prioritize your peace of mind when it comes to financial dealings. That's why we've developed our cutting-edge<strong> "Secure Transaction"</strong> feature.</p>
            </div>
            <div className='[&>:not(:last-child)]:mb-5'>
              <div className='flex justify-between gap-[10px]'>
                <div>
                  <AiFillCheckCircle size={24} color='#6E3EFF' />
                </div>
                <p className='text-[17px] text-body-text leading-[22.95px]'>
                  <strong className='text-black'>State-of-the-Art Encryption:</strong> Your data and financial details are protected with industry-standard encryption, ensuring that sensitive information remains confidential.
                </p>
              </div>
              <div className='flex justify-between gap-[10px]'>
                <div>
                  <AiFillCheckCircle size={24} color='#6E3EFF' />
                </div>
                <p className='text-[17px] text-body-text leading-[22.95px]'>
                  <strong className='text-black'>Peace of Mind:</strong> Rest assured that your hard-earned money is in safe hands, allowing you to focus on what matters most to you
                </p>
              </div>
            </div>
          </div>
          {/* wrapper div ends here */}
          <div className='flex-1 lg:self-center'>
            <img src={deviceMockup} alt="mockup" className='max-w-full' />
            <img src={eclipse} alt="background" className='absolute top-0 right-0 -z-10 lg:hidden' />
          </div>
        </div>
      </section>


      <section className='px-[120px] sm:px-[20px] relative'>
        {/* wrapper div */}
        <div className='flex gap-[70px] justify-between py-[104px] lg:flex-col'>
          <div className='flex-1 lg:self-center'>
            <img src={fastPay} alt="mockup" className='max-w-full' />
          </div>
          <div className='flex-1'>
            <div>
              <h5 className='font-ui-bold text-[20px] text-primary mb-5'>Fast Payment</h5>
              <h2 className='font-ui-bold text-[32px] mb-[10px]'>Speed Transactions</h2>
              <p className='font-ui-regular text-[18px] leading-[28px] text-body-text mb-5'>Experience the future of quick and hassle-free payments with our <strong>'Fast Payment'</strong> feature. Say goodbye to waiting for funds to transfer, and hello to instant transactions at your fingertips.</p>
            </div>
            <div className='[&>:not(:last-child)]:mb-5'>
              <div className='flex justify-between gap-[10px]'>
                <div>
                  <AiFillCheckCircle size={24} color='#6E3EFF' />
                </div>
                <p className='text-[17px] text-body-text leading-[22.95px]'>
                  <strong className='text-black'>User-friendly Interface:</strong> Our intuitive design ensures that making payments is a breeze, even for first-time users.
                </p>
              </div>
              <div className='flex justify-between gap-[10px]'>
                <div>
                  <AiFillCheckCircle size={24} color='#6E3EFF' />
                </div>
                <p className='text-[17px] text-body-text leading-[22.95px]'>
                  <strong className='text-black'>Real-Time Updates:</strong> Stay in the know with real-time transaction updates. Track your payments as they happen, providing peace of mind and transparency.
                </p>
              </div>
              <div className='flex justify-between gap-[10px]'>
                <div>
                  <AiFillCheckCircle size={24} color='#6E3EFF' />
                </div>
                <p className='text-[17px] text-body-text leading-[22.95px]'>
                  <strong className='text-black'>Security First:</strong> We prioritize your financial safety. 'Fast Payment Using' employs top-notch encryption and authentication measures to protect your transactions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='px-[120px] sm:px-[20px] relative'>
        {/* wrapper div */}
        <div className='flex gap-[70px] justify-between py-[104px] lg:flex-col lg:flex-col-reverse'>
          <div className='flex-1'>
            <div>
              <h5 className='font-ui-bold text-[20px] text-primary mb-5'>Referrals</h5>
              <h2 className='font-ui-bold text-[32px] mb-[10px]'>Earn with Referals</h2>
              <p className='font-ui-regular text-[18px] leading-[28px] text-body-text mb-5'>Unlock a world of rewards with our <strong>"Referrals"</strong> feature. Share the love and invite your friends, family, and colleagues to join SwiftSettle, and both you and your referrals can enjoy exclusive benefits. It's a win-win opportunity to expand our community while reaping the rewards together.</p>
            </div>
            <div className='[&>:not(:last-child)]:mb-5'>
              <div className='flex justify-between gap-[10px]'>
                <div>
                  <AiFillCheckCircle size={24} color='#6E3EFF' />
                </div>
                <p className='text-[17px] text-body-text leading-[22.95px]'>
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

      <section className="how bg-primary py-[61px] px-[120px] md:px-[100px] sm:px-[20px] relative overflow-hidden">
        <div className='how__overlay'></div>
        <h2 className='mb-[53px] font-ui-semi text-[32px] text-center text-white'>How it works</h2>
        <div className='flex gap-5 sm:gap-[50px] text-center items-stretch md:text-left md:flex-col sm:text-center'>
          <div className='text-white flex-1 justify-items-center items-center flex flex-col'>
            <div className='w-[120px] h-[120px] border-[3px] border-white rounded-full text-center leading-[120px] mb-[20px]'>
              <span className='font-ui-semi text-[32px]'>01</span>
            </div>
            <h3 className='font-ui-semi text-[24px] mb-[10px] text-center'>Create account</h3>
            <div className='items-end flex flex-1'>
              <p className='text-[16px] text-center font-ui-regular leading-[21px] md-text-[50px]'>Register an account with us today. Setting up your swiftsettle takes less than a minute.</p>
            </div>
          </div>
          <div className='text-white flex-1 justify-items-center items-center flex flex-col'>
            <div className='w-[120px] h-[120px] border-[3px] border-white rounded-full text-center leading-[120px] mb-[20px]'>
              <span className='font-ui-semi text-[32px]'>02</span>
            </div>
            <h3 className='font-ui-semi text-[24px] mb-[10px] flex-[3] '>Create a Payment Link or ID</h3>
            <div className='items-end flex flex-1'>
              <p className='text-[16px] text-center font-ui-regular leading-[21px]'>Create a personalized payment link for your transaction. Specify the amount, recipient, and any additional details. </p>
            </div>
          </div>
          <div className='text-white flex-1 justify-items-center items-center flex flex-col'>
            <div className='w-[120px] h-[120px] border-[3px] border-white rounded-full text-center leading-[120px] mb-[20px]'>
              <span className='font-ui-semi text-[32px]'>03</span>
            </div>
            <h3 className='font-ui-semi text-[24px] mb-[10px]'>Send Money Securely</h3>
            <div className='items-end flex flex-1'>
              <p className='text-[16px] text-center font-ui-regular leading-[21px]'>Ensure safe transactions with our robust security measures. Your money is protected every step of the way.</p>
            </div>
          </div>
        </div>
      </section>

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
      <footer className='bg-primary'>
        <div className='px-[120px] sm:px-5 w-full pt-[60px] pb-[100px] gap-[80px] flex flex-row justify-start lg:flex-col lg:flex-col-reverse'>
          <div className='left flex-1 max-w-[420px]'>
            <h2 className='text-[32px] font-ui-bold text-white  mb-[10px] sm:text-center'>SwiftSettle</h2>
            <p className='text-[17px] text-white leading-[23px] font-ui-regular mb-[20px] sm:text-center'>Explore a simplified approach to effortless money transfers with Swiftsettle. Enjoy fast, secure transactions via personalized payment links. Begin now for a seamless journey!</p>
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
            <ul className='flex gap-[80px] font-ui-regular text-[16px] text-white list-none sm:flex-col sm:text-center'>
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
                  <a href="#">About</a>
                  <a href="#">FAQs</a>
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
      <div className='border-t h-[76px] bg-primary'></div>
    </div>
  )
}

export default Home