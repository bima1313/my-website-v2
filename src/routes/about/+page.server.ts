import { PRIVATE_EMAIL, PRIVATE_RESEND_API_KEY } from '$env/static/private';
import { fail } from '@sveltejs/kit';
import { Resend } from 'resend';

const resend = new Resend(PRIVATE_RESEND_API_KEY);
export const actions = {
	create: async ({ request }) => {
		const form = await request.formData();
		const name = form.get('name')?.toString().trim();
		const email = form.get('email')?.toString().trim();
		const message = form.get('message')?.toString().trim();

		if (!name || !email || !message) {
			return fail(400, {
				error: true,
				message: 'All column is required to fill',
				values: { name, email, message }
			});
		}

		try {
			const { data, error } = await resend.emails.send({
				from: `Portfolio Contact <onboarding@resend.dev>`,
				to: PRIVATE_EMAIL,
				subject: `💼 New message from ${name}`,
				text: `\n\nYou received new message from your website portofolio.\n\nName: ${name}
				\nEmail: ${email}
				\nMessage:\n\n${message}`
			});

			if (error) {
				return fail(500, {
					success: false,
					error: true,
					message: "Can't send message. Please try again later"
				});
			}

			return {
				success: true,
				error: false,
				message: 'Your message has been sent successfully'
			};
		} catch (error) {
			return fail(500, {
				success: false,
				error: true,
				message: 'An error occurred on the server. Please try again later.'
			});
		}
	}
};
