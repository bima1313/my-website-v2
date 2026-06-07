<script lang="ts">
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import type { PageData } from '$lib';
	import Card from './Card.svelte';	

	const data = page.data as PageData;
</script>

<section class="relative z-10 mx-auto flex w-full flex-col px-4 py-[120px] md:px-16">
	<div class="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
		<div>
			<h2 class="mb-1 text-[40px] font-bold text-on-surface">Featured Projects</h2>
			<p class="text-[16px] font-[400] text-on-surface-variant">
				Selected works demonstrating technical depth and polished UX.
			</p>
		</div>
		<a
			href={resolve('/projects')}
			class="group flex items-center gap-1 font-medium text-primary transition-colors hover:text-primary-fixed"
			>All Projects
			<span class="material-icons md-18 transition-transform group-hover:translate-x-1">east</span>
		</a>
	</div>

	<div class="grid auto-rows-[400px] grid-cols-1 gap-10">
		{#await data.projects then data}
			{#each data.projects as project, index (index)}
				<Card
					mainTech={project.mainTech}
					title={project.title}
					description={project.description}
					techUsed={project.techUsed}
					images={project.images}
				/>
			{/each}
		{/await}
	</div>
</section>
