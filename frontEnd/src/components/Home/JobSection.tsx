import { useState } from "react";
import type { Position } from "../../models/model";
import TabJob from "./TabJob";
import Cursor from "./Cursor";
import JobCard from "../JobCard";
import { Link } from "react-router";
import { useGetAllOffersQuery } from "@/app/services/offersApi";

const domaines: string[] = [
	"engineering",
	"sales and marketing",
	"technology",
	"business",
	"finance and legal",
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

	let filtredOffers = offers?.filter((offer) => offer.offer_category === selectedDomaine)
	// console.log(offers);

	return (
		<section
			ref={featuredJobsRef}
			id='featured-jobs'
			className='w-[80%] mx-auto min-h-screen flex flex-col items-center space-y-10 '
		>
			<h1 className='text-4xl font-bold'>Featured Job Offers</h1>
			<ul className='flex items-center rounded-full bg-gray-200 p-1.5 font-medium text-lg'>
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

			<div className='grid grid-cols-4 gap-4 w-full'>
				{filtredOffers?.map((offer) => {
					let count = 0;
					if (count > 8) return;
					count++;
					// if (offer.offer_category === selectedDomaine) {
					return <JobCard key={offer?.offer_id} offer={offer} />;
					// }
				})}
			</div>
			<Link
				to={"jobs"}
				className='cursor-pointer font-normal text-lg rounded-full bg-[#0082FA] text-white py-2.5 px-3'
			>
				All job offers
			</Link>
		</section>
	);
};

export default JobsSection;
