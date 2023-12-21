/** @format */

import { useState } from 'react';
import Container from './Container';
import axios from 'axios';

// ... (previous imports)

// eslint-disable-next-line react/prop-types
const EnterEmail = ({ setStep }) => {
	const [email, setEmail] = useState('');
	const [err, setErr] = useState(!true);
	const [errMsg, setErrMsg] = useState('');
	const [loading, setLoading] = useState(false);

	const sendOtp = async () => {
		setLoading(true);
		const endpoint =
			'https://paybeforeservice.onrender.com/PayBeforeService/v1/auth/sendOtp';
		localStorage.setItem('email', email);

		try {
			const response = await axios.post(endpoint, {
				email: email,
			});

			// Check the response status and handle it accordingly
			if (response.status >= 200 && response.status < 300) {
				if (response.status === 201 | 201) {
					setErr(true);
					setLoading(!true);

					setErrMsg(response.data.message);
					setTimeout(() => {
						setStep((prev) => prev + 1);
					}, 3000);
				}

				// Handle other success scenarios if needed
			} else {
				console.log(
					'Request failed with status:',
					response.status,
				);
				// Handle the failed response
			}
		} catch (error) {
			console.log(error.response.data.message);
			setErrMsg(error.response.data.message);
			setLoading(!true);

			// Handle other errors
		}
	};

	return (
		<Container>
			{err && (
				<div
					id='toast-warning'
					className='flex absolute top-10 right-10 items-center w-full max-w-xs p-4 text-white bg-white rounded-lg shadow dark:text-gray-400 dark:bg-[#6E3EFF]'
					role='alert'>
					<div className='inline-flex items-center justify-center flex-shrink-0 w-8 h-8'>
						<svg
							className='w-5 h-5'
							aria-hidden='true'
							xmlns='http://www.w3.org/2000/svg'
							fill='white'
							viewBox='0 0 20 20'>
							<path d='M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM10 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm1-4a1 1 0 0 1-2 0V6a1 1 0 0 1 2 0v5Z' />
						</svg>
						<span className='sr-only'>Warning icon</span>
					</div>
					<div className='ms-3 text-sm font-normal text-white'>
						{errMsg}
					</div>
					<button
						type='button'
						className='ms-auto -mx-1.5 -my-1.5 text-white rounded-lg focus:ring-2 0 p-1.5 inline-flex items-center justify-center h-8 w-8'
						data-dismiss-target='#toast-warning'
						aria-label='Close'>
						<span className='sr-only'>Close</span>
						<svg
							className='w-3 h-3'
							aria-hidden='true'
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 14 14'>
							<path
								stroke='currentColor'
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								d='m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6'
							/>
						</svg>
					</button>
				</div>
			)}
			<h3 className='font-ui-semi text-[20px] text-center text-[#0D0033] mb-5'>
				What is your email?
			</h3>
			<input
				type='email'
				placeholder='Email Address'
				name='email'
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				className='px-[25px] py-[21px] bg-base border-border border-ui-border rounded-[200000px] font-ui-semi text-[14px] outline-primary'
			/>
			<div className='mb-5 mt-[10px]'>
				<p className='text-center text-body-text font-ui-regular text-[16px] px-[70px] sm:px-[30px]'>
					We will use this email to contact you if the need
					arise
				</p>
				{/* <button>Resend OTP</button> */}
			</div>
			{/* <button onClick={() => sendOtp()}>hello</button> */}
			{/* Pass a function reference to onClick */}
			{/* <ContinueBtn setStep={setStep} status={status} /> */}
			<button
				onClick={() => sendOtp()}
				className='bg-primary px-[64px] m-auto sm:px-[0px] py-[21px] focus:borde-2 w-fit sm:w-full font-ui-semi text-[16px] text-[#ffffff] rounded-[200000px]'>
				{!loading ? 'Continue' : 'Loading ...'}
			</button>
		</Container>
	);
};

export default EnterEmail;
