<script lang="ts">
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import Chip from '$lib/components/Chip.svelte';
	import { categories } from '$lib/features/projects/constants/chip-categories';

	let currentCategory = $derived(page.url.searchParams.get('category') || categories[0]);
</script>

<header class="flex w-full flex-col items-start gap-6">
	<h1 class="text-mobile text-on-surface md:text-display">Featured Projects</h1>
	<p class="max-w-2xl text-on-surface-variant md:text-[18px]">
		A selection of my recent work across web and mobile platforms, showcasing technical precision
		and clean architecture.
	</p>
	<ul class="mt-6 flex flex-wrap gap-3">
		{#each Object.entries(categories) as [index, category] (index)}
			<li>
				<a
					href={category === categories[0]
						? resolve('/projects')
						: resolve(`/projects?category=${category}`)}
				>
					<Chip
						className={[
							'rounded-full border px-6 py-3 font-medium  transition-colors hover:border-white/10 cursor-pointer',
							currentCategory === category
								? 'border-secondary bg-secondary-container/20 text-secondary'
								: 'bg-white/5 border-transparent'
						]}
					>
						{category}
					</Chip>
				</a>
			</li>
		{/each}
	</ul>
</header>
