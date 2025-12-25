import type { OfferType } from "@/models/offer";
import { OfferTypeStyle } from "@/utils/offerCardUtils";
import { useState } from "react";

type PostInteractions = {
	up: boolean;
	save: boolean;
	share: boolean;
};

const JobCard = ({ offer }: { offer: OfferType }) => {
	const [postInteractions, setPostInteractions] = useState<PostInteractions>({
		up: false,
		save: false,
		share: false,
	});
	return (
		<div className='rounded-4xl p-1 bg-[#e9e9e9] hover:bg-[#99C3FF] shadow-3xl cursor-pointer transition-colors duration-300 ease-in-out'>
			<div className='w-full rounded-[30px] bg-white p-4 h-full flex flex-col justify-between space-y-3'>
				<div className='flex items-center space-x-2'>
					<div className='flex items-center justify-center h-11 w-11  capitalize text-[#0082FA] font-bold text-3xl bg-[#D6E7FF] rounded-full'>
						c
					</div>
					<div className='-space-y-1'>
						<h1 className='font-medium text-[18px]'>
							{offer?.company.title.length > 17
								? `${offer?.company.title.slice(0, 17)}...`
								: offer?.company.title}
						</h1>
						<p className='text-[12px] text-slate-500 flex items-center space-x-1'>
							<span>Nov 11</span>
							<span className='h-1 w-1 bg-slate-500 rounded-full'></span>
							<span>5 days ago</span>
						</p>
					</div>
				</div>
				<div>
					<h3 className='font-medium'>
						{offer?.title.length > 20
							? `${offer?.title.slice(0, 20)}...`
							: offer?.title}
					</h3>
					<p className='text-[14px] capitalize text-slate-500'>
						{offer?.location}
					</p>
				</div>
				{OfferTypeStyle(offer?.offer_type)}

				<div className='flex items-center justify-between'>
					<div className='flex space-x-2'>
						<div className='border-2 border-[#e9e9e9] rounded-xl p-1'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 24 24'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
								onClick={() =>
									setPostInteractions((prev) => ({ ...prev, save: !prev.save }))
								}
								className={`lucide lucide-bookmark-icon lucide-bookmark w-6 h-6 ${
									postInteractions.save
										? "fill-[#0082FA] stroke-[#0082FA]"
										: "fill-none stroke-[#878787]"
								} hover:stroke-[#0082FA] transition-all duration-200 ease-in-out`}
							>
								<path d='m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z' />
							</svg>
						</div>
						<div className='border-2 border-[#e9e9e9] rounded-xl p-1'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 24 24'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
								className={`lucide lucide-link-icon lucide-link fill-none w-6 h-6 stroke-[#878787] hover:stroke-[#0082FA] transition-all duration-200 ease-in-out`}
							>
								<path d='M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71' />
								<path d='M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71' />
							</svg>
						</div>
					</div>
					<button className='cursor-pointer w-fit h-fit text-[16px] font-medium py-1 px-6 border-2 text-white border-[#0082FA]  rounded-xl bg-[#0082FA]'>
						Apply
					</button>
				</div>
			</div>
		</div>
	);
};

export default JobCard;
