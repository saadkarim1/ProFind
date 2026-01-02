import { useState } from "react";

const CaondidateStatuesDropDownList = ({
	setSelectedStatus,
}: {
	setSelectedStatus: React.Dispatch<React.SetStateAction<string>>;
}) => {
	const [isOpen, setIsOpen] = useState(false);
	const [selected, setSelected] = useState("all");
	const options = ["all", "pending", "accepted", "rejected"];

	const getStatusColor = (status: string) => {
		switch (status) {
			case "accepted":
				return "text-green-600 bg-green-50";
			case "rejected":
				return "text-red-600 bg-red-50";
			case "pending":
				return "text-yellow-600 bg-yellow-50";
			default:
				return "text-blue-600 bg-blue-50";
		}
	};

	return (
		<div className='relative inline-block text-left w-30 font-medium'>
			<button
				onClick={() => setIsOpen(!isOpen)}
				className={` rounded-full w-full px-4 py-2 text-sm font-medium border-2 shadow-sm flex justify-between items-center capitalize ${getStatusColor(
					selected
				)}`}
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
			</button>

			{isOpen && (
				<div className='absolute z-10 mt-2 w-full bg-white border border-gray-200 rounded-xl shadow-lg'>
					<ul className='py-1'>
						{options.map((option) => (
							<li key={option}>
								<button
									onClick={() => {
										setSelected(option);
										setSelectedStatus(option);
										setIsOpen(false);
									}}
									className='block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 text-left capitalize'
								>
									{option}
								</button>
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	);
};

export default CaondidateStatuesDropDownList;
