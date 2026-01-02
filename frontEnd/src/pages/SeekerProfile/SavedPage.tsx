import { useGetSavedOffersQuery } from "@/app/services/offersApi";
import MiniSavedJobCard from "@/components/MiniSavedJobCard";

const SavedPage = () => {
	const { data: savedOffers } = useGetSavedOffersQuery();
	return (
		<div className='w-[74%] space-y-4'>
			<h1 className='text-2xl font-semibold '>Saved Offers</h1>

			{savedOffers?.map((offer) => (
				<MiniSavedJobCard key={offer?.offer_id} offer={offer} />
			))}
		</div>
	);
};

export default SavedPage;
