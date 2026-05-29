<script lang="ts">
	import Chip from '$lib/components/Chip.svelte';
	import type { props } from '$lib/home/interfaces/card-props';
	import ImageContainer from './ImageContainer.svelte';

	let { techTitle, tecthTitleColor, title, description, techUsed, image }: props = $props();
</script>

<article
	aria-label={`${title}-card`}
	class="glass-panel group relative flex flex-col overflow-hidden rounded-xl shadow-secondary-container/10 transition-all duration-300 hover:shadow-[0_0_20px] ml:col-span-full ml:flex-row"
>
	<div
		class="relative order-2 flex w-full flex-col justify-center px-12 py-6 ml:order-1 ml:w-[45%]
	lg:p-12"
	>
		<span class={['mb-3 font-medium tracking-widest', tecthTitleColor]}>{techTitle}</span>
		<h3 class="mb-3 truncate text-headline-md text-on-surface sm:text-notruncate">{title}</h3>
		<p
			class="mb-6 truncate text-on-surface-variant ml:line-clamp-6 ml:text-wrap lg:text-notruncate"
		>
			{description}
		</p>
		<div class="mt-auto flex flex-wrap gap-2 text-xs">
			{#each techUsed as tech, index (index)}
				<Chip>
					<span>{tech}</span>
				</Chip>
			{/each}
		</div>
	</div>
	<ImageContainer imageAssets={image.imageAssets} imageAlt={image.imageAlt} />
</article>
