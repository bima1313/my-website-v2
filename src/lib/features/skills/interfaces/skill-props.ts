interface Tech {
	name: string;
	skillLevel?: string;
}
interface IconData {
	name: string;
	color: string;
}
export interface props {
	title: string;
	icon: IconData;
	technologies: Tech[];
}
