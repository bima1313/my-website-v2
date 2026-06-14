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
	><path d="m607-175-74-74 178-178H49v-106h662L533-711l74-74 305 305-305 305Z" /></svg
>
