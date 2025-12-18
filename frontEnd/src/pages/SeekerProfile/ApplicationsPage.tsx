import { useState, type ReactElement } from "react";
import { IoBookmark, IoBookmarkOutline } from "react-icons/io5";

const jobTypes: ReactElement[] = [
	<div className='border-[1.5px] font-medium border-[#d4ab60] text-[13px] px-2 py-0.5 w-fit h-fit rounded-full text-[#655b41] bg-[#fff1d3] '>
		Remote
	</div>,
	<div className='border-[1.5px] font-medium border-[#532d9e] text-[13px] px-2 py-0.5 w-fit h-fit rounded-full text-[#532d9e] bg-[#ffecff] '>
		Full Time
	</div>,
	<div className='border-[1.5px] font-medium border-[#012eeb] text-[13px] px-2 py-0.5 w-fit h-fit rounded-full text-[#2c3ebc] bg-[#e6f6ff] '>
		Part Time
	</div>,
	<div className='border-[1.5px] font-medium border-[#4b9964] text-[13px] px-2 py-0.5 w-fit h-fit rounded-full text-[#22352f] bg-[#e2fce8] '>
		Freelance
	</div>,
];

const filters: string[] = ["In progress", "Applied", "Rejected"];
const ApplicationsPage = () => {
	const [filter, setFilter] = useState<string>("In progress");
	const [save, setSave] = useState<boolean>(true);
	return (
		<div className='w-[74%] space-y-4'>
			<div className='flex space-x-2'>
				{filters.map((f) => (
					<div
						onClick={() => setFilter(f)}
						key={f}
						className={`cursor-pointer border-2 border-sky-600 ${
							f === filter
								? " bg-sky-600 text-white"
								: " bg-sky-100 text-sky-600"
						}  py-0.5 text-md font-medium px-3 rounded-full transition-colors duration-200 ease-in-out`}
					>
						{f}
					</div>
				))}
			</div>
			{[1, 2, 3, 4, 5, , 6, 7, 8, 9, 10, 11, 12, 13].map((item) => (
				<div
					key={item}
					className='bg-white rounded-3xl drop-shadow-[0_0px_2px_rgba(0,0,0,0.25)] w-full h-fit py-3 flex items-center justify-between'
				>
					<div className='w-[20%] flex items-center justify-evenly'>
						{save ? (
							<IoBookmark
								className='text-2xl cursor-pointer text-[#0082FA]'
								onClick={() => setSave((prev) => !prev)}
							/>
						) : (
							<IoBookmarkOutline
								className='text-2xl cursor-pointer'
								onClick={() => setSave((prev) => !prev)}
							/>
						)}
						<div className='bg-sky-100 p-2.5 rounded-2xl'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='40'
								height='40'
								viewBox='0 0 24 24'
								fill='none'
								stroke='#0082FA'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
								className='lucide lucide-building2-icon lucide-building-2'
							>
								<path d='M10 12h4' />
								<path d='M10 8h4' />
								<path d='M14 21v-3a2 2 0 0 0-4 0v3' />
								<path d='M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2' />
								<path d='M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16' />
							</svg>
						</div>
					</div>
					<div className='w-[60%] -space-y-1 text-[13px]'>
						<h1 className='font-medium text-lg'>Fullstack Developer</h1>
						<p className='font-medium text-[#878787]'>Capegemini</p>
						<p className='font-medium text-[#878787]'>
							Casablanca settat, Morocco
						</p>
					</div>
					<div className='w-[20%] space-y-1 flex items-center justify-center flex-col'>
						{jobTypes[Math.floor(Math.random() * 4)]}
						<p className='font-medium text-[#878787] text-[13px]'>
							{Math.floor(Math.random() * 10)} days ago
						</p>
					</div>
				</div>
			))}
		</div>
	);
};

export default ApplicationsPage;
