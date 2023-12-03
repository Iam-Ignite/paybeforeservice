/* eslint-disable react/prop-types */
/**
 * eslint-disable react/prop-types
 *
 * @format
 */

import { useState } from 'react';
import PaymentLinkModal from './PaymentLinkModal';
import axios from 'axios';

export default function PaymentModal({
	paymentModal,
	setPaymentModal,
}) {
	const [modal, setModal] = useState(false);
	const [paymentLink, setPaymentLink] = useState('');
	const [paymentId, setPaymentId] = useState('');
	const [amount, setAmount] = useState();
	const handlePayment = async () => {
		const token = localStorage.getItem('token');

		const endpoint =
			'https://paybeforeservice.onrender.com/PayBeforeService/v1/payment/generatePaymentLink';

		try {
			const response = await axios.post(
				endpoint,
				{
					amount: parseInt(amount),
				},
				{
					headers: {
						Authorization: `Bearer ${token}`,
						'Content-Type': 'application/json',
					},
				},
			);

			if (response.status >= 200 && response.status < 300) {
				console.log(response);
				setPaymentLink(response.data.link);
				setPaymentId(response.data.data);
			} else {
				console.log('hello');
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			<div
				className={`${
					!paymentModal ? 'hidden' : 'flex'
				} absolute w-full  justify-center items-center h-full left-0 top-0 z-50 bg-black/70 `}>
				<div className='h-auto flex flex-col justify-center items-center w-1/3 md:w-full md:mx-2 bg-white relative p-5 rounded-md'>
					<svg
						onClick={() => setPaymentModal(!true)}
						className='w-3 h-3 absolute right-8 top-6'
						aria-hidden='true'
						xmlns='http://www.w3.org/2000/svg'
						fill='black'
						viewBox='0 0 14 14'>
						<path
							stroke='black'
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth='2'
							d='m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6'
						/>
					</svg>
					<h3 className='font-ui-semi text-[24px] mt-5 text-[#0D0033] mb-2 text-center sm:text-[20px]'>
						Enter your mobile numbe
					</h3>
					<p className='text-[#555555] text-center'>
						Enter the amount you want to receive from your
						client, and a payment link will be generated
						that you can send to them
					</p>
					<div className='flex h-full w-4/5 mt-4 border-border border-ui-border rounded-2xl bg-[#F7F5FF] font-ui-semi text-[14px] text-[#555555]'>
						<h4 className='text-center border-r-ui-border bg-[#F7F5FF] border-border font-ui-regular px-5 py-[20px] rounded-l-[20000px]'>
							₦
						</h4>
						<input
							type='tel'
							name='phone'
							className='flex-1 bg-[#F7F5FF] h-full px-5 py-[24px] w-full overflow-hidden rounded-r-[20000px] outline-primary'
							placeholder='Enter Amount'
							onChange={(e) => setAmount(e.target.value)}
						/>
					</div>
					<button
						onClick={() => {
							setModal(!modal);
							setPaymentModal(!paymentModal);
							handlePayment();
						}}
						className='bg-primary px-[64px] sm:px-[0px] py-3 mt-4  w-1/2 sm:w-full font-ui-semi text-[16px] text-[#ffffff] rounded-[200000px]'>
						Continue
					</button>
				</div>
			</div>
			<PaymentLinkModal
				paymentLink={paymentLink}
				paymentId={paymentId}
				modal={modal}
				setModal={setModal}
			/>
		</>
	);
}
