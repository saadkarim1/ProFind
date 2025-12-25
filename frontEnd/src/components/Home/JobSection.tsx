import { useState } from "react";
import type { Position } from "../../models/model";
import TabJob from "./TabJob";
import Cursor from "./Cursor";
import JobCard from "../JobCard";
import { Link } from "react-router";
import { useGetAllOffersQuery } from "@/app/services/offersApi";
import type { OfferType } from "@/models/offer";

const domaines: string[] = [
	"Digital Marketing",
	"DevOps Engineer",
	"Graphic Designer",
	"Full-Stack Developer",
	"Logistics Coordinator",
];

type Props = {
	featuredJobsRef: React.RefObject<HTMLElement | null>;
};

const JobsSection: React.FC<Props> = ({ featuredJobsRef }) => {
	const { data: offers } = useGetAllOffersQuery(undefined);
	const [selectedDomaine, setSelectedDomaine] =
		useState<string>("Graphic Designer");

	const [position, setPosition] = useState<Position>({
		width: 0,
		left: 0,
		opacity: 0,
		height: 0,
	});

	const latestOffers = () => {
		let leatestOffers1: OfferType[] = [
			offers?.data.offers[offers?.data.offers.length - 1],
		];

		for (
			let i = offers?.data.offers.length - 2;
			i > offers?.data.offers.length - 9;
			i--
		) {
			leatestOffers1 = [...leatestOffers1, offers?.data.offers[i]];
		}

		return leatestOffers1;
	};

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
				{latestOffers()?.map((offer) => (
					<JobCard key={offer?.offer_id} offer={offer} />
				))}
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
