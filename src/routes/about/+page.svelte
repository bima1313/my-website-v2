<script lang="ts">
	import AboutSection from '$lib/features/about/components/AboutSection.svelte';
	import ContactSection from '$lib/features/about/components/ContactSection.svelte';
	import type { ActionData } from './$types';

	let { form }: { form: ActionData } = $props();
</script>

<main class="flex flex-grow flex-col">
	<AboutSection />
	<ContactSection {form} />
</main>
