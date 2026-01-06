import { z } from "zod";
export const registerSchema = z.object({
	name: z.string().min(3, "Name must be least 3 characters").max(25),
	email: z.string().email(),
	password: z.string().min(8, "Password must be at least 8 characters"),
});

export type RegisterFieldstype = z.infer<typeof registerSchema>;
