<script lang="ts">
	import { resolve } from '$app/paths';
	import type { Pathname } from '$app/types';
	import type { props } from '$lib/interfaces/button-props';

	let { children, title, path, className }: props = $props();
</script>

{#if path.at(0) === '/'}
	<a
		aria-label={`${title}-button`}
		class={[
			'items-center justify-center gap-1 bg-primary text-on-primary shadow-[0_0_20px] shadow-primary/20 transition-colors duration-200 hover:bg-primary-fixed',
			className
		]}
		href={resolve(path as Pathname)}
	>
		{title}
		{@render children?.()}
	</a>
{:else}
	<a
		aria-label={`${title}-button`}
		class={[
			'items-center justify-center gap-1 rounded-[0.25rem] bg-primary text-on-primary shadow-[0_0_20px] shadow-primary/20 transition-colors duration-200 hover:bg-primary-fixed',
			className
		]}
		target="_blank"
		rel="external"
		href={path}
	>
		{title}
		{@render children?.()}
	</a>
{/if}
