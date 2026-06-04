import type { Project } from '$lib/features/home/interfaces/card-props';
import { supabase } from '$lib/supabase/supabase-client';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const { data, error } = await supabase
		.from('projects')
		.select('title, main_tech, description, tech_used, images')
		.order('id', { ascending: true })
		.limit(3);

	if (error) {
		console.error('Error fetch projects:', error.message);
		return { errors: 'Error fetch projects, please try again', projects: [] };
	}

	const mappedData: Project[] = data.map((item) => ({
		title: item.title,
		mainTech: item.main_tech,
		description: item.description,
		techUsed: item.tech_used,
		images: item.images
	}));
	return {
		projects: mappedData,
		errors: null
	};
};
