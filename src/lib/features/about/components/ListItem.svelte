<script lang="ts">
	import Icon from '$lib/components/icons/Icon.svelte';

	let { data }: { data: string } = $props();
</script>

<div class="flex gap-2">
	<Icon name="chevronRight" size={28} className="fill-primary" />
	<span class="text-on-surface-variant">{data}</span>
</div>
