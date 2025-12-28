import { useApplyToOfferMutation } from "@/app/services/offersApi";
import type { OfferType } from "@/models/offer";
import { GetOfferType } from "@/utils/GetOfferType";
import {
	getCreatedAtOffer,
	getHowLongOfferPublishedPerDays,
	getHowLongOfferPublishedPerHours,
} from "@/utils/OfferUtils";
import BookMark from "./shared/BookMark";
import CopyButton from "./shared/CopyButton";
import { useSelector } from "react-redux";
import type { RooteState } from "@/app/store";

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
	const { user, isAuthenticated } = useSelector(
		(state: RooteState) => state.auth
	);
	const [applytoOffer] = useApplyToOfferMutation();
	const days = getHowLongOfferPublishedPerDays(offer?.created_at);
	const hours = getHowLongOfferPublishedPerHours(offer?.created_at);
	console.log(offer);
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
						{offer?.company.company_name &&
						offer.company.company_name?.length > 17
							? `${offer?.company.company_name.slice(0, 17)}...`
							: offer?.company.company_name}
					</h1>
					<p className='text-[12px] text-[#878787] flex items-center space-x-1'>
						<span>{getCreatedAtOffer(offer?.created_at)}</span>
						<span className='h-1 w-1 bg-[#878787] rounded-full'></span>
						<span>
							{days === 0 ? `${hours} hours ago` : `${days} days ago`}
						</span>
					</p>
				</div>
			</div>
			<div>
				<h3 className='font-medium'>
					{offer?.offer_title.length > 20
						? `${offer?.offer_title.slice(0, 20)}...`
						: offer?.offer_title}
				</h3>
				<p className='text-[14px] font-medium text-[#878787] capitalize'>
					{offer.location}
				</p>
			</div>

			{GetOfferType(offer.offer_type)}

			<div className='flex items-center justify-between'>
				<div className='flex space-x-2'>
					{user?.role === "user" && (
						<BookMark
							offer_id={offer?.offer_id}
							is_saved={offer?.is_saved}
							isAuthenticated={isAuthenticated}
						/>
					)}
					<CopyButton offerId={offer?.offer_id} />
				</div>
				{offer?.is_applied ? (
					<button className='cursor-not-allowed w-fit h-fit text-[16px] font-medium py-1 px-6 border-2 text-[#0082FA] border-[#0082FA]  rounded-xl bg-white'>
						Applied
					</button>
				) : (
					<button
						onClick={async () => {
							const res = await applytoOffer(offer?.offer_id);
							console.log(res);
						}}
						className='cursor-pointer w-fit h-fit text-[16px] font-medium py-1 px-6 border-2 text-white border-[#0082FA]  rounded-xl bg-[#0082FA]'
					>
						Apply
					</button>
				)}
			</div>
		</div>
	);
};

export default JobCardTwo;
