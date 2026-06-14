import type { Image } from '$lib/interfaces/shared';

interface ProjectLink {
	demo: string;
	sourceCode: string;
}
export interface Project {
	tag: string;
	title: string;
	description: string;
	techUsed: string[];
	image: Image;
	projectLink: ProjectLink;
}
