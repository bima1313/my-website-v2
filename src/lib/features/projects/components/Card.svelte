<script lang="ts">
	import type { Project } from '$lib/features/projects/interfaces/card-props';
	import ImageContainer from '$lib/features/projects/components/ImageContainer.svelte';
	import Chip from '$lib/components/Chip.svelte';
	import ElevatedButton from '$lib/components/ElevatedButton.svelte';
	import OutlinedButton from '$lib/components/OutlinedButton.svelte';

	let { tag, title, description, techUsed, images, projectLink }: Project = $props();
</script>

<article
	aria-label={`${title}-card`}
	class="glass-panel group flex cursor-pointer break-inside-avoid flex-col overflow-hidden rounded-xl shadow-secondary-container/10 transition-all duration-300 hover:shadow-[0_0_20px_5px]"
>
	<ImageContainer {images} {tag} />
	<div class="gap-sm flex flex-grow flex-col gap-2 p-6">
		<h3 class="text-headline-md text-on-surface">{title}</h3>
		<p class="text-on-surface-variant ml:line-clamp-4 ml:text-wrap">{description}</p>
		<div class="mt-3 mb-2 flex flex-wrap gap-2 text-xs">
			{#each techUsed as tech, index (index)}
				<Chip className="text-sm border border-white/10 bg-white/5">
					<span>{tech}</span>
				</Chip>
			{/each}
		</div>
		<div class="mt-auto flex gap-3 border-t border-white/5 pt-6">
			<ElevatedButton
				className="flex flex-1 font-semibold py-3 tracking-wider rounded-[0.25rem]"
				title="View Demo"
				path={projectLink.demo}
			/>
			<OutlinedButton
				className="flex flex-1 font-semibold py-3 tracking-wider"
				title="Source Code"
				path={projectLink.sourceCode}
			/>
		</div>
	</div>
</article>
