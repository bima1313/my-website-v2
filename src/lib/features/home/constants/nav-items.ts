import type { props } from '$lib/features/home/interfaces/nav-props';

export const navItems: readonly props[] = [
	{ navPath: '/', iconName: 'home', navName: 'Home' },
	{ navPath: '/projects', iconName: 'code', navName: 'Projects' },
	{ navPath: '/skills', iconName: 'terminal', navName: 'Skills' },
	{ navPath: '/about', iconName: 'person', navName: 'About' }
];
