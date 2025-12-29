import { useState } from "react";

const options: string[] = [
	"engineering",
	"sales and marketing",
	"technology",
	"business",
	"finance and legal",
];
type JobCategoriesDropDownListProps = {
	selectedCategory: string;
	setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
};
const JobCategoriesDropDownList = ({
	selectedCategory,
	setSelectedCategory,
}: JobCategoriesDropDownListProps) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	return (
		<button
			type='button'
			onBlur={() => setIsOpen(false)}
			className='cursor-pointer relative inline-block w-full text-left font-medium'
		>
			<div
				onClick={() => setIsOpen(!isOpen)}
				className='rounded-xl border-[1.5px] border-[#e9e9e9] px-4 py-3 text-sm font-medium flex justify-between items-center capitalize'
			>
				{selectedCategory}
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
										setSelectedCategory(option);
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

export default JobCategoriesDropDownList;
