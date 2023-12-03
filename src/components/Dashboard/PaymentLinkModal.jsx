/* eslint-disable react/prop-types */

export default function PaymentLinkModal({
	modal,
	setModal,
	paymentLink,
	paymentId,
}) {
	return (
		<div
			className={`${
				!modal ? 'hidden' : 'flex'
			} absolute w-full  justify-center items-center h-full left-0 top-0 z-50 bg-black/70 `}>
			<div className='h-auto flex gap-1  flex-col justify-center items- w-1/3 md:w-full md:mx-2 bg-white relative p-6 pb-8 rounded-md'>
				<svg
					onClick={() => setModal(!modal)}
					className='w-3 h-3 absolute right-8 top-6'
					aria-hidden='true'
					xmlns='http://www.w3.org/2000/svg'
					fill='black'
					viewBox='0 0 14 14'>
					<path
						stroke='black'
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth='2'
						d='m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6'
					/>
				</svg>
				<h3 className='font-ui-semi text-lg mt-5 text-[#0D0033] mb-2  '>
					Here is the link to receive your payments
				</h3>
				<p className='text-[#555555] text-left'>
					Copy this link and send it to the people from whom
					you want to receive payment. Also, don&apos;t
					forget to save it in case you want to use it later
				</p>
				<div className='text-[#555] font-semibold mb-2 text-xs'>
					Payment Id
				</div>
				{/* Search */}
				<div className='bg-[#F7F5FF] border rounded-md p-2 px-3 flex'>
					<input
						type='text'
						value={paymentId}
						className='bg-transparent outline-none text-sm px-2 w-full text-[#323232]'
					/>
					<svg
						className='cursor-pointer'
						width='24'
						height='24'
						viewBox='0 0 24 24'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'>
						<path
							d='M15.75 17.25V20.625C15.75 21.246 15.246 21.75 14.625 21.75H4.875C4.57663 21.75 4.29048 21.6315 4.0795 21.4205C3.86853 21.2095 3.75 20.9234 3.75 20.625V7.875C3.75 7.254 4.254 6.75 4.875 6.75H6.75C7.25257 6.74966 7.7543 6.79114 8.25 6.874M15.75 17.25H19.125C19.746 17.25 20.25 16.746 20.25 16.125V11.25C20.25 6.79 17.007 3.089 12.75 2.374C12.2543 2.29114 11.7526 2.24966 11.25 2.25H9.375C8.754 2.25 8.25 2.754 8.25 3.375V6.874M15.75 17.25H9.375C9.07663 17.25 8.79048 17.1315 8.5795 16.9205C8.36853 16.7095 8.25 16.4234 8.25 16.125V6.874M20.25 13.5V11.625C20.25 10.7299 19.8944 9.87145 19.2615 9.23852C18.6286 8.60558 17.7701 8.25 16.875 8.25H15.375C15.0766 8.25 14.7905 8.13148 14.5795 7.9205C14.3685 7.70952 14.25 7.42337 14.25 7.125V5.625C14.25 5.18179 14.1627 4.74292 13.9931 4.33345C13.8235 3.92397 13.5749 3.55191 13.2615 3.23852C12.9481 2.92512 12.576 2.67652 12.1666 2.50691C11.7571 2.3373 11.3182 2.25 10.875 2.25H9.75'
							stroke='#0D0033'
							strokeWidth='1.5'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
					</svg>
				</div>
				<div className='text-[#555] font-semibold mb-2 text-xs'>
					Payment link
				</div>
				{/* Search */}
				<div className='bg-[#F7F5FF] border rounded-md p-2 px-3 flex'>
					<input
						type='text'
						value={paymentLink}
						className='bg-transparent outline-none text-sm px-2 w-full text-[#323232]'
					/>
					<svg
						className='cursor-pointer'
						width='24'
						height='24'
						viewBox='0 0 24 24'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'>
						<path
							d='M15.75 17.25V20.625C15.75 21.246 15.246 21.75 14.625 21.75H4.875C4.57663 21.75 4.29048 21.6315 4.0795 21.4205C3.86853 21.2095 3.75 20.9234 3.75 20.625V7.875C3.75 7.254 4.254 6.75 4.875 6.75H6.75C7.25257 6.74966 7.7543 6.79114 8.25 6.874M15.75 17.25H19.125C19.746 17.25 20.25 16.746 20.25 16.125V11.25C20.25 6.79 17.007 3.089 12.75 2.374C12.2543 2.29114 11.7526 2.24966 11.25 2.25H9.375C8.754 2.25 8.25 2.754 8.25 3.375V6.874M15.75 17.25H9.375C9.07663 17.25 8.79048 17.1315 8.5795 16.9205C8.36853 16.7095 8.25 16.4234 8.25 16.125V6.874M20.25 13.5V11.625C20.25 10.7299 19.8944 9.87145 19.2615 9.23852C18.6286 8.60558 17.7701 8.25 16.875 8.25H15.375C15.0766 8.25 14.7905 8.13148 14.5795 7.9205C14.3685 7.70952 14.25 7.42337 14.25 7.125V5.625C14.25 5.18179 14.1627 4.74292 13.9931 4.33345C13.8235 3.92397 13.5749 3.55191 13.2615 3.23852C12.9481 2.92512 12.576 2.67652 12.1666 2.50691C11.7571 2.3373 11.3182 2.25 10.875 2.25H9.75'
							stroke='#0D0033'
							strokeWidth='1.5'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
					</svg>
				</div>
			</div>
		</div>
	);
}
