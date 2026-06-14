import type { props } from '$lib/features/skills/interfaces/skill-props';

export const skills: readonly props[] = [
	{
		title: 'Frontend Web',
		icon: {
			name: 'web',
			color: 'bg-primary/10 fill-primary'
		},
		technologies: [
			{
				name: 'Typescript'
			},
			{
				name: 'Tailwind CSS'
			},
			{
				name: 'React'
			},
			{
				name: 'Next.Js',
				skillLevel: 'intermediate'
			},
			{
				name: 'Svelte',
				skillLevel: 'intermediate'
			},
			{
				name: 'SvelteKit',
				skillLevel: 'intermediate'
			}
		]
	},
	{
		title: 'Mobile / Android (Flutter)',
		icon: {
			name: 'smartphone',
			color: 'bg-secondary/10 fill-secondary'
		},
		technologies: [
			{
				name: 'Dart'
			},
			{
				name: 'Flutter'
			},
			{
				name: 'Provider State Management'
			},
			{
				name: 'GetX State Management'
			},
			{
				name: 'Bloc State Management',
				skillLevel: 'basic'
			}
		]
	},
	{
		title: 'Backend & Architecture',
		icon: {
			name: 'dns',
			color: 'bg-tertiary/10 fill-tertiary'
		},
		technologies: [
			{
				name: 'Python'
			},
			{
				name: 'Java',
				skillLevel: 'basic'
			},
			{
				name: 'Go',
				skillLevel: 'basic'
			},
			{
				name: 'Spring Boot',
				skillLevel: 'basic'
			},
			{
				name: 'Express',
				skillLevel: 'intermediate'
			},
			{
				name: 'Firebase'
			},
			{
				name: 'Supabase'
			},
			{
				name: 'SQLite'
			},
			{
				name: 'PostgreSQL',
				skillLevel: 'basic'
			},
			{
				name: 'MongoDB'
			}
		]
	},
	{
		title: 'Development Tools',
		icon: {
			name: 'terminal',
			color: 'bg-mint-green/10 fill-mint-green'
		},
		technologies: [
			{
				name: 'Github'
			},
			{
				name: 'Visual Studio Code'
			},
			{
				name: 'Android Studio'
			}
		]
	}
];
