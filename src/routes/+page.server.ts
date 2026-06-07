import type { Project } from '$lib/features/home/interfaces/card-props';
import { supabase } from '$lib/supabase/supabase-client';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const data = async () => {
		const { data, error } = await supabase
			.from('projects')
			.select('title, main_tech, description, tech_used, images')
			.order('created_at')
			.limit(3);

		if (error) {
			console.error('Error fetch projects:', error.message);
			return { projects: [], errors: error.message };
		}

		const mappedData: Project[] = data.map(({ main_tech, tech_used, ...item }) => ({
			...item,
			mainTech: main_tech,
			techUsed: tech_used
		}));

		return {
			projects: mappedData,
			errors: null
		};
	};

	return {
		projects: data()
	};
};
