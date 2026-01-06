import z from "zod";

export const companySchema = z
	.object({
		company_name: z
			.string()
			.min(3, "Name must be at least 3 characters")
			.or(z.literal("")),
		company_description: z
			.string()
			.min(10, "Description must be at least 40 characters")
			.or(z.literal("")),
		company_website: z.string().url().or(z.literal("")),
		location: z.string().optional(),
		email: z.string().email().or(z.literal("")),
	})

export type UpdateCompanyFields = z.infer<typeof companySchema>;
