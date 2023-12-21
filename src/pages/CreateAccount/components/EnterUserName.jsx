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

import Container from './Container';

const EnterUserName = ({ setStep }) => {
	const [username, setUserName] = useState('');
	const [loading, setLoading] = useState(false);

	const handleUsername = (ev) => {
		setUserName(ev.target.value);
	};

	const handleSubmit = () => {
		setLoading(true);
		localStorage.setItem('userName', username);
		setTimeout(() => {
			setStep((prev) => prev + 1);
			setLoading(!true);
		}, 3000);
	};

	return (
		<Container>
			<h3 className='font-ui-semi text-[20px] text-center text-[#0D0033] mb-5'>
				What will you like to be called?
			</h3>
			<input
				type='text'
				placeholder='Your name'
				name='username'
				onChange={(e) => handleUsername(e)}
				className='px-[24px] py-[21px] bg-base border-ui-border border-border font-ui-semi text-[14px] rounded-[200000px] outline-primary'
			/>
			<p className='font-ui-regular text-[14px] text-body-text text-center px-[70px] mt-[15px] sm:px-5 modal:px-[10px]'>
				This is how you will appear on Swiftsettle and you
				will not be able to change it
			</p>
			<button
				onClick={() => handleSubmit()}
				className='bg-primary px-[64px] m-auto sm:px-[0px] py-[21px] focus:borde-2 w-fit sm:w-full font-ui-semi text-[16px] text-[#ffffff] rounded-[200000px]'>
				{!loading ? 'Continue' : 'Loading ...'}
			</button>
		</Container>
	);
};

export default EnterUserName;
