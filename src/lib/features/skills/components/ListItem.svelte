<script lang="ts">
	let { name, skillLevel }: { name: string; skillLevel?: string } = $props();
</script>

<div
	class="flex items-center justify-between rounded-lg border border-white/5
     bg-surface-high/50 p-3 transition-colors hover:bg-surface-high tracking-wider"
>
	<span class="text-sm font-medium text-on-surface">{name}</span>
	{#if skillLevel != null}
		<span class="rounded bg-primary/20 px-2 py-0.5 text-[10px] font-bold text-primary uppercase"
			>{skillLevel}</span
		>
	{/if}
</div>
