/** @format */

import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
export default function Userheader() {
	const [profileData, setProfileData] = useState(null);

	useEffect(() => {
		// Function to make the GET request
		const fetchData = async () => {
			try {
				const token = localStorage.getItem('token');

				// Replace with your actual bearer token

				const response = await fetch(
					'https://paybeforeservice.onrender.com/PayBeforeService/v1/user/getProfile',
					{
						method: 'GET',
						headers: {
							Authorization: `Bearer ${token}`,
							'Content-Type': 'application/json',
						},
					},
				);

				if (response.ok) {
					const data = await response.json();
					setProfileData(data);
				} else {
					console.error('Failed to fetch profile data');
				}
			} catch (error) {
				console.error('Error:', error);
			}
		};

		// Call the function to fetch data
		fetchData();
	}, []);


	return (
		<div className='flex gap-2 items-center justify-start pl-3 w-100'>
			<div className='rounded-[100%] h-auto p-1 flex justify-center items-center border-[#6E3EFF] border-2'>
				<div className='bg-[#B190B6] rounded-[100%] h-auto p-1 flex justify-center items-center'>
					<img
						src='/image/avatar.svg'
						alt=''
						className='h-12 md:h-6'
					/>
				</div>
			</div>

			<div className='text-[#6E3EFF] font-[600]'>{profileData?.data.username}</div>
		</div>
	);
}
