export type OfferType = {
	offer_id: string;
	offer_title: string;
	offer_description: string;
	location: string;
	duration: number;
	company_id: string;
	offer_type: string;
	company_name: string;
	created_at: string;
	is_saved: boolean;
	is_applied: boolean;
	salary?: number;
	offer_category: string;
	email_to_apply?: string;
	application_status?: string;
};
