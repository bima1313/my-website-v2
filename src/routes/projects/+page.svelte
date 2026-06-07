<script lang="ts">
	import Card from '$lib/features/projects/components/Card.svelte';
	import Header from '$lib/features/projects/components/Header.svelte';
	import ShimmerCard from '$lib/features/projects/components/ShimmerCard.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<main
	class="mx-auto flex w-full flex-grow flex-col items-center gap-20 px-4 py-20 selection:bg-secondary selection:text-surface-lowest md:px-16"
>
	<Header />
	<section class="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
		{#await data.projects}
			{#each Array(3)}
				<ShimmerCard />
			{/each}
		{:then data}
			{#each data.projects as project, index (index)}
				<Card
					tag={project.tag}
					title={project.title}
					description={project.description}
					techUsed={project.techUsed}
					images={project.images}
					projectLink={project.projectLink}
				/>
			{/each}
		{/await}
	</section>
</main>
