/** @format */

export default function SuccessModal() {
	return (
		<div className='hidden absolute w-full flex justify-center items-center h-full left-0 top-0 z-50 bg-black/70 '>
			<div className='h-auto flex flex-col justify-center items-center w-1/3 bg-white relative p-5 rounded-md'>
				
				<h3 className='font-ui-semi text-[24px] mt-5 text-[#0D0033] mb-2 text-center sm:text-[20px]'>
					Enter your mobile numbe
				</h3>
				<p className='text-[#555555] text-center'>
					Enter the amount you want to receive from your
					client, and a payment link will be generated that
					you can send to them
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
						/>
					</div>
					<button className='bg-primary px-[64px] sm:px-[0px] py-3 mt-4  w-1/2 sm:w-full font-ui-semi text-[16px] text-[#ffffff] rounded-[200000px]'>
						Continue
					</button>
			</div>
		</div>
	);
}
