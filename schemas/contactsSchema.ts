import { z } from "zod";

export const contactsSchema = z.object({
	name: z.string().min(2, "Name must be at least 2 characters long").trim(),
	email: z.string().email("Invalid email").trim(),
	message: z
		.string()
		.min(5, "Message must be at least 5 characters long")
		.trim(),
});
