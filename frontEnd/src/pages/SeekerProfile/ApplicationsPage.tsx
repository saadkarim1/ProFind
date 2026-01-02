import { useGetAppliedOffersQuery } from "@/app/services/offersApi";
import MiniAppliedJobCard from "@/components/MiniAppliedJobCard";
import { useState } from "react";

const filters: string[] = ["pending", "accepted", "rejected"];
const ApplicationsPage = () => {
	const [filter, setFilter] = useState<string>("pending");
	const { data: offers } = useGetAppliedOffersQuery();
	console.log(offers);
	return (
		<div className='w-[74%] space-y-4'>
			<div className='flex space-x-2'>
				{filters.map((f) => (
					<div
						onClick={() => setFilter(f)}
						key={f}
						className={`cursor-pointer border-2 border-sky-600 capitalize ${
							f === filter
								? " bg-[#0082FA] text-white"
								: " bg-sky-100 text-[#0082FA]"
						}  py-0.5 text-md font-medium px-3 rounded-full transition-colors duration-200 ease-in-out`}
					>
						{f}
					</div>
				))}
			</div>
			{offers?.map((offer) => {
				if (offer.application_status === filter) {
					return <MiniAppliedJobCard key={offer?.offer_id} offer={offer} />;
				}
			})}
		</div>
	);
};

export default ApplicationsPage;
