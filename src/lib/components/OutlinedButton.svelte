<script lang="ts">
	import { resolve } from '$app/paths';
	import type { props } from '$lib/interfaces/button-props';

	let { children, title, path, className }: props = $props();
</script>

<a
	aria-label={`${title}-button`}
	class={[
		'items-center justify-center gap-1 rounded-[0.25rem] border border-secondary bg-transparent text-secondary transition-colors duration-200 hover:bg-secondary/10',
		className
	]}
	href={resolve(path)}
>
	{title}
	{@render children?.()}
</a>
