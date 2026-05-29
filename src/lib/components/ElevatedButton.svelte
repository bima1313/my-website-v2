<script lang="ts">
	import { resolve } from '$app/paths';
	import type { props } from './interfaces/button-props';

	let { children, title, path }: props = $props();
</script>

<a
	aria-label={`${title}-button`}
	class="flex items-center justify-center gap-1 rounded-[0.25rem] bg-primary px-[80px] py-3 text-lg font-semibold text-on-primary shadow-[0_0_20px] shadow-primary/20 transition-colors duration-200 hover:bg-primary-fixed"
	href={resolve(path)}
>
	{title}
	{@render children?.()}
</a>
