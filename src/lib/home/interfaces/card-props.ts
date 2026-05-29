interface Image {
	imageAssets: string;
	imageAlt: string;
}
export interface props {
	techTitle: string;
	tecthTitleColor: string;
	title: string;
	description: string;
	techUsed: string[];
	image: Image;
}
