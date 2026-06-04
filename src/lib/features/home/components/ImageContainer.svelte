<script lang="ts">
	import type { ImageAssets } from '$lib/interfaces/shared';

	let { imageAssets, imageAlt }: { imageAssets: ImageAssets; imageAlt: string } = $props();
</script>

<div
	class="relative order-1 col-span-3 h-[200px] w-full overflow-hidden ml:order-2 ml:h-full ml:w-[55%]"
>
	<picture
		class="block h-full w-full opacity-80 transition-all duration-500 ease-out group-hover:scale-105 group-hover:opacity-100"
	>
		<source srcset={imageAssets.avifLink} type="image/avif" />
		<source srcset={imageAssets.webpLink} type="image/webp" />
		<img
			src={imageAssets.defaultLink}
			alt={imageAlt}
			class="h-full w-full object-cover"
			loading="lazy"
			decoding="async"
		/>
	</picture>
</div>
