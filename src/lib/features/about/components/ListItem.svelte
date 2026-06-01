<script lang="ts">
	let { data }: { data: string } = $props();
</script>

<div class="flex gap-2">
	<span class="material-icons md-28 text-primary">chevron_right</span>
	<span class="text-on-surface-variant">{data}</span>
</div>
