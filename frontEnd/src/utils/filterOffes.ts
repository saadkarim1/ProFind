import type { OfferType } from "@/models/offer";

export const filterOffers = (
	offers: OfferType[],
	inputValues: { location: string; keyword: string }
) => {
	let filteredOffers: OfferType[] = offers;

	if (inputValues.keyword) {
		filteredOffers = filteredOffers?.filter(
			(offer) =>
				offer?.offer_title
					.toUpperCase()
					.includes(inputValues.keyword.toUpperCase()) && offer
		);
	}

	if (inputValues.location) {
		filteredOffers = filteredOffers?.filter(
			(offer) =>
				offer?.location.toUpperCase() === inputValues.keyword.toUpperCase() &&
				offer
		);
	}
	return filteredOffers;
};
