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

import Container from './Container';

import { BsRecordCircleFill } from 'react-icons/bs';
import { BiCircle } from 'react-icons/bi';
import { useState } from 'react';

const EnterGender = ({ setStep }) => {
	const [userGender, setUserGender] = useState('F');
	const [loading, setLoading] = useState(false);

	const handleSubmit = () => {
		setLoading(true);
		localStorage.setItem('userGender', userGender);
		setTimeout(() => {
			setLoading(!true);

			setStep((prev) => prev + 1);
		}, 3000);
	};

	return (
		<Container>
			<h3 className='font-ui-semi text-[20px] text-center text-[#0D0033] mb-5'>
				What is your Gender?
			</h3>
			<div
				onClick={() => setUserGender('F')}
				className='flex items-center border-border border-ui-border bg-base gap-2 text-body-text font-ui-semi text-[14px] px-5 py-[22px] rounded-[10px]'>
				{userGender === 'F' ? (
					<BsRecordCircleFill color='#6E3EFF' size={24} />
				) : (
					<BiCircle color='#808080' size={24} />
				)}
				<p>Woman</p>
			</div>
			<div
				onClick={() => setUserGender('M')}
				className='flex mt-5 items-center border-border border-ui-border bg-base gap-2 text-body-text font-ui-semi text-[14px] px-5 py-[22px] rounded-[10px]'>
				{userGender === 'M' ? (
					<BsRecordCircleFill color='#6E3EFF' size={24} />
				) : (
					<BiCircle color='#808080' size={24} />
				)}
				<p>Man</p>
			</div>
			<button
				onClick={() => handleSubmit()}
				className='bg-primary px-[64px] m-auto sm:px-[0px] py-[21px] focus:borde-2 w-fit sm:w-full font-ui-semi text-[16px] text-[#ffffff] rounded-[200000px]'>
				{!loading ? 'Continue' : 'Loading ...'}
			</button>
		</Container>
	);
};

export default EnterGender;
