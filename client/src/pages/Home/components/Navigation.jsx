import { useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { AiOutlineClose } from 'react-icons/ai'

const Navigation = ({ getActivePage }) => {
    const [activeNavLink, setActiveNavLink] = useState("home");
    const [hideMenu, setHideMenu] = useState(true);

    const handleNavClick = (link) => {
        getActivePage(link)
        setActiveNavLink(link);
        setHideMenu(!hideMenu);
    }

    const handleHideModal = () => {
        setHideMenu(!hideMenu);
    }
    return (
        <nav className={`py-[35px] sm:py-0 w-full ${!hideMenu ? 'sm:fixed sm:left-0 sm:z-50 sm:h-screen' : null} flex items-center justify-between gap-[97px] sm:gap-[0px]`}>
            <div className='self-start sm:border-b-ui-border border-border sm:px-5 sm:fixed sm:left-0 sm:z-50 sm:top-0 sm:h-[10vh] sm:bg-white sm:flex sm:justify-between items-center sm:w-full'>
                <h5 className='text-[28px] sm:text-[20px] font-ui-bold text-primary'>SwiftSettle</h5>
                <div className='hidden p-2 border-ui-border rounded-lg sm:block ease-in-out transition-all' onClick={handleHideModal}>
                    {hideMenu ? <RxHamburgerMenu /> : <AiOutlineClose />}
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
            <div className={`fixed hidden top-[10vh] left-0 h-screen ${hideMenu ? 'translate-x-[-100%]' : 'translate-x-0'} sm:flex flex-col bg-white px-5 py-5 sm:h-full sm:w-[100vw] transform transition-transform ease-in-out duration-300 z-40 lg:w-full`}>
                <div className='mb-5'>
                    <ul className='flex flex-col gap-5 text-[16px] text-body-text font-ui-regular list-none transition-all ease-in-out h-full'>
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
    )
}

export default Navigation