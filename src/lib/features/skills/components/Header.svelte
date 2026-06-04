<script lang="ts">
	import Chip from '$lib/components/Chip.svelte';
</script>

<header class="mx-auto px-4 pt-20 pb-12 md:px-16 md:py-20">
	<div class="max-w-3xl">
		<Chip
			className="inline-flex items-center gap-2 py-1 mb-6 border border-white/10 bg-white/5 select-text "
		>
			<div class="pulse-animation h-2 w-2 rounded-full bg-secondary"></div>
			<span class="text-sm tracking-widest text-secondary">Capabilities</span>
		</Chip>
		<h1 class="mb-6 text-mobile text-on-surface md:text-display">
			Technical <span
				class="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
				>Toolkit</span
			>.
		</h1>
		<p class="text-lg leading-relaxed text-on-surface-variant">
			A comprehensive breakdown of my development stack, blending pixel-perfect frontend execution
			with clean, functional backend integrations. Cultivated through dedicated development and
			continuous learning.
		</p>
	</div>
</header>
