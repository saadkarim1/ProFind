import type { OfferType } from "@/models/offer";
import { GetOfferType } from "@/components/shared/GetOfferType";
import {
	getHowLongOfferPublishedPerDays,
	getHowLongOfferPublishedPerHours,
} from "@/utils/OfferUtils";
import BookMark from "./shared/BookMark";

const MiniJobCard = ({ offer }: { offer: OfferType }) => {
	const days = getHowLongOfferPublishedPerDays(offer?.created_at);
	const hours = getHowLongOfferPublishedPerHours(offer?.created_at);
	return (
		<div
			key={offer.offer_id}
			className='bg-white rounded-3xl border-2 border-[#e9e9e9]  w-full h-fit py-3 flex items-center justify-between'
		>
			<div className='w-[20%] flex items-center justify-evenly'>
				<BookMark
					offer_id={offer.offer_id}
					is_saved={offer?.is_saved}
					isAuthenticated={true}
				/>
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
			<div className='w-[60%] -space-y-1 text-[14px]'>
				<h1 className='font-medium text-lg'>{offer?.offer_title}</h1>
				<p className='font-medium text-[#878787]'>
					{offer?.company?.company_name}
				</p>
				<p className='font-medium text-[#878787] capitalize'>
					{offer?.location}
				</p>
			</div>
			<div className='w-[20%] space-y-1 flex items-center justify-center flex-col'>
				{GetOfferType(offer?.offer_type)}
				<p className='font-medium text-[#878787] text-[13px]'>
					{days === 0 ? `${hours} hours ago` : `${days} days ago`}
				</p>
			</div>
		</div>
	);
};

export default MiniJobCard;
