<script lang="ts">
	import './layout.css';
	import type { Snippet } from 'svelte';
	import { activation } from '$lib/states/mobile-nav-activation.svelte';
	import { socialMedia } from '$lib/features/home/constants/social-media';	
	import icon from '$lib/assets/icon.ico';
	import MobileNavigationBar from '$lib/components/MobileNavigationBar.svelte';
	import MobileNavigationLayout from '$lib/components/MobileNavigationLayout.svelte';
	import NavigationBar from '$lib/components/NavigationBar.svelte';
	import ElevatedButton from '$lib/components/ElevatedButton.svelte';

	let { children }: { children: Snippet } = $props();
</script>

<svelte:head><link rel="icon" href={icon} /></svelte:head>
<header
	class="sticky top-0 z-50 flex h-20 w-full items-center bg-surface/60 font-bold
	 outline-1 outline-white/10 backdrop-blur-xl transition-all duration-300"
>
	<div class="header-container-mobile ml:header-container">
		<MobileNavigationBar />
		<div class="text-2xl font-bold tracking-tight text-primary">Bima Hamdhika Irfy</div>
		<NavigationBar />
		<ElevatedButton
			className="hidden cursor-pointer rounded-lg px-6 py-3 ml:inline-flex"
			title="Contact Me"
			path="/about#contact"
		/>
	</div>
</header>
{#if activation.isActive}
	<MobileNavigationLayout />
{/if}
{@render children()}
<footer class="w-full bg-surface-lowest py-12 transition-transform duration-300">
	<div class="mx-auto flex flex-col items-center justify-between gap-2 px-4 md:flex-row md:px-16">
		<div class="text-on-surface-variant">
			© 2026 Bima Developer Portfolio. Built with Flutter &amp; Web technologies.
		</div>
		<nav class="flex gap-6">
			{#each socialMedia as media, index (index)}
				<a
					rel="external"
					class="inline-block font-medium text-on-surface-variant transition-all hover:scale-105 hover:text-secondary-container"
					href={media.link}>{media.alt}</a
				>
			{/each}
		</nav>
	</div>
</footer>
