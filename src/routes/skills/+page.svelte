<script lang="ts">
	import Card from '$lib/features/skills/components/Card.svelte';
	import Header from '$lib/features/skills/components/Header.svelte';
	import { skills } from '$lib/features/skills/constants/skills';
	import type { props } from '$lib/features/skills/interfaces/skill-props';
	const half = Math.ceil(skills.length / 2);
	const leftSkillsData: props[] = skills.slice(0, half);
	const rightSkillsData: props[] = skills.slice(half);
</script>

<main class="selection:bg-secondary selection:text-surface-lowest">
	<Header />
	<section class="mx-auto px-4 pb-20 md:px-16">
		<div class="grid grid-cols-1 gap-6 lg:grid-cols-12">
			<div class="space-y-6 lg:col-span-6">
				{#each leftSkillsData as data, index (index)}
					<Card title={data.title} icon={data.icon} technologies={data.technologies} />
				{/each}
			</div>
			<div class="space-y-6 lg:col-span-6">
				{#each rightSkillsData as data, index (index)}
					<Card title={data.title} icon={data.icon} technologies={data.technologies} />
				{/each}
			</div>
		</div>
	</section>
</main>
