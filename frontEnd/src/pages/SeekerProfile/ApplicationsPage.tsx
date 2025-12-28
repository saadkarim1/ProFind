import { useGetAppliedOffersQuery } from "@/app/services/offersApi";
import MiniJobCard from "@/components/MiniJobCard";
import { useState } from "react";

// const jobTypes: ReactElement[] = [
// 	<div className='border-[1.5px] font-medium border-[#d4ab60] text-[13px] px-2 py-0.5 w-fit h-fit rounded-full text-[#655b41] bg-[#fff1d3] '>
// 		Remote
// 	</div>,
// 	<div className='border-[1.5px] font-medium border-[#532d9e] text-[13px] px-2 py-0.5 w-fit h-fit rounded-full text-[#532d9e] bg-[#ffecff] '>
// 		Full Time
// 	</div>,
// 	<div className='border-[1.5px] font-medium border-[#012eeb] text-[13px] px-2 py-0.5 w-fit h-fit rounded-full text-[#2c3ebc] bg-[#e6f6ff] '>
// 		Part Time
// 	</div>,
// 	<div className='border-[1.5px] font-medium border-[#4b9964] text-[13px] px-2 py-0.5 w-fit h-fit rounded-full text-[#22352f] bg-[#e2fce8] '>
// 		Freelance
// 	</div>,
// ];

const filters: string[] = ["In progress", "Applied", "Rejected"];
const ApplicationsPage = () => {
	const [filter, setFilter] = useState<string>("In progress");
	const { data: offers } = useGetAppliedOffersQuery();

	return (
		<div className='w-[74%] space-y-4'>
			<div className='flex space-x-2'>
				{filters.map((f) => (
					<div
						onClick={() => setFilter(f)}
						key={f}
						className={`cursor-pointer border-2 border-sky-600 ${
							f === filter
								? " bg-sky-600 text-white"
								: " bg-sky-100 text-sky-600"
						}  py-0.5 text-md font-medium px-3 rounded-full transition-colors duration-200 ease-in-out`}
					>
						{f}
					</div>
				))}
			</div>
			{offers?.map((offer) => (
				<MiniJobCard key={offer?.offer_id} offer={offer} />
			))}
		</div>
	);
};

export default ApplicationsPage;
