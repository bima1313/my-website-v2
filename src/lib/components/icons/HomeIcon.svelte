<script lang="ts">
	import type { ClassValue } from 'svelte/elements';

	let { size, className }: { size?: number; className?: ClassValue } = $props();
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	height={`${size}px`}
	viewBox="0 -960 960 960"
	width={`${size}px`}
	class={className}><path d="M160-120v-480l320-240 320 240v480H560v-280H400v280H160Z" /></svg
>
