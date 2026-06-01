<script lang="ts">
	import { resolve } from '$app/paths';
	import type { props } from './interfaces/button-props';

	let { children, title, path, className }: props = $props();
</script>

<a
	aria-label={`${title}-button`}
	class={[
		'items-center justify-center gap-1 rounded-[0.25rem] bg-primary text-on-primary shadow-[0_0_20px] shadow-primary/20 transition-colors duration-200 hover:bg-primary-fixed',
		className
	]}
	href={resolve(path)}
>
	{title}
	{@render children?.()}
</a>
