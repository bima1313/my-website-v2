import type { IconType } from "$lib/components/icons/icon-map";

interface Tech {
	name: string;
	skillLevel?: string;
}
interface IconData {
	name: IconType;
	color: string;
}
export interface props {
	title: string;
	icon: IconData;
	technologies: Tech[];
}
