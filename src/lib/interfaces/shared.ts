export interface MainTech {
	name: string;
	color: string;
}
export interface ImageAssets {
	avifLink?: string;
	webpLink?: string;
	defaultLink: string;
}
export interface Images {
	alt: string;
	assets: ImageAssets;
}
