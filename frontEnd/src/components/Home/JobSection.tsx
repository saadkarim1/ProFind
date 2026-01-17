import { useState } from "react";
import type { Position } from "../../models/model";
import TabJob from "./TabJob";
import Cursor from "./Cursor";
import JobCard from "../JobCard";
import { Link } from "react-router";
import { useGetAllOffersQuery } from "@/app/services/offersApi";

const domaines: string[] = [
	"engineering",
	"marketing",
	"technology",
	"business",
	"finance",
];

type Props = {
	featuredJobsRef: React.RefObject<HTMLElement | null>;
};

const JobsSection: React.FC<Props> = ({ featuredJobsRef }) => {
	const { data: offers } = useGetAllOffersQuery();
	const [selectedDomaine, setSelectedDomaine] = useState<string>("technology");

	const [position, setPosition] = useState<Position>({
		width: 0,
		left: 0,
		opacity: 0,
		height: 0,
	});

	let filtredOffers = offers?.filter(
		(offer) => offer.offer_category === selectedDomaine
	);
	if (!filtredOffers) return;
	return (
		<section
			ref={featuredJobsRef}
			id='featured-jobs'
			className='w-[95%] md:w-[90%] xl:w-[80%] mx-auto flex flex-col items-center space-y-10 '
		>
			<h1 className='text-4xl font-bold'>Featured Job Offers</h1>
			<ul className='flex items-center rounded-full bg-gray-200 p-1.5 font-medium text-[14px] sm:text-lg'>
				{domaines.map((item) => (
					<TabJob
						key={item}
						item={item}
						selectedDomaine={selectedDomaine}
						setPosition={setPosition}
						setSelectedDomaine={setSelectedDomaine}
					/>
				))}
				<Cursor position={position} />
			</ul>

			<div className='grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 w-full'>
				{filtredOffers?.length > 0 ? (
					filtredOffers?.map((offer) => {
						let count = 0;
						if (count > 8) return;
						count++;
						return <JobCard key={offer?.offer_id} offer={offer} />;
					})
				) : (
					<p className='text-center font-medium text-xl col-span-4'>
						oops! No offers for this category
					</p>
				)}
			</div>
			<Link
				to={"jobs"}
				className='cursor-pointer font-normal text-lg rounded-full bg-[#0082FA] text-white py-2.5 px-5'
			>
				All job offers
			</Link>
		</section>
	);
};

export default JobsSection;
