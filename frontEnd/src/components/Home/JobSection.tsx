import { useState } from "react";
import type { Position } from "../../models/model";
import TabJob from "./TabJob";
import Cursor from "./Cursor";
import JobCard from "../JobCard";
import { Link } from "react-router";

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
	const [selectedDomaine, setSelectedDomaine] =
		useState<string>("Graphic Designer");

	const [position, setPosition] = useState<Position>({
		width: 0,
		left: 0,
		opacity: 0,
		height: 0,
	});

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
				{[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
					<JobCard key={item} />
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
