import { dev } from '$app/environment';

export const optimize = (src: string, widths = [640, 828, 1200, 1920, 3072]) => {
	if (dev) return src;

	return widths
		.slice()
		.sort((a, b) => a - b)
		.map((width, i) => {
			const url = `/_vercel/image?url=${encodeURIComponent(src)}&w=${width}&q=90`;
			const descriptor = i < widths.length - 1 ? ` ${width}w` : '';
			return url + descriptor;
		})
		.join(', ');
};
