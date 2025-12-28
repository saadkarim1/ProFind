import type { OfferType } from "@/models/offer";
import { GetOfferType } from "@/utils/GetOfferType";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import {
	getCreatedAtOffer,
	getHowLongOfferPublishedPerDays,
	getHowLongOfferPublishedPerHours,
} from "@/utils/OfferUtils";
import BookMark from "./shared/BookMark";
import CopyButton from "./shared/CopyButton";
import { useSelector } from "react-redux";
import type { RooteState } from "@/app/store";
import { Link } from "react-router";

const JobCard = ({ offer }: { offer: OfferType }) => {
	const { user, isAuthenticated } = useSelector(
		(state: RooteState) => state.auth
	);
	const days = getHowLongOfferPublishedPerDays(offer?.created_at);
	const hours = getHowLongOfferPublishedPerHours(offer?.created_at);

	return (
		<div className='w-full rounded-[30px] bg-white hover:border-[#99C3FF] border-[#e9e9e9] border-4 p-4 h-full flex flex-col justify-between space-y-3 transition-colors duration-200 ease-in-out'>
			<div className='flex items-center space-x-2'>
				<div className='flex items-center justify-center h-11 w-11  capitalize text-[#0082FA] font-bold text-3xl bg-[#D6E7FF] rounded-full'>
					c
				</div>
				<div className='-space-y-1'>
					<h1 className='font-medium text-[18px]'>
						{offer?.company.company_name &&
						offer.company.company_name.length > 17
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
				<p className='text-[14px] font-medium capitalize text-[#878787]'>
					{offer?.location}
				</p>
			</div>
			{GetOfferType(offer?.offer_type)}

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
				<Link
					to={`/jobs/${offer?.offer_id}`}
					className='flex space-x-1 items-center cursor-pointer w-fit h-fit text-[16px] font-medium py-1 px-5 border-2 text-white border-[#0082FA]  rounded-xl bg-[#0082FA]'
				>
					<MdOutlineRemoveRedEye className='text-xl' /> <span>Details</span>
				</Link>
			</div>
		</div>
	);
};

export default JobCard;
