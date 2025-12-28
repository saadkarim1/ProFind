export const getCreatedAtOffer = (offerDate: string): string => {
	let dateToString = new Date(offerDate).toDateString();
	let finallyDate: string = dateToString.slice(4, 10);
	return finallyDate;
};

export const getHowLongOfferPublishedPerDays = (offerDate: string) => {
	const a = new Date(offerDate),
		b = new Date();

	const _MS_PER_DAY = 1000 * 60 * 60 * 24;

	const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
	const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

	return Math.floor((utc2 - utc1) / _MS_PER_DAY);
};

export const getHowLongOfferPublishedPerHours = (offerDate: string) => {
	const a = new Date(offerDate),
		b = new Date();

	const _MS_PER_HOUR = 1000 * 60 * 60;

	const utc1 = Date.UTC(
		a.getFullYear(),
		a.getMonth(),
		a.getDate(),
		a.getHours()
	);
	const utc2 = Date.UTC(
		b.getFullYear(),
		b.getMonth(),
		b.getDate(),
		b.getHours()
	);

	return Math.floor((utc2 - utc1) / _MS_PER_HOUR);
};
