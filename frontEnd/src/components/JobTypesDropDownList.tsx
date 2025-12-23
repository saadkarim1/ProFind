import { useState } from "react";

const options: string[] = ["remote", "full time", "part time", "freelance"];

const JobTypesDropDownList = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [selected, setSelected] = useState("Select Job Type");

	return (
		<button
			type='button'
			onBlur={() => setIsOpen(false)}
			className='cursor-pointer relative inline-block w-full text-left font-medium'
		>
			<div
				onClick={() => setIsOpen(!isOpen)}
				// className={` rounded-full w-full px-4 py-2 text-sm font-medium border-2 shadow-sm flex justify-between items-center capitalize ${getStatusColor(
				// 	selected
				// )}`}
				className='rounded-xl border-[1.5px] border-[#e9e9e9] px-4 py-3 text-sm font-medium flex justify-between items-center capitalize'
			>
				{selected}
				<svg
					className='w-4 h-4 ml-2'
					fill='none'
					stroke='currentColor'
					viewBox='0 0 24 24'
				>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth='3'
						d='M19 9l-7 7-7-7'
					/>
				</svg>
			</div>

			{isOpen && (
				<div className='absolute z-10 mt-2 w-full bg-white border border-gray-200 rounded-xl shadow-lg'>
					<ul className='py-1'>
						{options.map((option) => (
							<li key={option}>
								<div
									onClick={() => {
										setSelected(option);
										setIsOpen(false);
									}}
									className='block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 text-left capitalize'
								>
									{option}
								</div>
							</li>
						))}
					</ul>
				</div>
			)}
		</button>
	);
};

export default JobTypesDropDownList;
