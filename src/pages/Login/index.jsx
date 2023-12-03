/** @format */

import { useState } from 'react';
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs';
import Container from '../CreateAccount/components/Container';
import { Link, useNavigate } from 'react-router-dom';
import { Navigation } from '../../components';

const Login = () => {
	const [hidePassword, setHidePassword] = useState(true);
	const [loading, setLoading] = useState(false);
	const [password, setPassword] = useState('');

	const navigate = useNavigate();

	const handleHidePassword = () => {
		setHidePassword(!hidePassword);
	};

	const handleSubmit = async () => {
		// Get email and password from the form
		const email = document.querySelector(
			'input[name="email"]',
		).value;

		// Add your password validation if needed
		if (!password) {
			console.error('Password is required');
			return;
		}

		setLoading(true);

		const endpoint =
			'https://paybeforeservice.onrender.com/PayBeforeService/v1/auth/login';

		const data = {
			email: email,
			password: password,
		};

		try {
			const response = await fetch(endpoint, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(data),
			});

			if (response.ok) {
				const res = await response.json();
				// Login successful
				localStorage.setItem('isLoggedIn', 'true');
				localStorage.setItem('token', res.token);
				navigate('/dashboard'); // Redirect to the dashboard or any other page
			} else {
				// Handle error responses
				console.error('Error:', response.statusText);
				setLoading(false);
			}
		} catch (error) {
			console.error('Error:', error.message);
			setLoading(false);
			// Handle any network or other errors
		}
	};

	return (
		<div className='mx-5'>
			<Navigation />
			<div className='my-5'>
				<h2 className='text-primary text-[24px] font-ui-bold text-center '>
					SwiftSettle
				</h2>
			</div>
			<Container>
				<h3 className='mt-[16px] mb-[8px] font-ui-semi text-[14px]'>
					Email
				</h3>
				<input
					type='email'
					placeholder='Email Address'
					name='email'
					className='px-[25px] py-[21px] bg-base border-border border-ui-border rounded-lg font-ui-semi text-[14px] outline-primary'
				/>
				<h3 className='mt-[16px] mb-[8px] font-ui-semi text-[14px]'>
					Password
				</h3>
				<div className='flex bg-base py-[16px] px-[24px] gap-5 rounded-lg border-ui-border border-border'>
					<input
						type={hidePassword ? 'password' : 'text'}
						name='password'
						placeholder='Enter password'
						className='bg-inherit inline-block w-full flex-1 outline-none font-ui-semi text-[14px]'
						onChange={(e) => setPassword(e.target.value)}
					/>
					<div onClick={handleHidePassword}>
						{hidePassword ? (
							<BsEyeSlashFill color='#808080' size={20} />
						) : (
							<BsEyeFill size={20} color='#808080' />
						)}
					</div>
				</div>
				<Link
					to='/forget-password'
					className='mt-[16px] mb-[8px] text-primary text-right font-ui-semi text-[14px]'>
					Forgot password?
				</Link>
				<button
					onClick={() => handleSubmit()}
					className='bg-primary px-[64px] m-auto sm:px-[0px] py-3 mt-4 w-fit sm:w-full font-ui-semi text-[16px] text-[#ffffff] rounded-3xl'>
					{!loading ? 'Login' : 'Loading ...'}
				</button>{' '}
			</Container>
		</div>
	);
};

export default Login;
