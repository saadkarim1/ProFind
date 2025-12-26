import type { OfferType } from "@/models/offer";
import { GetOfferType } from "@/utils/GetOfferType";
import {
	getCreatedAtOffer,
	getHowLongOfferPublished,
} from "@/utils/OfferUtils";
import { useState } from "react";

type PostInteractions = {
	up: boolean;
	save: boolean;
	share: boolean;
};

type JobCardTwoProps = {
	offer: OfferType;
	selectedOffer: OfferType | null;
	setSelectedOffer: React.Dispatch<React.SetStateAction<OfferType | null>>;
};

const JobCardTwo = ({
	offer,
	setSelectedOffer,
	selectedOffer,
}: JobCardTwoProps) => {
	const [postInteractions, setPostInteractions] = useState<PostInteractions>({
		up: false,
		save: false,
		share: false,
	});
	return (
		<div
			onClick={() => setSelectedOffer(offer)}
			className={`w-full rounded-[30px] h-full border-4 ${
				selectedOffer?.offer_id === offer.offer_id
					? "border-[#99C3FF]"
					: "border-[#e9e9e9]"
			} bg-white p-3 cursor-pointer flex flex-col justify-between space-y-3 transition-colors duration-200 ease-in-out`}
		>
			<div className='flex items-center space-x-2'>
				<div className='flex items-center justify-center min-h-11 min-w-11  capitalize text-[#0082FA] font-bold text-3xl bg-[#D6E7FF] rounded-full'>
					c
				</div>
				<div className='-space-y-1'>
					<h1 className='font-medium text-[18px]'>
						{offer?.company.title?.length > 17
							? `${offer?.company.title.slice(0, 17)}...`
							: offer?.company.title}
					</h1>
					<p className='text-[12px] text-[#878787] flex items-center space-x-1'>
						<span>{getCreatedAtOffer(offer?.created_at)}</span>
						<span className='h-1 w-1 bg-[#878787] rounded-full'></span>
						<span>{getHowLongOfferPublished(offer.created_at)} days ago</span>
					</p>
				</div>
			</div>
			<div>
				<h3 className='font-medium'>
					{offer?.title.length > 20
						? `${offer?.title.slice(0, 20)}...`
						: offer?.title}
				</h3>
				<p className='text-[14px] font-medium text-[#878787] capitalize'>
					{offer.location}
				</p>
			</div>

			{GetOfferType(offer.offer_type)}
			{/* <p>{offer?.created_at}</p> */}

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
	);
};

export default JobCardTwo;
