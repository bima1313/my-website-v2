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
	><path
		d="M320-240 80-480l240-240 57 57-184 184 183 183-56 56Zm320 0-57-57 184-184-183-183 56-56 240 240-240 240Z"
	/></svg
>
