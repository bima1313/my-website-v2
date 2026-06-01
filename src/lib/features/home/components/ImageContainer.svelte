<script lang="ts">
	let { imageAssets, imageAlt }: { imageAssets: string; imageAlt: string } = $props();
</script>

<div
	class="relative order-1 col-span-3 flex h-[200px] w-full overflow-hidden ml:order-2 ml:h-full ml:w-[55%]"
>
	<img
		src={imageAssets}
		alt={imageAlt}
		class="h-full w-full object-cover opacity-80 transition-all duration-500 ease-out group-hover:scale-105 group-hover:opacity-100"
	/>
</div>
