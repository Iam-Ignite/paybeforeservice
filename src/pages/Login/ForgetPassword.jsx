/** @format */

import { useState } from 'react';
import { Container } from '../CreateAccount/components';
import { Link } from 'react-router-dom';

function ForgetPassword() {
	const [email, setEmail] = useState('');
	const [loading, setLoading] = useState(false);
	const [modal, setModal] = useState(false);

	const handleSubmit = async () => {
		setLoading(true);

		// https://paybeforeservice.onrender.com/PayBeforeService/v1/user/forgetPasswordRequest/faithgodwin821@gmail.com

		try {
			const response = await fetch(
				`https://paybeforeservice.onrender.com/PayBeforeService/v1/user/forgetPasswordRequest/${email}`,
			);
			if (response.status === 200) {
				// Reset email sent successfully
				console.log('Reset email sent successfully');
				setLoading(!true);
				setModal(true);

				// You might want to redirect the user or show a success message
			} else {
				// Handle error responses
				console.error('Error:', response.statusText);
			}
		} catch (error) {
			console.error('Error:', error.message);
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className='flex flex-col items-center h-screen justify-center'>
			<div className='my-5'>
				<h2 className='text-primary text-[24px] font-ui-bold text-center'>
					SwiftSettle
				</h2>
				<p className='text-center text-body-text font-ui-regular text-[16px] px-[70px] sm:px-[30px]'>
					Enter your email address, and we will send you
					instructions on how to create a new password.
				</p>
			</div>
			{!modal ? (
				<Container>
					<h3 className='mt-[16px] mb-[8px] font-ui-semi text-[14px]'>
						Email
					</h3>
					<input
						type='email'
						placeholder='Email Address'
						name='email'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						className='px-[25px] py-[21px] bg-base border-border border-ui-border rounded-lg font-ui-semi text-[14px] outline-primary'
					/>
					<div className='-mb-5'>
						<p className='text-center text-white font-ui-regular text-[16px] px-[70px] sm:px-[30px]'>
							We will use this email to contact you if the
							need arises.
						</p>
					</div>
					<button
						onClick={() => handleSubmit()}
						className='bg-primary px-[64px] m-auto sm:px-[0px] py-[21px] focus:border-2 w-fit w-full font-ui-semi text-[16px] text-[#ffffff] rounded-[200000px]'>
						{!loading ? 'Continue' : 'Loading ...'}
					</button>
					<div className='mt-4 text-center'>
						<Link to='/login' className='text-primary'>
							Back to Login
						</Link>
					</div>
				</Container>
			) : (
				<Container>
					<div className='flex flex-col justify-center items-center'>
						<svg
							width='151'
							height='150'
							viewBox='0 0 151 150'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'>
							<rect
								x='0.5'
								width='150'
								height='150'
								rx='75'
								fill='#6E3EFF'
								fillOpacity='0.1'
							/>
							<rect
								x='13'
								y='12.5'
								width='125'
								height='125'
								rx='62.5'
								fill='#6E3EFF'
							/>
							<path
								d='M92.9225 73.7757C91.4381 73.3851 89.6934 73.1768 87.61 73.1768C84.7194 73.1768 83.6517 73.8799 82.1673 74.9997C82.0892 75.0518 82.0111 75.1299 81.9329 75.208L79.459 77.8382C77.3757 80.0257 73.6256 80.0518 71.5423 77.8122L69.0684 75.208C68.9902 75.1299 68.9121 75.0518 68.834 74.9997C67.3496 73.8799 66.2819 73.1768 63.3913 73.1768C61.3079 73.1768 59.5632 73.3851 58.0788 73.7757C51.8809 75.4424 51.8809 80.3643 51.8809 84.6872V87.109C51.8809 93.6455 51.8809 101.041 65.8131 101.041H85.1881C94.4329 101.041 99.1204 96.3538 99.1204 87.109V84.6872C99.1204 80.3643 99.1204 75.4424 92.9225 73.7757ZM81.5684 91.6663H69.4329C68.4434 91.6663 67.6361 90.8591 67.6361 89.8434C67.6361 88.8278 68.4434 88.0205 69.4329 88.0205H81.5684C82.5579 88.0205 83.3652 88.8278 83.3652 89.8434C83.3652 90.8591 82.5579 91.6663 81.5684 91.6663Z'
								fill='white'
							/>
							<path
								d='M77.2454 50.7028C77.2454 49.7393 76.4642 48.958 75.5007 48.958C74.5371 48.958 73.7559 49.7393 73.7559 50.7028V54.1663H77.2715V50.7028H77.2454Z'
								fill='white'
							/>
							<path
								d='M94.2767 65.6774V70.1045C94.1725 70.0524 94.0423 70.0264 93.9381 70.0003H93.9121C92.0631 69.5055 90.0059 69.2712 87.61 69.2712C83.5996 69.2712 81.6986 70.443 79.9798 71.7451C79.6152 72.0055 79.3548 72.2659 79.0944 72.5264L76.6204 75.1566C76.36 75.417 75.9434 75.5732 75.5007 75.5732C75.2923 75.5732 74.7715 75.5472 74.3809 75.1305L71.8288 72.4482C71.5684 72.1618 71.2559 71.9274 71.1777 71.8753C69.3027 70.443 67.4017 69.2712 63.3913 69.2712C60.9954 69.2712 58.9382 69.5055 57.0632 70.0003C56.959 70.0264 56.8288 70.0524 56.7246 70.1045V65.6774C56.7246 60.2868 56.7246 54.167 68.235 54.167H73.7559V63.1514L72.0632 61.4587C71.36 60.7555 70.2663 60.7555 69.5632 61.4587C68.8861 62.1357 68.8861 63.2555 69.5632 63.9326L74.2507 68.6201C74.2767 68.6462 74.3027 68.6462 74.3027 68.6722C74.459 68.8024 74.6413 68.9326 74.8236 69.0107C75.0579 69.0889 75.2663 69.1409 75.5007 69.1409C75.735 69.1409 75.9434 69.0889 76.1777 69.0107C76.3861 68.9326 76.5684 68.8024 76.7506 68.6201L81.4381 63.9326C82.1152 63.2555 82.1152 62.1357 81.4381 61.4587C80.735 60.7555 79.6413 60.7555 78.9381 61.4587L77.2454 63.1514V54.167H82.7663C94.2767 54.167 94.2767 60.2868 94.2767 65.6774Z'
								fill='white'
							/>
						</svg>

						<p className='text-center mt-5 text-body-text font-ui-regular text-[16px] px-[70px] sm:px-[30px]'>
							If the email address is valid, we&apos;`ll
							send you a password reset link. Check your
							inbox and spam folder, or try resending the
							request if needed
						</p>
					</div>
				</Container>
			)}
		</div>
	);
}

export default ForgetPassword;
