<script lang="ts">
	import type { props } from '$lib/features/skills/interfaces/skill-props';
	import ListItem from './ListItem.svelte';

	let { title, icon, technologies }: props = $props();
</script>

<div
	aria-label={`${title}-card`}
	class="glass-panel rounded-xl p-6 shadow-secondary-container/15 transition-all duration-300 hover:shadow-[0_0_20px_5px] md:p-12"
>
	<div class="mb-12 flex items-center gap-3">
		<div class={['flex h-10 w-10 items-center justify-center rounded', icon.color]}>
			<span class="material-icons">{icon.name}</span>
		</div>
		<h2 class="text-headline-md text-on-surface">{title}</h2>
	</div>
	<div class="grid grid-cols-1 gap-3 sm:grid-cols-2">
		{#each technologies as tech, index (index)}
			<ListItem name={tech.name} skillLevel={tech.skillLevel} />
		{/each}
	</div>
</div>
