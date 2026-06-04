import type { Project } from '$lib/features/projects/interfaces/card-props';
import { supabase } from '$lib/supabase/supabase-client';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const { data, error } = await supabase
		.from('projects')
		.select('tag, title, description, tech_used, images, project_link')
		.order('created_at');

	if (error) {
		return { projects: [], errors: 'Error fetch projects, please try again' };
	}

	const mappedData: Project[] = data.map(({ tech_used, project_link, ...item }) => ({
		...item,
		techUsed: tech_used,
		projectLink: project_link
	}));

	return {
		projects: mappedData,
		errors: null
	};
};
