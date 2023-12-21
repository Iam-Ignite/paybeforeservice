/* eslint-disable react/prop-types */
/** @format */

import Userheader from './Userheader';
import { Link, useNavigate } from 'react-router-dom';

export default function Dashnavidate({username}) {
	const navigate = useNavigate();

	const active = window.location.href;
	const logout = () => {
		localStorage.clear();
		navigate('/');
	};

	return (
		<div className='md:bg-[#FFF] md:shadow-2xl bg-[#F7F7F7]  flex md:flex-row 2xl:flex-col gap-5 border-[#DADADA] border-r md:h-[90px] 2xl:h-[100vh] 2xl:p-4 md:p-0'>
			{/* Top */}
			<div className='md:hidden 2xl:block'>
				<Userheader username={username} />
			</div>

			{/* Bottom */}
			<div className='p-5 flex md:flex-row md:justify-evenly md:items-center md:w-full 2xl:flex-col gap-3 pl-7'>
				{/* Items */}
				{/* Home */}
				<Link
					to='/dashboard'
					className={`flex items-center p-4 gap-3 cursor-pointer hover:bg-[#6e3eff1a] rounded-[10px] hover:text-[#6E3EFF] ${
						active.includes('dashboard')
							? 'bg-[#6e3eff1a] rounded-[10px] text-[#6E3EFF] h-14'
							: 'text-[#555]'
					} `}>
					<i>
						<img src='/image/home.svg' alt='' />
					</i>
					<div className='font-[500] md:hidden'>Home</div>
				</Link>

				{/* Transactions */}
				<Link
					to='/transactions'
					className={`flex items-center p-4 gap-3 cursor-pointer hover:bg-[#6e3eff1a] hover:rounded-[10px] hover:text-[#6E3EFF] ${
						active.includes('transactions')
							? 'bg-[#6e3eff1a] rounded-[10px] text-[#6E3EFF] h-14'
							: 'text-[#555]'
					} `}>
					<i>
						<img src='/image/tx.svg' alt='' />
					</i>
					<div className='font-[400] md:hidden'>
						Transactions
					</div>
				</Link>

				{/* Referrals */}
				<Link
					to='/refferals'
					className={`flex items-center p-4 gap-3 cursor-pointer hover:bg-[#6e3eff1a] hover:rounded-[10px] hover:text-[#6E3EFF] ${
						active.includes('refferals')
							? 'bg-[#6e3eff1a] rounded-[10px] text-[#6E3EFF] h-14'
							: 'text-[#555]'
					} `}>
					<i>
						<img src='/image/referrals.svg' alt='' />
					</i>
					<div className='font-[400] md:hidden'>
						Referrals
					</div>
				</Link>

				{/* Edit Profile */}
				<Link
					to='/profile'
					className={`flex items-center p-4 gap-3 cursor-pointer hover:bg-[#6e3eff1a] hover:rounded-[10px] hover:text-[#6E3EFF] ${
						active.includes('profile')
							? 'bg-[#6e3eff1a] rounded-[10px] text-[#6E3EFF] h-14'
							: 'text-[#555]'
					} `}>
					<i>
						<img src='/image/profile.svg' alt='' />
					</i>
					<div className='font-[400] md:hidden'>
						Edit Profile
					</div>
				</Link>

				{/* Contact & FAQs */}
				<Link
					to='/contacts'
					className={`flex items-center p-4 gap-3 cursor-pointer hover:bg-[#6e3eff1a] hover:rounded-[10px] hover:text-[#6E3EFF] ${
						active.includes('contacts')
							? 'bg-[#6e3eff1a] rounded-[10px] text-[#6E3EFF] h-14'
							: 'text-[#555]'
					} `}>
					<i>
						<img src='/image/contact.svg' alt='' />
					</i>
					<div className='font-[400] md:hidden'>
						Contact & FAQs
					</div>
				</Link>

				{/* Logout */}
				<button
					onClick={() => logout()}
					className={`md:hidden 2xl:flex items-center p-4 gap-3 cursor-pointer hover:bg-[#6e3eff1a] hover:rounded-[10px] hover:text-[#6E3EFF] ${
						active.includes() == 'logout'
							? 'bg-[#6e3eff1a] rounded-[10px] text-[#6E3EFF] h-14'
							: 'text-[#555]'
					} `}>
					<i>
						<img src='/image/logout.svg' alt='' />
					</i>
					<div className='font-[400] md:hidden'>Logout</div>
				</button>
			</div>
		</div>
	);
}
