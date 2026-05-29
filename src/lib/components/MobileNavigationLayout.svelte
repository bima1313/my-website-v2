<script lang="ts">
	import { page } from '$app/state';
	import { resolve } from '$app/paths';
	import { slide } from 'svelte/transition';
	import { navItems } from '$lib/home/constants/nav-items';
	import { activation } from '$lib/states/mobile-nav-activation.svelte';
	import Chip from './Chip.svelte';
</script>

<div transition:slide={{ axis: 'x' }} class="fixed z-20 flex min-h-screen w-full backdrop-blur-xs">
	<div class=" flex w-[62.5%] bg-surface-high">
		<ul class="w-full px-8 py-12">
			{#each navItems as item, index (index)}
				<a
					aria-current={page.url.pathname === item.navPath}
					onclick={() => (activation.isActive = !activation.isActive)}
					href={resolve(item.navPath)}
				>
					<Chip
						className={[
							'w-full py-3 cursor-pointer text-2xl font-extrabold transition-colors duration-200 ease-in-out hover:text-primary rounded-lg flex items-center gap-4 mb-2',
							page.url.pathname === item.navPath ? 'w-full bg-on-primary text-primary' : ''
						]}
					>
						<span class="material-icons md:20">{item.iconName}</span>
						<span>{item.navName}</span>
					</Chip>
				</a>
			{/each}
		</ul>
	</div>
	<!--Blurring container in right side-->
	<div class="w-[37.5%] bg-surface-low/10"></div>
</div>
