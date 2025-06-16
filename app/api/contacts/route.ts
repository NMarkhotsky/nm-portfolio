import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { contactsSchema } from "@/schemas/contactsSchema";

export async function POST(req: Request) {
	try {
		const data = await req.json();
		const parsed = contactsSchema.safeParse(data);

		if (!parsed.success) {
			return NextResponse.json(
				{ errors: parsed.error.flatten().fieldErrors },
				{ status: 400 }
			);
		}

		const transporter = nodemailer.createTransport({
			service: "gmail",
			auth: {
				user: process.env.MAIL_USER,
				pass: process.env.MAIL_PASS,
			},
		});

		const { name, email, message } = parsed.data;

		await transporter.sendMail({
			from: process.env.MAIL_USER,
			to: process.env.MAIL_TO,
			subject: `✉️ Нове повідомлення з форми зворотного зв'язку - NM-Portfolio`,
			text: `Ім’я: ${name}\nEmail: ${email}\n\nПовідомлення:\n${message}`,
			html: `
					<div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6; color: #333;">
						<h2 style="color: green;">✉️ Нове повідомлення - NM-Portfolio</h2>
						<p><strong>Ім’я:</strong> ${name}</p>
						<p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
						<hr style="margin: 20px 0;" />
						<p><strong>Повідомлення:</strong></p>
						<p style="white-space: pre-wrap; background: #f9f9f9; padding: 15px; border-radius: 6px;">${message}</p>
					</div>
					`,
		});

		return NextResponse.json({ success: true });
	} catch (error) {
		return NextResponse.json({ error }, { status: 500 });
	}
}
