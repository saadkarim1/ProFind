export interface UserType {
	user_id?: string;
	name?: string;
	email?: string;
	role?: string;

	about_me?: string;
	phone?: string;
	location?: string;
	job?: string;
}

export interface RecruiterType {
	id?: string;
	name?: string;
	email?: string;
	role?: string;

	company_name?: string;
	company_description?: string;
	company_website?: string;
	sector?: string;
	company_logo?: string;
}

export type AuthUser = {
	user_id?: string;
	name?: string;
	email?: string;
	role?: string;
	location?: string;

	about_me?: string;
	phone?: string;
	job?: string;

	company_name?: string;
	company_description?: string;
	company_website?: string;
	sector?: string;
	company_logo?: string;
};
