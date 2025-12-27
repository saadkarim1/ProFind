import type { RecruiterType } from "./recruiter";

export type OfferType = {
	offer_id: string;
	offer_title: string;
	offer_description: string;
	location: string;
	duration: number;
	company_id: string;
	offer_type: string;
	company: RecruiterType;
	created_at: string;
};
