import { useGetAllOffersQuery } from "@/app/services/offersApi";
import JobCardTwo from "@/components/JobCardTwo";
import SearchBar from "@/components/offers/SearchBar";
import type { OfferType } from "@/models/offer";
import { GetOfferType } from "@/utils/GetOfferType";
import { useEffect, useState } from "react";

const Jobs: React.FC = () => {
	const { data: offers } = useGetAllOffersQuery(undefined);
	const [selectedOffer, setSelectedOffer] = useState<OfferType | null>(null);

	useEffect(() => {
		setSelectedOffer(offers?.data?.offers[0]);
	}, [offers]);

	console.log(offers?.data.offers);
	return (
		<section>
			<SearchBar />
			<div className='flex justify-between'>
				<div className='w-[49%] grid grid-cols-2 gap-4 '>
					{offers?.data.offers?.map((offer: OfferType) => (
						<JobCardTwo
							key={offer.offer_id}
							offer={offer}
							setSelectedOffer={setSelectedOffer}
							selectedOffer={selectedOffer}
						/>
					))}
					
				</div>
				<div className='w-[49%] h-fit sticky top-30 space-y-4 rounded-4xl p-10 border-4 border-[#e9e9e9] bg-white'>
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
								<h1 className='font-medium text-3xl'>{selectedOffer?.title}</h1>
								{GetOfferType(selectedOffer?.offer_type)}
							</div>
							<p className='font-medium text-[#878787] text-[18px]'>
								{selectedOffer?.company.title}
							</p>

							<button className='cursor-pointer w-fit h-fit text-[14px] font-medium py-1.5 px-3 border-2 text-white border-[#0082FA]  rounded-xl bg-[#0082FA]'>
								Apply Now
							</button>
						</div>
					</div>
					<hr className='text-[#e9e9e9] h-3' />
					<div className='flex justify-between w-full h-10 font-semibold text-[15px] text-[#3a4981]'>
						<div className='w-[33%] h-full flex flex-col items-center '>
							<h3>SALARY</h3>
							<p>-----</p>
						</div>
						<div className='w-[33%] h-full flex flex-col items-center '>
							<h3>DURATION</h3>
							<p>
								{selectedOffer?.duration ? selectedOffer?.duration : "-----"}
							</p>
						</div>
						<div className='w-[33%] h-full  flex flex-col items-center '>
							<h3>LOCATION</h3>
							<p>{selectedOffer?.location}</p>
						</div>
					</div>
					<hr className='text-[#e9e9e9] h-3' />
					<div>
						<h1 className='font-medium text-xl'>Description</h1>
						<p>{selectedOffer?.description}</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Jobs;
