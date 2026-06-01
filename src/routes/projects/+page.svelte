<script lang="ts">
	import Card from '$lib/projects/components/Card.svelte';
	import Header from '$lib/projects/components/Header.svelte';
	import { projects } from '$lib/projects/constants/projects';
</script>

<main class="mx-auto flex w-full flex-grow flex-col items-center gap-20 px-4 py-20 md:px-16">
	<Header />
	<section class="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
		{#each projects as project, index (index)}
			<Card
				tag={project.tag}
				title={project.title}
				description={project.description}
				techUsed={project.techUsed}
				image={project.image}
			/>
		{/each}
	</section>
</main>
