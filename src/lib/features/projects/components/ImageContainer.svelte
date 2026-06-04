<script lang="ts">
	import type { Images } from '$lib/interfaces/shared';

	let { images, tag }: { images: Images; tag: string } = $props();
</script>

<div class="relative h-48 w-full overflow-hidden bg-surface-high">
	<picture
		class="absolute inset-0 opacity-85 transition-all duration-500 ease-out group-hover:scale-105 group-hover:opacity-100"
	>
		<source srcset={images.assets.avifLink} type="image/avif" />
		<source srcset={images.assets.webpLink} type="image/webp" />
		<img
			src={images.assets.defaultLink}
			alt={images.alt}
			class="w-full h-full object-cover"
			loading="eager"
			decoding="async"
		/>
	</picture>
	<span
		class="absolute top-3 left-3 rounded border border-white/10 bg-black/50 px-3 py-1 font-medium tracking-widest text-secondary backdrop-blur-sm"
		>{tag}</span
	>
</div>
