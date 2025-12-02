import React, { useEffect, useRef, useState } from "react";
import { motion, type TargetAndTransition } from "framer-motion";
import type { Position } from "../models/model";

const domaines: string[] = [
	"Digital Marketing",
	"DevOps Engineer",
	"Graphic Designer",
	"Full-Stack Developer",
	"Logistics Coordinator",
];

type PostInteractions = {
	up: boolean;
	save: boolean;
	share: boolean;
};

// type Position = {
// 	width: number | null;
// 	left: number | null;
// 	opacity: number | null;
// 	height: number | null;
// };
const JobsSection = () => {
	const [selectedDomaine, setSelectedDomaine] =
		useState<string>("Graphic Designer");
	const [postInteractions, setPostInteractions] = useState<PostInteractions>({
		up: true,
		save: true,
		share: true,
	});

	const [position, setPosition] = useState<Position>({
		width: 0,
		left: 0,
		opacity: 0,
		height: 0,
	});

	return (
		<section className='w-[80%] mx-auto min-h-screen flex flex-col items-center space-y-10 '>
			<h1 className='text-4xl font-bold'>Featured Job Offers</h1>
			<ul className='flex items-center rounded-full bg-gray-200 p-1.5 font-medium text-lg'>
				{domaines.map((item) => (
					<Tab
						key={item}
						item={item}
						selectedDomaine={selectedDomaine}
						setPosition={setPosition}
						setSelectedDomaine={setSelectedDomaine}
					/>
				))}
				<Cursor position={position} />
			</ul>

			<div className='grid grid-cols-4 gap-4 w-full'>
				{[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
					<>
						<div
							// key={item.id}
							key={index}
							className='rounded-4xl p-1 bg-[#99C3FF] shadow-3xl cursor-pointer'
						>
							<div className='w-full rounded-t-[26px] rounded-b-[26px] bg-white p-3 flex flex-col justify-between space-y-3'>
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
									<p className='text-[12px] text-slate-500'>
										Casablanca, Morocco
									</p>
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
													stroke-width='2'
													stroke-linecap='round'
													stroke-linejoin='round'
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
													postInteractions.up
														? "text-[#0082FA]"
														: "text-slate-500"
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
													stroke-width='2'
													stroke-linecap='round'
													stroke-linejoin='round'
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
													stroke-width='2'
													stroke-linecap='round'
													stroke-linejoin='round'
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
							<p className='text-center text-[#0044A3] font-medium'>
								Click to apply
							</p>
						</div>
					</>
				))}
			</div>
			<button className='cursor-pointer font-normal text-lg rounded-full bg-[#0082FA] text-white py-2.5 px-3'>
				All job offers
			</button>
		</section>
	);
};

export default JobsSection;

const Tab = ({
	item,
	setPosition,
	selectedDomaine,
	setSelectedDomaine,
}: {
	item: string;
	setPosition: React.Dispatch<React.SetStateAction<Position>>;
	selectedDomaine: string;
	setSelectedDomaine: React.Dispatch<React.SetStateAction<string>>;
}) => {
	const ref = useRef<HTMLLIElement>(null);

	useEffect(() => {
		if (selectedDomaine == item && ref.current) {
			const rect = ref.current.getBoundingClientRect();
			setPosition({
				width: rect.width,
				left: ref.current.offsetLeft,
				opacity: 1,
				height: rect.height,
			});
		}
	}, [selectedDomaine]);

	return (
		<li
			className={`cursor-pointer py-1.5 px-4 rounded-full z-10 text-lg font-medium transition duration-300 ease-in-out ${
				selectedDomaine == item ? "font-bold text-black" : "text-gray-500"
			}`}
			onClick={() => {
				setSelectedDomaine(item);
			}}
			ref={ref}
		>
			{item}
		</li>
	);
};

type CursorProps = { position: Position };
const Cursor: React.FC<CursorProps> = ({ position }) => {
	return (
		<motion.li
			animate={position as TargetAndTransition}
			className='rounded-full absolute bg-white z-0 drop-shadow-[0_2px_1px_rgba(0,0,0,0.25)]'
		/>
	);
};
