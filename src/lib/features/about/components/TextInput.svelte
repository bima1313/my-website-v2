<script lang="ts">
	import { capitalize } from '$lib/features/about/utils/capitalize';

	let {
		title,
		placeholder,
		type = 'text'
	}: { title: string; placeholder: string; type?: string } = $props();
</script>

<div class="flex flex-col gap-1">
	<label class="text-sm font-medium text-on-surface-variant" for={title}>{capitalize(title)}</label>
	<input
		class="rounded-[0.25rem] border border-midnight-sky bg-surface-container px-6 py-3 text-on-surface transition-colors outline-none focus:border-2 focus:border-secondary"
		{type}
		name={title}
		id={title}
		{placeholder}
	/>
</div>
