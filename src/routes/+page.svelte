<script lang="ts">
	import FeaturedProjectsSection from '$lib/features/home/components/FeaturedProjectsSection.svelte';
	import IntroductionSection from '$lib/features/home/components/IntroductionSection.svelte';
	import type { PageData } from './$types';
	let { data }: { data: PageData } = $props();
</script>

<main class="selection:bg-secondary selection:text-surface-lowest">
	<IntroductionSection />
	{#if data.errors == null}
		<FeaturedProjectsSection data={data.projects} />
	{/if}
</main>
