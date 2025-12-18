import JobCardTwo from "@/components/JobCardTwo";
import SearchBar from "@/components/jobs/SearchBar";

const Jobs: React.FC = () => {
	return (
		<div className='w-[80%] mx-auto'>
			<SearchBar />
			<div className='flex justify-between'>
				<div className='w-[49%] grid grid-cols-2 gap-4 '>
					{[
						1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
						20, 21, 22, 23, 24, 25, 26, 27, 28, 29,
					].map((_, index) => (
						<JobCardTwo key={index} />
					))}
				</div>
				<div className='w-[49%] h-fit sticky top-30 space-y-4 rounded-4xl p-10 border-2 border-[#e9e9e9] bg-white'>
					<div className='flex space-x-3'>
						<div className='bg-sky-100 p-2.5 rounded-2xl w-fit h-fit'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='50'
								height='50'
								viewBox='0 0 24 24'
								fill='none'
								stroke='#0082FA'
								stroke-width='2'
								stroke-linecap='round'
								stroke-linejoin='round'
								className='lucide lucide-building2-icon lucide-building-2'
							>
								<path d='M10 12h4' />
								<path d='M10 8h4' />
								<path d='M14 21v-3a2 2 0 0 0-4 0v3' />
								<path d='M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2' />
								<path d='M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16' />
							</svg>
						</div>
						<div className='flex flex-col space-y-2.5'>
							<h1 className='font-medium text-3xl'>Fullstack Developer</h1>
							<p className='font-medium text-[#878787] text-[18px]'>
								Capegemini
							</p>
							<button className='cursor-pointer w-fit h-fit text-[14px] font-medium py-1.5 px-3 border-2 text-white border-[#0082FA]  rounded-xl bg-[#0082FA]'>
								Apply Now
							</button>
						</div>
					</div>
					<hr className='text-[#e9e9e9] h-3' />
					<div className='flex justify-between w-full h-10 font-semibold text-[15px] text-[#3a4981]'>
						<div className='w-[33%] h-full flex flex-col items-center '>
							<h3>SALARY</h3>
							<p>-----</p>
						</div>
						<div className='w-[33%] h-full flex flex-col items-center '>
							<h3>START DATE</h3>
							<p>-----</p>
						</div>
						<div className='w-[33%] h-full  flex flex-col items-center '>
							<h3>LOCATION</h3>
							<p>Casablanca</p>
						</div>
					</div>
					<div className='flex items-center justify-evenly'>
						<div className='border-[1.5px] font-medium border-[#d4ab60] text-[13px] px-2 py-0.5 w-fit h-fit rounded-full text-[#655b41] bg-[#fff1d3] '>
							Remote
						</div>

						<div className='border-[1.5px] font-medium border-[#532d9e] text-[13px] px-2 py-0.5 w-fit h-fit rounded-full text-[#532d9e] bg-[#ffecff] '>
							Full Time
						</div>

						<div className='border-[1.5px] font-medium border-[#012eeb] text-[13px] px-2 py-0.5 w-fit h-fit rounded-full text-[#2c3ebc] bg-[#e6f6ff] '>
							Part Time
						</div>

						<div className='border-[1.5px] font-medium border-[#4b9964] text-[13px] px-2 py-0.5 w-fit h-fit rounded-full text-[#22352f] bg-[#e2fce8] '>
							Freelance
						</div>
					</div>
					<hr className='text-[#e9e9e9] h-3' />
					<div>
						<h1 className='font-medium text-xl'>Description</h1>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
							qui atque laboriosam et quae. Cum iste a officia reprehenderit,
							officiis dignissimos. Eum alias quidem incidunt nulla iure,
							officia ipsa ex.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Jobs;
