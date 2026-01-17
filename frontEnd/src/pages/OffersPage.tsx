import { useGetRecruiterOffersQuery } from "@/app/services/offersApi";
import type { RooteState } from "@/app/store";
import JobCardTwo from "@/components/JobCardTwo";
import CopyButton from "@/components/shared/CopyButton";
import type { OfferType } from "@/models/offer";
import { GetOfferType } from "@/components/shared/GetOfferType";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router";

const OffersPage = () => {
	const nabigate = useNavigate();
	const [showCreateWarning, setShowCreateWarning] = useState<boolean>(false);
	const { user } = useSelector((state: RooteState) => state.auth);
	const { data: offers } = useGetRecruiterOffersQuery();
	const [selectedOffer, setSelectedOffer] = useState<OfferType | null>(null);
	useEffect(() => {
		if (!offers) return;
		setSelectedOffer(offers[0]);
	}, [offers]);

	return (
		<section className=''>
			<div className='bg-white  flex items-center justify-evenly border-2 border-[#e9e9e9] rounded-3xl my-10 px-2 py-3'>
				<p className='w-[80%] text-[16px] sm:text-lg'>
					Create your job offer and start hiring today!
				</p>
				<button
					onClick={() => {
						if (user?.company_name) {
							nabigate("/offers/create-offer");
						} else {
							setShowCreateWarning((prev) => (prev = true));
							setTimeout(
								() => setShowCreateWarning((prev) => (prev = false)),
								2500
							);
						}
					}}
					className='font-medium rounded-full cursor-pointer bg-[#0082FA] text-white py-3 px-5'
				>
					Create
				</button>
			</div>
			{offers && offers?.length > 0 ? (
				<div className='flex justify-between'>
					<div className='w-full md:w-[30%] lg:w-[49%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-4 '>
						{offers?.map((offer: OfferType) => (
							<JobCardTwo
								key={offer.offer_id}
								offer={offer}
								setSelectedOffer={setSelectedOffer}
								selectedOffer={selectedOffer}
							/>
						))}
					</div>
					<div className='hidden md:block w-[68%] lg:w-[49%] h-fit sticky top-30 space-y-4 rounded-4xl p-10 border-4 border-[#e9e9e9] bg-white'>
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
									<h1 className='font-medium text-3xl capitalize'>
										{selectedOffer?.offer_title}
									</h1>
									{GetOfferType(selectedOffer?.offer_type)}
								</div>
								<p className='font-medium text-[#878787] text-[18px] capitalize'>
									{selectedOffer?.company_name}
								</p>
								<div className='space-x-2 flex items-center'>
									<Link
										to={`/offers/${selectedOffer?.offer_id}/applicants`}
										target='_blank'
										rel='noopener noreferrer'
										className='cursor-pointer w-fit h-fit text-[14px] font-medium py-1.5 px-3 border-2 text-white border-[#0082FA]  rounded-xl bg-[#0082FA]'
									>
										Show Applicants
									</Link>
									<button className='cursor-pointer w-fit h-fit text-[14px] font-medium py-1.5 px-3 border-2 text-white border-[#0082FA]  rounded-xl bg-[#0082FA]'>
										Edit Offer
									</button>
									<CopyButton offerId={selectedOffer?.offer_id} />
								</div>
							</div>
						</div>
						<hr className='text-[#e9e9e9] h-3' />
						<div className='flex justify-between w-full h-10 font-semibold capitalize text-[15px] text-[#3a4981]'>
							<div className='w-[33%] h-full flex flex-col items-center '>
								<h3>SALARY</h3>
								<p>{selectedOffer?.salary ? selectedOffer?.salary : "-----"}</p>
							</div>
							<div className='w-[33%] h-full flex flex-col items-center '>
								<h3>DURATION</h3>
								<p>
									{selectedOffer?.duration ? selectedOffer?.duration : "-----"}
								</p>
							</div>
							<div className='w-[33%] h-full  flex flex-col items-center'>
								<h3>LOCATION</h3>
								<p>
									{selectedOffer?.location ? selectedOffer?.location : "-----"}
								</p>
							</div>
						</div>
						<hr className='text-[#e9e9e9] h-3' />
						<div>
							<h1 className='font-medium text-xl'>Description</h1>
							<p>{selectedOffer?.offer_description}</p>
						</div>
						{selectedOffer?.email_to_apply && (
							<>
								<hr className='text-[#e9e9e9] h-3' />
								<div>
									<h1 className='font-medium text-xl'>Email To Apply</h1>
									<a
										href={`mailto:${selectedOffer?.email_to_apply}?subject=Condidature au poste de ${selectedOffer?.offer_title}`}
									>
										{selectedOffer?.email_to_apply}
									</a>
								</div>
							</>
						)}
					</div>
				</div>
			) : (
				<div className='w-full text-center font-medium'>
					No job offers available. Create your first job offer to start
					receiving applications
				</div>
			)}

			{showCreateWarning && (
				<div className='absolute w-full h-full backdrop-blur-[2px] top-0 right-0 flex items-center justify-center'>
					<div className=' rounded-3xl border-3 font-medium text-xl border-[#99C3FF] bg-white p-6'>
						Complete your company profile to continue
					</div>
				</div>
			)}
		</section>
	);
};

export default OffersPage;
