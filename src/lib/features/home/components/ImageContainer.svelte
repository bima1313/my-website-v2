<script lang="ts">
	import type { Image } from '$lib/interfaces/shared';
	import { optimize } from '$lib/utils/image-optimize';

	let { image }: { image: Image } = $props();
</script>

<div
	class="relative order-1 col-span-3 h-[200px] w-full overflow-hidden ml:order-2 ml:h-full ml:w-[55%]"
>
	<img
		class="block h-full w-full object-cover opacity-80 transition-all duration-500 ease-out group-hover:scale-105 group-hover:opacity-100"
		src={image.asset}
		srcset={optimize(image.asset)}
		sizes="(min-width: 1024px) 33vw, 100vw"
		alt={image.alt}
		loading="lazy"
		decoding="async"
	/>
</div>
