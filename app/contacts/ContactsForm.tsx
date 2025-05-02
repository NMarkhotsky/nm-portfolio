"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { toast } from "sonner";
import { contactsSchema } from "@/schemas/contactsSchema";
import { CiCircleCheck, CiWarning } from "react-icons/ci";

type FormData = z.infer<typeof contactsSchema>;

export default function ContactsForm() {
	const [isSubmitting, setIsSubmitting] = useState(false);

	const form = useForm<FormData>({
		resolver: zodResolver(contactsSchema),
		defaultValues: {
			name: "",
			email: "",
			message: "",
		},
	});

	const onSubmit = async (data: FormData) => {
		setIsSubmitting(true);

		const res = await fetch("/api/contacts", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(data),
		});

		if (res.ok) {
			toast("Message sent successfully!", {
				description:
					"Thank you for reaching out. I’ll get back to you as soon as possible.",
				icon: (
					<div className="text-green-700 rounded-full">
						<CiCircleCheck className="w-5 h-5" />
					</div>
				),
			});
			form.reset();
		} else {
			toast("Failed to send the message.", {
				description:
					"Please try again later or contact me directly via email.",
				icon: (
					<div className="text-red-700 rounded-full">
						<CiWarning className="w-5 h-5" />
					</div>
				),
			});
		}

		setIsSubmitting(false);
	};

	return (
		<div className="max-w-md mx-auto mt-10">
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="space-y-4"
				>
					<FormField
						control={form.control}
						name="name"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Name</FormLabel>
								<FormControl>
									<Input placeholder="Your name" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="email"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Email</FormLabel>
								<FormControl>
									<Input
										placeholder="Email@example.com"
										type="email"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="message"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Message</FormLabel>
								<FormControl>
									<Textarea
										className="h-30 resize-none"
										placeholder="Your message..."
										rows={5}
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<Button
						type="submit"
						className="w-full flex items-center justify-center gap-2"
						disabled={isSubmitting}
					>
						{isSubmitting ? (
							<span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
						) : (
							"Send Message"
						)}
					</Button>
				</form>
			</Form>
		</div>
	);
}
