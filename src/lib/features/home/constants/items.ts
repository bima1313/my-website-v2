import type { Item } from '$lib/features/home/interfaces/item';

export const items: readonly Item[] = [
	{
		id: 1,
		values: { iconName:  'smartphone', iconColor: 'fill-primary', description: 'Flutter Developer' }
	},
	{
		id: 2,
		values: {
			iconName: 'language',
			iconColor: 'fill-tertiary',
			description: 'Full Stack Developer'
		}
	}
];
