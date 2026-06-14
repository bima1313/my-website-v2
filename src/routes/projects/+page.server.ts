import { capitalize } from '$lib/utils/capitalize';
import { categories } from '$lib/features/projects/constants/chip-categories';
import type { Project } from '$lib/features/projects/interfaces/card-props';
import { supabase } from '$lib/supabase/supabase-client';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ url, setHeaders }) => {
	setHeaders({
		'cache-control': 'public, max-age=3600, s-maxage=3600' // 1 hours
	});
	const parameter = url.searchParams.get('category');

	const data = async () => {
		let query = supabase
			.from('projects')
			.select('tag, title, description, tech_used, image, project_link')
			.order('created_at');

		if (
			parameter !== categories[0] &&
			parameter !== null &&
			Object.values(categories).includes(capitalize(parameter))
		) {
			query = query.filter('tag', 'in', `(${parameter})`);
		}
		const { data, error } = await query;

		if (error) {
			return { projects: [], errors: error.message };
		}

		const mappedData: Project[] = data.map(({ tech_used, project_link, ...item }) => ({
			...item,
			techUsed: tech_used,
			projectLink: project_link
		}));

		return { projects: mappedData, errors: null };
	};

	return {
		projects: data()
	};
};
