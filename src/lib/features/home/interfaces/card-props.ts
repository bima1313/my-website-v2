import type { MainTech, Image } from '$lib/interfaces/shared';

export interface Project {
	mainTech: MainTech;
	title: string;
	description: string;
	techUsed: string[];
	image: Image;
}
