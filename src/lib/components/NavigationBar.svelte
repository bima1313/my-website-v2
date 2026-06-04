<script lang="ts">
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import type { Pathname } from '$app/types';
	import { navItems } from '$lib/features/home/constants/nav-items';

	let lastProjectsUrl = $state('/projects');

	$effect(() => {
		if (page.url.pathname === '/projects') {
			lastProjectsUrl = page.url.pathname + page.url.search;
		}
	});
</script>

<nav class="hidden items-center gap-12 ml:flex" aria-label="main menu">
	<ul class="flex items-center justify-center gap-12 text-on-surface-variant">
		{#each navItems as item, index (index)}
			<a
				class={[
					'cursor-pointer transition-transform duration-200 ease-in-out hover:text-primary',
					page.url.pathname === item.navPath ? 'border-b-2 border-primary text-primary' : ''
				]}
				aria-current={page.url.pathname === item.navPath}
				href={item.navPath === '/projects'
					? resolve(lastProjectsUrl as Pathname)
					: resolve(item.navPath)}>{item.navName}</a
			>
		{/each}
	</ul>
</nav>
