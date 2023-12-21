/* eslint-disable react/prop-types */
/**
 * eslint-disable react/prop-types
 *
 * @format
 */

/**
 * eslint-disable react/prop-types
 *
 * @format
 */

/**
 * eslint-disable react/prop-types
 *
 * @format
 */

/** @format */

import { useState } from 'react';

import OTPInput from 'otp-input-react';
import axios from 'axios';
import Container from './Container';

const EnterOtp = ({ setStep }) => {
	const [otp, setOtp] = useState();
	const [errMsg, setErrMsg] = useState('');
	const [loading, setLoading] = useState(false);

	const verifyOtp = async () => {
		const endpoint =
			'https://paybeforeservice.onrender.com/PayBeforeService/v1/auth/verifyOtpReg';
		setLoading(true);
		try {
			const response = await axios.post(endpoint, {
				otp: parseInt(otp),
			});

			if (response.status >= 200 && response.status < 300) {
				setLoading(!true);
				// OTP verification succeeded

				setErrMsg(response.data.message);

				// Increment the step after 3000 milliseconds (3 seconds)
				setTimeout(() => setStep((prev) => prev + 1), 3000);
			} else {
				// OTP verification failed with status other than success
				console.log(
					'OTP verification failed with status:',
					response.status,
				);
			}
		} catch (error) {
			// Error in making the request or server returned an error status
			console.error('Error:', error);
			setLoading(!true);
			setErrMsg(error.response.data.message);
		}
	};

	const resendOtp = async () => {
		const email = localStorage.getItem('email');
		const endpoint =
			'https://paybeforeservice.onrender.com/PayBeforeService/v1/auth/resendOtp';

		try {
			const response = await axios.put(endpoint, {
				email,
			});

			if (response.status >= 200 && response.status < 300) {
				console.log('OTP resend succeeded:', response.data);
			} else {
				console.log(
					'OTP resend failed with status:',
					response.status,
				);
			}
		} catch (error) {
			console.error('Error:', error);
		}
	};

	return (
		<Container>
			{errMsg && (
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
				Enter the six-digit code that was sent to you
			</h3>
			<div className=''>
				<div className='flex justify-center'>
					<OTPInput
						value={otp}
						onChange={setOtp}
						autoFocus
						OTPLength={6}
						otpType='number'
						disabled={false}
						inputStyles={{
							backgroundColor: '#F7F7F7',
							height: '50px',
							width: '50px',
							marginRight: '0px',
						}}
						style={{
							justifyContent: 'center',
							alignItems: 'center',
							width: 'fit-content',
							gap: '20px',
						}}
						className='otp'
						inputClassName='otp-input'
					/>
				</div>
				<h4 className='font-ui-semi text-[14px] text-center mt-[10px] text-[#0D0033] underline'>
					Change Number
				</h4>
			</div>
			<button
				onClick={() => verifyOtp()}
				className='bg-primary px-[64px] m-auto sm:px-[0px] py-[21px] w-fit sm:w-full font-ui-semi text-[16px] text-[#ffffff] rounded-[200000px]'>
				{!loading ? 'Continue' : 'Loading ...'}
			</button>{' '}
			<button
				onClick={() => resendOtp()}
				className='text-primary text-center underline text-[14px] font-ui-semi sm:mt-5'>
				Resend
			</button>
		</Container>
	);
};

export default EnterOtp;
