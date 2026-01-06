import z from "zod";

const DURaTION_OPTIONS = ["6+ months", "3-6 months", "1-3 months"] as const;
export const offerSchema = z.object({
	title: z
		.string()
		.min(1, "Title is required")
		.min(3, "Title must be at least 3 characters"),
	description: z
		.string()
		.min(1, "Description is required")
		.min(10, "Description must be at least 40 characters"),
	location: z.string().min(1, "Location is required"),
	duration: z.enum(DURaTION_OPTIONS, "Duration is required"),
	salary: z
		.union([
			z.string().length(0),
			z.coerce.number().positive(),
		])
		.optional(),
	// salary: z.number().optional(),
	email_to_apply: z.string().email().or(z.literal("")),
});

export type CreateOfferFieldsType = z.infer<typeof offerSchema>;
