<script lang="ts">
	import { activation } from '$lib/states/mobile-nav-activation.svelte';
</script>

<nav class="mt-2 cursor-pointer text-on-surface ml:hidden" aria-label="hamburger-button">
	<button
		class="hamburger-menu-btn"
		onclick={() => (activation.isActive = !activation.isActive)}
		aria-expanded={activation.isActive}
		aria-label="hamburger-menu-button"
	>
		<span class="line"></span>
		<span class="line"></span>
		<span class="line"></span>
	</button>
</nav>
