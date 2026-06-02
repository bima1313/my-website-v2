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
			'items-center justify-center gap-1 rounded-[0.25rem] border border-secondary bg-transparent text-secondary transition-colors duration-200 hover:bg-secondary/10',
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
			'items-center justify-center gap-1 rounded-[0.25rem] border border-secondary bg-transparent text-secondary transition-colors duration-200 hover:bg-secondary/10',
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
