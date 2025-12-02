import React, { useState } from "react";

const domaines = ["Tech", "AI", "E-commerce", "Tourisme"];
const Saad = () => {
	const [selectedDomaine, setSelectedDomaine] = useState("Tech");
	return (
		<section className='px-40'>
			<div className=' w-full flex items-center justify-center flex-col  rounded-2xl'>
				<div className='flex items-center space-x-2.5'>
					{domaines.map((d) => (
						<button
							key={d}
							onClick={() => setSelectedDomaine(d)}
							className={`cursor-pointer py-1.5 px-4 rounded-full text-lg font-medium ${
								selectedDomaine == d
									? "text-white bg-[#002152] border-2 border-[#002152]"
									: "text-[#002152] hover:bg-[#0082FA] hover:border-[#0082FA] hover:text-[#fff] bg-white border-2 border-[#002152]"
							} transition duration-300 ease-in-out`}
						>
							{d}
						</button>
					))}
				</div>

				{/* <div className='w-full flex items-center justify-start  space-x-2 my-10'>
					{filtredStartUps?.map((s) => (
						<div
							key={s.id}
							className='rounded-4xl p-1.5 bg-[#99C3FF] w-[25%] shadow-3xl'
						>
							<div className='h-[20vh] w-full rounded-t-[26px] rounded-b-[26px] bg-white p-4 flex flex-col justify-between space-y-4'>
								<div className='flex items-center space-x-2'>
									{s.img ? (
										<img src={s.img} alt='' className='w-7 h-7' />
									) : (
										<div className=' text-center capitalize text-[#0082FA] font-bold text-2xl bg-[#D6E7FF] px-[10px] rounded-full'>
											{s.title[0]}
										</div>
									)}
									<h1 className='font-medium text-xl'>{s.title}</h1>
								</div>
								<p className='text-slate-600'>{s.description}</p>
								<div className='border border-[#0082FA] px-2 py-0.5 font-medium text-[12px]  text-[#0082FA] w-fit rounded-lg'>
									{s.secteur}
								</div>
							</div>
							<p className='text-center text-[#0044A3] font-medium'>
								Created at 1996
							</p>
						</div>
					))}
				</div> */}
			</div>
		</section>
	);
};

export default Saad;
