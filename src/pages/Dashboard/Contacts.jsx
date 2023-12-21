/** @format */

// import React from 'react'

export default function Contacts() {
	return (
		<div className='flex flex-col p-14 gap-2 px-28 md:px-8'>
			<h2 className='text-lg font-semibold text-[#6E3EFF]'>
				Contact Swiftsettle
			</h2>

			<p className='text-[#555555] text-left'>
				If you require assistance with understanding
				Swiftsettle&apos;s operation or encounter technical
				issues, we encourage you to review our Frequently
				Asked Questions (FAQs).
			</p>
			<p className='text-[#555555] text-left'>
				If you couldn&apos;t locate the information you
				need, kindly fill out the form below with as much
				detail as possible, ensuring your email address is
				accurate. We anticipate receiving your inquiry and
				are eager to assist you
			</p>

			<div className='border bg-white  rounded-md flex flex-col p-8'>
				<p className='text-[#555555] text-left'>
					Pick the most suitable subject for your problem
					from the list below
				</p>

				<div className='radio-buttons-container mt-5  flex-col'>
					<div className='radio-button'>
						<input
							name='radio-group'
							id='radio2'
							className='radio-button__input'
							type='radio'
						/>
						<label
							htmlFor='radio2'
							className='radio-button__label'>
							<span className='radio-button__custom'></span>
							Ask a general question
						</label>
					</div>
					<div className='radio-button'>
						<input
							name='radio-group'
							id='radio1'
							className='radio-button__input'
							type='radio'
						/>
						<label
							htmlFor='radio1'
							className='radio-button__label'>
							<span className='radio-button__custom'></span>
							Help with payment
						</label>
					</div>
					<div className='radio-button'>
						<input
							name='radio-group'
							id='radio4'
							className='radio-button__input'
							type='radio'
						/>
						<label
							htmlFor='radio4'
							className='radio-button__label'>
							<span className='radio-button__custom'></span>
							Report a technical issue
						</label>
					</div>
					<div className='radio-button'>
						<input
							name='radio-group'
							id='radio5'
							className='radio-button__input'
							type='radio'
						/>
						<label
							htmlFor='radio5'
							className='radio-button__label'>
							<span className='radio-button__custom'></span>
							Request my data
						</label>
					</div>
					<div className='radio-button'>
						<input
							name='radio-group'
							id='radio6'
							className='radio-button__input'
							type='radio'
						/>
						<label
							htmlFor='radio6'
							className='radio-button__label'>
							<span className='radio-button__custom'></span>
							See why I was blocked
						</label>
					</div>

					<div className='text-[#706f6f] font-medium mt-5 mb-2 text-xs'>
						Full Name
					</div>

					<input
						type='tel'
						name='phone'
						className='flex-1 border text-black h-full px-5 py-4 w-full overflow-hidden rounded-xl outline-primary'
					/>
					<div className='text-[#706f6f] font-medium mt-5 mb-2 text-xs'>
						Email Address
					</div>

					<input
						type='tel'
						name='phone'
						className='flex-1 border text-black h-full px-5 py-4 w-full overflow-hidden rounded-xl outline-primary'
					/>
					<div className='text-[#706f6f] font-medium mt-5 mb-2 text-xs'>
						How can we help you?
					</div>

					<textarea
						name=''
						className='flex-1 border text-black h-full px-5 py-4 w-full overflow-hidden rounded-xl outline-primary'
						id=''
						cols='10'
						rows='4'></textarea>
				</div>
			</div>
		</div>
	);
}
