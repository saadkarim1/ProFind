import z from "zod";

export const userSchema = z.object({
	name: z
		.string()
		.min(3, "Name must be at least 3 characters")
		.or(z.literal("")),
	email: z.string().email().or(z.literal("")),
	job: z
		.string()
		.min(3, "Name must be at least 3 characters")
		.or(z.literal("")),
	location: z.string().optional(),
	about_me: z
		.string()
		.min(10, "Description must be at least 40 characters")
		.or(z.literal("")),
	phone: z
		.union([
			z.string("phone must be a number").length(0, "phone must be a number"),
			z.coerce.number("phone must be a number"),
		])
		.optional(),
});

export type UpdateUserFields = z.infer<typeof userSchema>;
