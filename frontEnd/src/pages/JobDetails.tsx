import { useGetOfferQuery } from "@/app/services/offersApi";
import type { RooteState } from "@/app/store";
import BookMark from "@/components/shared/BookMark";
import CopyButton from "@/components/shared/CopyButton";
import { GetOfferType } from "@/components/shared/GetOfferType";
import { useSelector } from "react-redux";
import { useParams } from "react-router";

const JobDetails = () => {
	let { id } = useParams();
	const { user, isAuthenticated } = useSelector(
		(state: RooteState) => state.auth
	);
	const { data: offer } = useGetOfferQuery(id);
	console.log(offer);

	return (
		<section>
			<div className='w-[50%] h-fit mx-auto space-y-4 rounded-4xl p-10 border-4 border-[#e9e9e9] bg-white'>
				<div className='flex space-x-3'>
					<div className='bg-sky-100 p-2.5 rounded-2xl w-fit h-fit'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='50'
							height='50'
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
					<div className='flex flex-col space-y-2 w-full'>
						<div className='flex items-center justify-between w-full'>
							<h1 className='font-medium text-3xl'>{offer?.offer_title}</h1>
							{GetOfferType(offer?.offer_type)}
						</div>
						<p className='font-medium text-[#878787] text-[18px]'>
							{offer?.company.company_name}
						</p>
						<div className='flex items-center space-x-2'>
							{offer?.is_applied ? (
								<button className='cursor-not-allowed w-fit h-fit text-[16px] font-medium py-1 px-4 border-2 text-[#0082FA] border-[#0082FA]  rounded-xl bg-white'>
									Already Applied
								</button>
							) : (
								<button
									// onClick={async () => {
									// 	const res = await applytoOffer(offer?.offer_id);
									// 	console.log(res);
									// }}
									className='cursor-pointer w-fit h-fit text-[16px] font-medium py-1 px-6 border-2 text-white border-[#0082FA]  rounded-xl bg-[#0082FA]'
								>
									Apply Now
								</button>
							)}
							{user?.role === "user" && (
								<BookMark
									offer_id={offer?.offer_id}
									is_saved={offer?.is_saved}
									isAuthenticated={isAuthenticated}
								/>
							)}
							<CopyButton offerId={offer?.offer_id} />
						</div>
					</div>
				</div>
				<hr className='text-[#e9e9e9] h-3' />
				<div className='flex justify-between w-full h-10 font-semibold text-[15px] text-[#3a4981]'>
					<div className='w-[33%] h-full flex flex-col items-center '>
						<h3>SALARY</h3>
						<p>{offer?.salary ? offer?.salary : "-----"}</p>
					</div>
					<div className='w-[33%] h-full flex flex-col items-center '>
						<h3>DURATION</h3>
						<p>{offer?.duration ? offer?.duration : "-----"}</p>
					</div>
					<div className='w-[33%] h-full  flex flex-col items-center '>
						<h3>LOCATION</h3>
						<p>{offer?.location}</p>
					</div>
				</div>
				<hr className='text-[#e9e9e9] h-3' />
				<div>
					<h1 className='font-medium text-xl'>Description</h1>
					<p>{offer?.offer_description}</p>
				</div>
			</div>
		</section>
	);
};

export default JobDetails;
