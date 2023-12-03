/** @format */

import { useState, useEffect } from 'react';
import {
	BsEyeFill,
	BsEyeSlashFill,
	BsCheckCircleFill,
} from 'react-icons/bs';
import { Container } from '../CreateAccount/components';
import { BiX } from 'react-icons/bi';

const ResetPassword = () => {
	const [hidePassword, setHidePassword] = useState(true);
	const [token, setToken] = useState('');
	const [userId, setUserId] = useState('');
	const [hideConfirmPwd, setHideConfirmPwd] =
		useState(true);
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] =
		useState('');
	const [isPasswordValid, setIsPasswordValid] =
		useState(false);

	const handleHidePassword = () => {
		setHidePassword(!hidePassword);
	};

	const handleHideConfirmPwd = () => {
		setHideConfirmPwd(!hideConfirmPwd);
	};

	const handlePassword = (ev) => {
		const newPassword = ev.target.value;
		setPassword(newPassword);
		// Perform password validation
		const isValid =
			newPassword.length >= 8 &&
			/[A-Z]/.test(newPassword) &&
			/\d/.test(newPassword) &&
			/[!@#$%^&*(),.?":{}|<>]/.test(newPassword);
		setIsPasswordValid(isValid);
	};

	const handleConfirmPassword = (ev) => {
		setConfirmPassword(ev.target.value);
	};

	useEffect(() => {
		// Extract token and user ID from the URL
		const urlParams = new URLSearchParams(
			window.location.search,
		);
		setToken(urlParams.get('token'));
		setUserId(urlParams.get('user'));
	}, []);

	const makePutRequest = async () => {
		// Extract token and user ID from the URL

		// Check if passwords match
		if (password !== confirmPassword) {
			console.error('Passwords do not match');
			return;
		}

		// Check if password is valid
		if (!isPasswordValid) {
			console.error('Invalid password');
			return;
		}

		console.log(token, userId, password);

		const data = {
			new_password: password,
			token,
			user_Id: userId,
		};

		console.log(data);

		// Continue with the PUT request
		try {
			const endpoint = `https://paybeforeservice.onrender.com/PayBeforeService/v1/user/forgetPasswordUpdate`;

			const response = await fetch(endpoint, {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(data),
			});

			if (response.status === 200) {
				// Password update successful
				console.log('Password update successful');
				// You might want to redirect the user or show a success message
			} else {
				// Handle error responses
				console.log('Error:', response);
			}
		} catch (error) {
			console.log('Error:', error);
		}
	};

	return (
		<>
			<div className='my-5'>
				<h2 className='text-primary text-[24px] font-ui-bold text-center'>
					SwiftSettle
				</h2>
			</div>
			<Container>
				<h3 className='font-ui-semi text-[20px] text-center text-[#0D0033] mb-5'>
					Reset Password
				</h3>
				<div className='flex bg-base py-[16px] px-[24px] gap-5 rounded-[200000px] border-ui-border border-border'>
					<input
						type={hidePassword ? 'password' : 'text'}
						name='password'
						placeholder='Enter password'
						className='bg-inherit inline-block w-full flex-1 outline-none font-ui-semi text-[14px]'
						onChange={(e) => handlePassword(e)}
					/>
					<div onClick={handleHidePassword}>
						{hidePassword ? (
							<BsEyeSlashFill color='#808080' size={20} />
						) : (
							<BsEyeFill size={20} color='#808080' />
						)}
					</div>
				</div>
				<h3 className='mt-[16px] mb-[8px] font-ui-semi text-[14px]'>
					Confirm Password
				</h3>
				<div className='flex bg-base py-[16px] px-[24px] gap-5 rounded-[200000px] border-ui-border border-border'>
					<input
						type={hideConfirmPwd ? 'password' : 'text'}
						name='password'
						placeholder='Enter password'
						className='bg-inherit inline-block w-full flex-1 outline-none font-ui-semi text-[14px]'
						onChange={(e) => handleConfirmPassword(e)}
					/>
					<div onClick={handleHideConfirmPwd}>
						{hideConfirmPwd ? (
							<BsEyeSlashFill color='#808080' size={20} />
						) : (
							<BsEyeFill size={20} color='#808080' />
						)}
					</div>
				</div>
				<div className='mt-2 sm:mb-5'>
					<div
						className={`flex items-start gap-2 mb-2 ${
							isPasswordValid
								? 'text-success'
								: 'text-error'
						}`}>
						{isPasswordValid ? (
							<BsCheckCircleFill color='green' />
						) : (
							<BiX color='red' />
						)}
						<p className='text-[14px] text-body-text'>
							{isPasswordValid
								? 'Password is valid'
								: 'Password must be 8 characters or more and include a symbol, number, and upper-case letter'}
						</p>
					</div>
				</div>
				<button
					onClick={() => makePutRequest()}
					className='bg-primary px-[64px] m-auto sm:px-[0px] py-[21px] focus:border-2 w-full font-ui-semi text-[16px] text-[#ffffff] rounded-[200000px]'>
					Continue
				</button>{' '}
			</Container>
		</>
	);
};

export default ResetPassword;
