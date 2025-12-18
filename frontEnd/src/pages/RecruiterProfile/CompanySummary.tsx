const CompanySummary = () => {
	return (
		<div className='p-6 rounded-3xl border-2 border-[#e9e9e9] bg-white w-[74%] space-y-4'>
			<h1 className='font-semibold text-lg'>Company Information</h1>
			<div className='grid grid-cols-2 gap-8'>
				<div>
					<label htmlFor='companyName' className='text-[#878787] text-[15px]'>
						Company Name
					</label>
					<input
						type='text'
						id='companyName'
						className='focus:outline-none bg-[#f5f5f5] block py-2 px-3 w-full rounded-xl'
					/>
				</div>
				<div>
					<label htmlFor='sector' className='text-[#878787] text-[15px]'>
						Sector
					</label>
					<select
						name='sector'
						id='sector'
						className='focus:outline-none bg-[#f5f5f5] block py-2 px-3 w-full rounded-xl'
					>
						<option disabled={true}>Select a sector</option>
						<hr />
						<option value='IT'>IT</option>
						<option value='Finance'>Finance</option>
					</select>
					{/* <input type='text' id='link' /> */}
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
				<div className='col-span-2'>
					<label htmlFor='link' className='text-[#878787] text-[15px]'>
						Link
					</label>
					<input
						type='text'
						id='link'
						className='focus:outline-none bg-[#f5f5f5] block py-2 px-3 w-full rounded-xl'
					/>
				</div>
				<div className='col-span-2'>
					<label htmlFor='aboutMe' className='text-[#878787] text-[15px]'>
						Description
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

export default CompanySummary;
