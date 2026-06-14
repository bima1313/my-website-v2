<script lang="ts">
	import type { ClassValue } from 'svelte/elements';

	let { size, className }: { size?: number; className?: ClassValue } = $props();
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	height={`${size}px`}
	viewBox="0 -960 960 960"
	width={`${size}px`}
	class={className}
	><path d="M627-426H128v-106h499L403-756l76-76 353 353-351 351-76-76 222-222Z" /></svg
>
