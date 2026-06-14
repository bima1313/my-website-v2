<script lang="ts">
	import type { ClassValue } from 'svelte/elements';

	let { size, className }: { size?: number; className?: ClassValue } = $props();
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	height={`${size}px`}
	viewBox="0 -960 960 960"
	width={`${size}px`}
	class={className}><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" /></svg
>
