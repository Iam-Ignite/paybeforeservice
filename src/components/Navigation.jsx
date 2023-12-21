/** @format */

import {
	Link,
	NavLink,
	Outlet,
	useLocation,
} from 'react-router-dom';
import { useState } from 'react';

// ICONS
import { RxHamburgerMenu } from 'react-icons/rx';
import { AiOutlineClose } from 'react-icons/ai';

const Navigation = () => {
	const [hideMenu, setHideMenu] = useState(true);
	const handleHideModal = () => {
		setHideMenu(!hideMenu);
	};

	const { pathname } = useLocation();

	return (
		<>
			{pathname !== '/signup' && (
				<nav
					className={`py-[35px] px-[60px] sm:px-[20px] sm:py-0 w-full bg-base ${
						!hideMenu
							? 'sm:fixed sm:left-0 sm:z-50 sm:h-screen'
							: null
					} flex items-center justify-between gap-[97px] sm:gap-[0px]`}>
					<div className='self-start sm:border-b-ui-border border-border sm:px-5 sm:fixed sm:left-0 sm:z-50 sm:top-0 sm:h-[10vh] sm:bg-white sm:flex sm:justify-between items-center sm:w-full'>
						<h5 className='text-[28px] sm:text-[20px] font-ui-bold text-primary'>
							SwiftSettle
						</h5>
						<div
							className='hidden p-2 border-ui-border rounded-lg sm:block ease-in-out transition-all'
							onClick={handleHideModal}>
							{hideMenu ? (
								<RxHamburgerMenu />
							) : (
								<AiOutlineClose />
							)}
						</div>
					</div>
					<div className='flex flex-row items-center justify-between sm:hidden flex-[2] sm:w-full lg:w-full'>
						<div className='flex-[2] sm:hidden'>
							<ul className='flex flex-row gap-[50px] md:gap-5 text-[16px] text-body-text font-ui-regular list-none outline-none transition-all ease-in-out h-full items-center'>
								<NavLink
									to={'/'}
									className={({ isActive }) =>
										isActive
											? 'text-primary font-ui-semi transition-all ease-out duration-500'
											: 'select-none hover:text-primary'
									}>
									<li className='w-fit'>Home</li>
								</NavLink>
								<NavLink
									to={'/about'}
									className={({ isActive }) =>
										isActive
											? 'text-primary font-ui-semi transition-all ease-out duration-500'
											: 'select-none hover:text-primary'
									}>
									<li className='w-fit'>About us</li>
								</NavLink>
								<NavLink
									to={'/faq'}
									className={({ isActive }) =>
										isActive
											? 'text-primary font-ui-semi transition-all ease-out duration-500'
											: 'select-none hover:text-primary'
									}>
									<li className='w-fit'>Faq</li>
								</NavLink>
							</ul>
						</div>
						<div className='flex flex-row items-center gap-[20px] justify-between text-[16px] font-ui-semi sm:hidden'>
							<Link to={'/login'}>
								<button className='py-[10px] text-primary'>
									Log in
								</button>
							</Link>
							<div className='w-[3px] h-[30px] bg-primary rounded-full'></div>
							<Link to={'/signup'}>
								<button className=' bg-primary px-[20px] py-[10px] rounded-[20000px] text-white'>
									Signup
								</button>
							</Link>
						</div>
					</div>
					{/* mobile  navigation*/}
					<div
						className={`fixed hidden top-[10vh] left-0 h-screen ${
							hideMenu
								? 'translate-x-[-100%]'
								: 'translate-x-0'
						} sm:flex flex-col bg-white px-5 py-5 sm:h-full sm:w-[100vw] transform transition-transform ease-in-out duration-300 z-40 lg:w-full`}>
						<div className='mb-5'>
							<ul className='flex flex-col gap-5 text-[16px] font-ui-regular list-none transition-all ease-in-out h-full'>
								<NavLink
									to={'/'}
									className={({ isActive }) =>
										isActive
											? 'text-primary font-ui-semi transition-all ease-out duration-500'
											: 'select-none'
									}
									onClick={handleHideModal}>
									<li className='w-full py-4'>Home</li>
								</NavLink>
								<NavLink
									to={'/about'}
									className={({ isActive }) =>
										isActive
											? 'text-primary font-ui-semi transition-all ease-out duration-500'
											: 'select-none'
									}
									onClick={handleHideModal}>
									<li className='w-full py-4'>About us</li>
								</NavLink>
								<NavLink
									to={'/faq'}
									className={({ isActive }) =>
										isActive
											? 'text-primary font-ui-semi transition-all ease-out duration-500'
											: 'select-none'
									}
									onClick={handleHideModal}>
									<li className='w-full py-4'>Faq</li>
								</NavLink>
							</ul>
						</div>
						<div className='flex flex-col items-center gap-[8px] justify-between text-[16px] font-ui-semi'>
							<Link to="/login" className='py-[15px] text-center text-primary border-ui-border rounded-[5px] w-full'>
								Log in
							</Link>
							<div className='w-[3px] h-[30px] bg-primary rounded-none rotate-90'></div>
							<Link to='/signup' className=' bg-primary py-[15px] text-center rounded-[5px] w-full text-white'>
								Signup
							</Link>
						</div>
					</div>
				</nav>
			)}
			<Outlet />
		</>
	);
};

export default Navigation;
