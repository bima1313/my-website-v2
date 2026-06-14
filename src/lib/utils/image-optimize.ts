import { dev } from '$app/environment';

export const optimize = (src: string, widths = [640, 750, 828, 1200, 1920]) => {
	if (dev) return src;

	return widths
		.slice()
		.sort((a, b) => a - b)
		.map((width, i) => {
			const url = `/_vercel/image?url=${encodeURIComponent(src)}&w=${width}&q=80`;
			const descriptor = i < widths.length - 1 ? ` ${width}w` : '';
			return url + descriptor;
		})
		.join(', ');
};
