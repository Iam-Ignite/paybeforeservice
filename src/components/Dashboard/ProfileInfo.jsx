/** @format */


export default function ProfileInfo() {
	return (
		<div className='bg-white flex flex-col justify-center items-center p-9 m-10 border rounded-xl '>
			<div className='flex flex-col w-2/4'>
				<label
					className=' text-black font-ui-regular text-xs'
					htmlFor=''>
					Full Name
				</label>
				<input
					type='email'
					placeholder='Email Address'
					name='email'
					value='Jolene Ekene Magarat'
					className='border bg-[#FBFAFF] border-[#DADADA] text-[#555555] p-4 rounded-2xl'
				/>
			</div>
			<div className='flex flex-col w-2/4'>
				<label
					className=' text-black font-ui-regular text-xs'
					htmlFor=''>
					Full Name
				</label>
				<input
					type='email'
					placeholder='Email Address'
					name='email'
					value='Jolene Ekene Magarat'
					className='border bg-[#FBFAFF] border-[#DADADA] text-[#555555] p-4 rounded-2xl'
				/>
			</div>
			<div className='flex flex-col w-2/4'>
				<label
					className=' text-black font-ui-regular text-xs'
					htmlFor=''>
					Full Name
				</label>
				<div className='flex h-full w-full border-border border-ui-border rounded-[20000px] bg-[##F7F5FF] font-ui-semi text-[14px] text-[#555555]'>
					<h4 className='text-center border-r-ui-border bg-base border-border font-ui-regular px-5 py-[20px] rounded-l-[20000px]'>
						+234
					</h4>
					<input
						type='tel'
						name='phone'
						className='flex-1 bg-base h-full px-5 py-[24px] w-full overflow-hidden rounded-r-[20000px] outline-primary'
						placeholder='Enter phone number'
					/>
				</div>
			</div>
			<div className='flex flex-col w-2/4'>
				<label
					className=' text-black font-ui-regular text-xs'
					htmlFor=''>
					Full Name
				</label>
				<input
					type='email'
					placeholder='Email Address'
					name='email'
					value='Jolene Ekene Magarat'
					className='border bg-[#FBFAFF] border-[#DADADA] text-[#555555] p-4 rounded-2xl'
				/>
			</div>
		</div>
	);
}
