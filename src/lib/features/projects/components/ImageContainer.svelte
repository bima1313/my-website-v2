<script lang="ts">
	import type { Image } from '$lib/interfaces/shared';
	import { optimize } from '$lib/utils/image-optimize';

	let { image, tag }: { image: Image; tag: string } = $props();
</script>

<div class="relative h-48 w-full overflow-hidden bg-surface-high">
	<img
		class="absolute inset-0 h-full w-full object-cover opacity-85 transition-all duration-500 ease-out group-hover:scale-105 group-hover:opacity-100"
		src={image.asset}
		srcset={optimize(image.asset)}
		sizes="(min-width: 1024px) 33vw, 100vw"
		alt={image.alt}
		loading="eager"
		decoding="async"
	/>
	<span
		class="absolute top-3 left-3 rounded border border-white/10 bg-black/50 px-3 py-1 font-medium tracking-widest text-secondary backdrop-blur-sm"
		>{tag}</span
	>
</div>
