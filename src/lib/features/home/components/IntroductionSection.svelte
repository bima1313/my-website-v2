<script lang="ts">
	import { items } from '$lib/features/home/constants/items';
	import Chip from '$lib/components/Chip.svelte';
	import ElevatedButton from '$lib/components/ElevatedButton.svelte';
	import OutlinedButton from '$lib/components/OutlinedButton.svelte';
</script>

<section
	class="relative mx-auto flex w-full flex-col items-center justify-center overflow-hidden px-4 py-[120px] text-center md:px-16"
>
	<div
		class="pointer-events-none absolute top-1/2 left-1/2 -z-10 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[120px]"
	></div>
	<ul class="mb-12 flex justify-center gap-3">
		{#each items as item (item.id)}
			<li>
				<Chip>
					<div class="flex items-center gap-1">
						<span class={['material-icons', item.values.iconColor]}>{item.values.iconName}</span>
						<span>{item.values.description}</span>
					</div>
				</Chip>
			</li>
		{/each}
	</ul>
	<h1 class="mb-6 text-mobile tracking-tight text-balance text-on-surface md:text-display">
		Building High-Performance Digital Experiences.
	</h1>
	<p class="mb-20 max-w-[650px] text-lg text-balance text-on-surface-variant">
		Specializing in fluid, 60fps Android applications with Flutter while building functional web
		solutions. Bridging the gap between creative frontend vision and essential backend logic.
	</p>
	<div class="flex flex-col gap-6 sm:flex-row">
		<ElevatedButton
			className="flex px-[80px] py-3 text-lg font-semibold"
			title="Contact Me"
			path="/about"
		>
			<span class="material-icons md-20">arrow_forward</span>
		</ElevatedButton>
		<OutlinedButton
			className="flex px-[80px] py-3 text-lg font-semibold"
			title="View Work"
			path="/projects"
		/>
	</div>
</section>
