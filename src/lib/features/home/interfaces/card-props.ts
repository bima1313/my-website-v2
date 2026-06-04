import type { MainTech, Images } from '$lib/interfaces/shared';

export interface Project {
	mainTech: MainTech;
	title: string;
	description: string;
	techUsed: string[];
	images: Images;
}
