const SettingsPage = () => {
	return (
		<div className='h-fit grid w-[74%] gap-4'>
			<div className='p-6 h-fit rounded-3xl gap-4 border-2 border-[#e9e9e9] bg-white grid grid-cols-2'>
				<h2 className='font-medium text-lg col-span-2'>Password</h2>
				<div>
					<label htmlFor='oldPassword' className='text-[#878787] text-[15px]'>
						Old Password
					</label>
					<input
						type='text'
						id='oldPassword'
						placeholder='Old Password'
						className='focus:outline-none bg-[#f5f5f5] block py-2 px-3 w-full rounded-xl'
					/>
				</div>
				<div>
					<label htmlFor='newPassword' className='text-[#878787] text-[15px]'>
						New Password
					</label>
					<input
						type='text'
						placeholder='New Password'
						id='newPassword'
						className='focus:outline-none bg-[#f5f5f5] block py-2 px-3 w-full rounded-xl'
					/>
				</div>
				<div>
					<label
						htmlFor='confirmPassword'
						className='text-[#878787] text-[15px]'
					>
						Confirm Password
					</label>
					<input
						placeholder='Confirm Password'
						type='text'
						id='confirmPassword'
						className='focus:outline-none bg-[#f5f5f5] block py-2 px-3 w-full rounded-xl'
					/>
				</div>
				<div className='items-end flex'>
					<button className='w-full h-fit py-2 cursor-pointer border-2 text-white border-[#0082FA]  rounded-xl bg-[#0082FA]'>
						Change Password
					</button>
				</div>
			</div>
		</div>
	);
};

export default SettingsPage;
