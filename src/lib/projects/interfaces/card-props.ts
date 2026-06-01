interface Image {
	imageAssets: string;
	imageAlt: string;
}
export interface props {
	tag: string;	
	title: string;
	description: string;
	techUsed: string[];
	image: Image;
}
