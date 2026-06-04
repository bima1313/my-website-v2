<script lang="ts">
	import { coreFocusData } from '$lib/features/about/constants/core-focus-data';
	import ListItem from '$lib/features/about/components/ListItem.svelte';
</script>

<div
	class="flex w-full flex-col items-center gap-6 text-center selection:bg-secondary selection:text-surface-lowest md:w-1/2 md:items-start md:text-left"
>
	<div>
		<h2 class="text-base font-medium tracking-wider text-secondary-container uppercase">
			About Me
		</h2>
		<h1 class="text-mobile text-on-surface md:text-display">
			Flutter Developer & <span
				class="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
				>Full-Stack Web</span
			>
		</h1>
		<p class="max-w-xl text-justify text-lg text-on-surface-variant">
			I build high-performance digital solutions with a strong focus on clean architecture. As a
			Bachelor of Computer Science (GPA 3.74) and a 65th-place finisher on the IYCL 2025 Top 100
			Global Leaderboard, logic and structural efficiency are at the core of everything I develop.
		</p>
	</div>
	<div>
		<h2 class="mb-4 text-base font-medium tracking-wider text-secondary-container uppercase">
			Core Focus
		</h2>
		<ul class="flex flex-col text-justify text-on-surface-variant">
			{#each coreFocusData as coreFocus, index (index)}
				<ListItem data={coreFocus} />
			{/each}
		</ul>
	</div>
	<p class="text-justify text-lg text-on-surface-variant">
		I love fast-paced collaborations, adapt quickly to new development workflows, and constantly
		refine my technical toolkit (like implementing Clean Architecture on my current expense tracker
		project) to deliver elite digital experiences.
	</p>
</div>
