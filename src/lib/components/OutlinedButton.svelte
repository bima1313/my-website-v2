<script lang="ts">
	import { resolve } from '$app/paths';
	import type { props } from './interfaces/button-props';

	let { children, title, path }: props = $props();
</script>

<a
	aria-label={`${title}-button`}
	class="flex items-center justify-center gap-1 rounded-[0.25rem] border border-secondary bg-transparent px-[80px] py-3 text-lg font-semibold text-secondary transition-colors duration-200 hover:bg-secondary/10"
	href={resolve(path)}
>
	{title}
	{@render children?.()}
</a>
