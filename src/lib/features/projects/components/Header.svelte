<script lang="ts">
	import Chip from '$lib/components/Chip.svelte';
	import { categories } from '$lib/features/projects/constants/chip-categories';
	import { activation } from '$lib/features/projects/states/chip-activate.svelte';
</script>

<header class="flex w-full flex-col items-start gap-6">
	<h1 class="reveal text-mobile text-on-surface md:text-display">Featured Projects</h1>
	<p class="reveal max-w-2xl text-on-surface-variant md:text-[18px]">
		A selection of my recent work across web and mobile platforms, showcasing technical precision
		and clean architecture.
	</p>
	<ul class="mt-6 flex flex-wrap gap-3">
		{#each categories as category, index (index)}
			<li>
				<button onclick={() => (activation.index = index)}>
					<Chip
						className={[
							'rounded-full border px-6 py-3 font-medium  transition-colors hover:border-white/10 cursor-pointer',
							activation.index == index
								? 'border-secondary bg-secondary-container/20 text-secondary'
								: 'bg-white/5 border-transparent'
						]}
					>
						{category}
					</Chip>
				</button>
			</li>
		{/each}
	</ul>
</header>
