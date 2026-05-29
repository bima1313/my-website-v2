<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { ClassValue } from 'svelte/elements';

	let { children, className }: { children: Snippet; className?: ClassValue } = $props();
</script>

<div
	class={[
		'rounded-full px-6 font-medium tracking-wider text-on-surface-variant select-none',
		className != null ? className : 'border border-white/10 bg-white/5 py-1'
	]}
>
	{@render children()}
</div>
