import type { props } from '$lib/features/home/interfaces/card-props';
import img from '$lib/assets/sakagami-tomoyo.jpg';

export const projects: readonly props[] = [
	{
		techTitle: 'FLUTTER / DART',
		tecthTitleColor: 'text-secondary',
		title: 'Expense Tracker',
		description:
			'A high-performance, simple and efficient android application built to help manage personal finances.',
		techUsed: ['Clean Architecture', 'GetX State Management'],
		image: {
			imageAssets: img,
			imageAlt: 'sakagami tomoyo'
		}
	},
	{
		techTitle: 'REACT / TYPESCRIPT',
		tecthTitleColor: 'text-tertiary',
		title: 'Personal Portfolio Website Version 1',
		description:
			'Developed a responsive web portfolio using React to showcase my projects and skills.  	 Designed for easy navigation and quick access for recruiters to review my work',
		techUsed: ['Next.js', 'Supabase'],
		image: {
			imageAssets: img,
			imageAlt: 'sakagami tomoyo'
		}
	},
	{
		techTitle: 'FLUTTER / DART',
		tecthTitleColor: 'text-secondary',
		title: "Bachelor's Thesis: Onfood - Dine-in Ordering & Discount App",
		description:
			'Built in just two months, this dual-app ecosystem (Client & Admin) integrates an intelligent automated discount engine driven by Tsukamoto Fuzzy Logic. Powered by Firebase Firestore for real-time synchronization and Firebase Cloud Storage for optimized image asset management.',
		techUsed: ['Tsukamoto Fuzzy Logic', 'Firebase'],
		image: {
			imageAssets: img,
			imageAlt: 'sakagami tomoyo'
		}
	}
];
