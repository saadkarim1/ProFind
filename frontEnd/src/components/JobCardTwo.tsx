import { useState } from "react";

type PostInteractions = {
	up: boolean;
	save: boolean;
	share: boolean;
};
const JobCardTwo = () => {
	const [postInteractions, setPostInteractions] = useState<PostInteractions>({
		up: false,
		save: false,
		share: false,
	});
	const [isSelected, setIsSelected] = useState<boolean>(false);
	return (
		<div
			onClick={() => setIsSelected((prev) => !prev)}
			className={`rounded-4xl p-1 ${
				isSelected ? "bg-[#99C3FF]" : "bg-white"
			} shadow-3xl cursor-pointer transition-colors duration-200 ease-in-out`}
		>
			<div className='w-full rounded-[30px] bg-white p-3 flex flex-col justify-between space-y-3'>
				<div className='flex items-center space-x-2'>
					<div className='flex items-center justify-center h-11 w-11  capitalize text-[#0082FA] font-bold text-3xl bg-[#D6E7FF] rounded-full'>
						c
					</div>
					<div className='-space-y-1'>
						<h1 className='font-medium text-xl'>capgemini</h1>
						<p className='text-[12px] text-slate-500 flex items-center space-x-1'>
							<span>Nov 11</span>
							<span className='h-1 w-1 bg-slate-500 rounded-full'></span>
							<span>5 days ago</span>
						</p>
					</div>
				</div>
				<div>
					<h3 className='font-medium'>Job Title</h3>
					<p className='text-[12px] text-slate-500'>Casablanca, Morocco</p>
				</div>
				<div className='border border-[#0082FA] px-2 py-0.5 font-medium text-[12px]  text-[#0082FA] w-fit rounded-lg'>
					secteur
				</div>
				<div>
					<hr className='rounded-full text-slate-300 my-1' />
					<div className='flex items-center '>
						<div className='group flex items-center font-medium w-[33%] justify-center'>
							<div className='group-hover:bg-[#0081fa4e] rounded-lg p-1.5 transition-all duration-250 ease-in-out'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 24 24'
									strokeWidth='2'
									strokeLinecap='round'
									strokeLinejoin='round'
									className={`lucide lucide-arrow-big-up-dash-icon lucide-arrow-big-up-dash w-6 h-6    ${
										postInteractions.up
											? "fill-[#0082FA] stroke-[#0082FA]"
											: "fill-none stroke-slate-500"
									} group-hover:stroke-[#0082FA] transition-all duration-250 ease-in-out`}
								>
									<path d='M9 13a1 1 0 0 0-1-1H5.061a1 1 0 0 1-.75-1.811l6.836-6.835a1.207 1.207 0 0 1 1.707 0l6.835 6.835a1 1 0 0 1-.75 1.811H16a1 1 0 0 0-1 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1z' />
									<path d='M9 20h6' />
								</svg>
							</div>
							<p
								className={`${
									postInteractions.up ? "text-[#0082FA]" : "text-slate-500"
								} group-hover:text-[#0082FA] transition-all duration-250 ease-in-out`}
							>
								23
							</p>
						</div>
						<div className='group w-[33%] flex justify-center'>
							<div className='rounded-lg group-hover:bg-[#00ba7c43] p-1.5 transition-all duration-250 ease-in-out'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 24 24'
									strokeWidth='2'
									strokeLinecap='round'
									strokeLinejoin='round'
									className={`lucide lucide-bookmark-icon lucide-bookmark w-6 h-6 ${
										postInteractions.save
											? "fill-[#00ba7c] stroke-[#00ba7c]"
											: "fill-none stroke-slate-500"
									} group-hover:stroke-[#00ba7c] transition-all duration-250 ease-in-out`}
								>
									<path d='m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z' />
								</svg>
							</div>
						</div>

						<div className='group w-[33%]  flex justify-center'>
							<div className='rounded-lg group-hover:bg-[#C029F03D] p-1.5 transition-all duration-250 ease-in-out'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 24 24'
									strokeWidth='2'
									strokeLinecap='round'
									strokeLinejoin='round'
									className={`lucide lucide-link-icon lucide-link fill-none w-6 h-6 ${
										postInteractions.share
											? "stroke-[#AC1DE4]"
											: "stroke-slate-500"
									} group-hover:stroke-[#AC1DE4] transition-all duration-250 ease-in-out`}
								>
									<path d='M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71' />
									<path d='M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71' />
								</svg>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default JobCardTwo;
