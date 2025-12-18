const SummaryPage = () => {
	return (
		<div className='p-6 rounded-3xl border-2 border-[#e9e9e9] bg-white w-[74%] space-y-4'>
			<h1 className='font-semibold text-lg'>Personal Information</h1>
			<div className='flex items-center space-x-3'>
				<div className='space-x-2'>
					<label htmlFor='male'>Male</label>
					<input type='radio' id='male' name='sexe' />
				</div>
				<div className='space-x-2'>
					<label htmlFor='female'>Female</label>
					<input type='radio' id='female' name='sexe' />
				</div>
			</div>
			<div className='grid grid-cols-2 gap-8'>
				<div>
					<label htmlFor='firstName' className='text-[#878787] text-[15px]'>
						First Name
					</label>
					<input
						type='text'
						id='firstName'
						className='focus:outline-none bg-[#f5f5f5] block py-2 px-3 w-full rounded-xl'
					/>
				</div>
				<div>
					<label htmlFor='lastName' className='text-[#878787] text-[15px]'>
						Last Name
					</label>
					<input
						type='text'
						id='lastName'
						className='focus:outline-none bg-[#f5f5f5] block py-2 px-3 w-full rounded-xl'
					/>
				</div>
				<div className='col-span-2'>
					<label htmlFor='email' className='text-[#878787] text-[15px]'>
						Email
					</label>
					<input
						type='text'
						id='email'
						className='focus:outline-none bg-[#f5f5f5] block py-2 px-3 w-full rounded-xl'
					/>
				</div>
				<div className='col-span-2'>
					<label htmlFor='adress' className='text-[#878787] text-[15px]'>
						Adress
					</label>
					<input
						type='text'
						id='adress'
						className='focus:outline-none bg-[#f5f5f5] block py-2 px-3 w-full rounded-xl'
					/>
				</div>
				<div>
					<label htmlFor='phone' className='text-[#878787] text-[15px]'>
						Phone Number
					</label>
					<input
						type='text'
						id='phone'
						className='focus:outline-none bg-[#f5f5f5] block py-2 px-3 w-full rounded-xl'
					/>
				</div>
				<div>
					<label htmlFor='adress' className='text-[#878787] text-[15px]'>
						Adress
					</label>
					<input
						type='text'
						id='lastName'
						className='focus:outline-none bg-[#f5f5f5] block py-2 px-3 w-full rounded-xl'
					/>
				</div>
				<div className='col-span-2'>
					<label htmlFor='aboutMe' className='text-[#878787] text-[15px]'>
						About me
					</label>
					<textarea
						id='aboutMe'
						className='focus:outline-none bg-[#f5f5f5] block py-2 px-3 w-full rounded-xl'
					/>
				</div>
				<div>
					<button className='w-full h-fit py-2 cursor-pointer border-2 rounded-xl border-[#0082FA]'>
						Discard Changes
					</button>
				</div>
				<div>
					<button className='w-full h-fit py-2 cursor-pointer border-2 text-white border-[#0082FA]  rounded-xl bg-[#0082FA]'>
						Save Changes
					</button>
				</div>
			</div>
		</div>
	);
};

export default SummaryPage;
