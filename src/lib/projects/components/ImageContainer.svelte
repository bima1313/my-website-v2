<script lang="ts">
	let { imageAssets, imageAlt, tag }: { imageAssets: string; imageAlt: string; tag: string } =
		$props();
</script>

<div class="relative h-48 w-full overflow-hidden bg-surface-high">
	<img
		src={imageAssets}
		alt={imageAlt}
		class="absolute inset-0 object-cover opacity-85 transition-all duration-500 ease-out group-hover:scale-105 group-hover:opacity-100"
	/>
	<span
		class="absolute top-3 left-3 rounded border border-white/10 bg-black/50 px-3 py-1 text-secondary backdrop-blur-sm tracking-widest font-medium"
		>{tag}</span
	>
</div>
