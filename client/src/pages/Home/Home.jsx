// FILES
import './home.css';

import { useState } from 'react';

// ASSETS

import bolts from '../../assets/bolts.png';
import shields from '../../assets/shield.png';
import lock from '../../assets/lock.png';
import deviceMockup from '../../assets/device-mockup.png';
import eclipse from '../../assets/Ellipse-cut.png';
import fastPay from '../../assets/fast-pay.png';
import referal from '../../assets/referal.png';

// ICONS
import { AiFillCheckCircle } from "react-icons/ai";
import { ImFacebook, ImLinkedin2, ImTwitter, ImInstagram } from "react-icons/im";

// COMPONENTS
import { WhyUsCard, Navigation, Hero } from './components';

// PAGES
import AboutUs from '../AboutUs';
import Faq from '../Faq';

const Home = () => {

  const [activePage, setActivePage] = useState("home");

  const getActivePage = (currentPage) => {
    setActivePage(currentPage)
  }


  return (
    <div className='w-full min-h-screen'>
      <div className="hero px-[60px] bg-base sm:px-[20px] relative">
        {/* NAVIGATION */}
        <Navigation getActivePage={getActivePage} />
        {/* PAGES */}
        {activePage === 'home' ? <Hero /> : null}
      </div>

      {/* SECTIONS */}
      {activePage === 'about' ? <AboutUs /> : null}
      {activePage === 'faq' ? <Faq /> : null}
      {activePage !== 'faq' ? <section className='whyus px-[60px] sm:px-[20px] py-[60px]'>
        <h2 className='font-ui-semi text-[28px] text-center mb-[60px] text-[#0D0033]'>Why choose us?</h2>
        <div className='flex flex-row gap-[15px] justify-center items-start lg:grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
          <WhyUsCard icon={bolts} title={"Speed"} body={"Say goodbye to waiting. With us, your money transfers are lightning-fast, ensuring your funds reach their destination in no time."} />
          <WhyUsCard icon={shields} title={"Security"} body={"We prioritize your financial well-being. Our advanced security measures guarantee your money and personal information are safe and sound."} />
          <WhyUsCard icon={lock} title={"Secured Transactions"} body={"With our escrow service, your payments are held securely until both parties fulfill their obligations, ensuring a safe and fair exchange."} />
        </div>
      </section> : null}


      {activePage !== 'faq' && <section>

        <section className='px-[60px] sm:px-[20px] relative'>
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
                  <p className='text-[16px] text-body-text'>
                    <strong className='text-black'>User-friendly Interface:</strong> Our intuitive design ensures that making payments is a breeze, even for first-time users.
                  </p>
                </div>
                <div className='flex justify-between gap-[10px]'>
                  <div>
                    <AiFillCheckCircle size={24} color='#6E3EFF' />
                  </div>
                  <p className='text-[16px] text-body-text'>
                    <strong className='text-black'>Real-Time Updates:</strong> Stay in the know with real-time transaction updates. Track your payments as they happen, providing peace of mind and transparency.
                  </p>
                </div>
                <div className='flex justify-between gap-[10px]'>
                  <div>
                    <AiFillCheckCircle size={24} color='#6E3EFF' />
                  </div>
                  <p className='text-[16px] text-body-text'>
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
                  <p className='text-[16px] text-body-text'>
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
      </section>}


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