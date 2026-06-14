<script lang="ts">
	import { page } from '$app/state';
	import { resolve } from '$app/paths';
	import { slide } from 'svelte/transition';
	import { navItems } from '$lib/features/home/constants/nav-items';
	import { activation } from '$lib/states/mobile-nav-activation.svelte';
	import Chip from './Chip.svelte';
	import type { Pathname } from '$app/types';
	import Icon from './icons/Icon.svelte';

	let lastProjectsUrl = $state('/projects');
	$effect(() => {
		if (page.url.pathname === '/projects') {
			lastProjectsUrl = page.url.pathname + page.url.search;
		}
	});
</script>

<div transition:slide={{ axis: 'x' }} class="fixed z-20 flex min-h-screen w-full backdrop-blur-xs">
	<div class=" flex w-[62.5%] bg-surface-high">
		<ul class="w-full px-8 py-12">
			{#each navItems as item, index (index)}
				<a
					aria-current={page.url.pathname === item.navPath}
					onclick={() => (activation.isActive = !activation.isActive)}
					href={item.navPath === '/projects'
						? resolve(lastProjectsUrl as Pathname)
						: resolve(item.navPath)}
				>
					<Chip
						className={[
							'w-full py-3 cursor-pointer text-2xl font-extrabold transition-colors duration-200 ease-in-out hover:text-primary rounded-lg flex items-center gap-4 mb-2 group',
							page.url.pathname === item.navPath ? 'w-full bg-on-primary text-primary' : ''
						]}
					>
						<Icon
							name={item.iconName}
							className={[
								'group-hover:fill-primary',
								page.url.pathname === item.navPath ? 'fill-primary' : 'fill-on-surface-variant'
							]}
						/>
						<span>{item.navName}</span>
					</Chip>
				</a>
			{/each}
		</ul>
	</div>
	<!--Blurring container in the right side-->
	<div class="w-[37.5%] bg-surface-low/10"></div>
</div>
