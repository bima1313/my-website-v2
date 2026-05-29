<script lang="ts">
	import { activation } from '$lib/states/mobile-nav-activation.svelte';
</script>

<nav class="mt-2 cursor-pointer text-on-surface ml:hidden" aria-label="hamburger-button">
	<button
		onclick={() => (activation.isActive = !activation.isActive)}
		aria-expanded={activation.isActive}
	>
		<span class="material-icons md-28">{activation.isActive ? 'close' : 'menu'}</span>
	</button>
</nav>
