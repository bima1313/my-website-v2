<!--
  @component
  ## Icon Component:
   Gateway / Wrapper Main Component for rendering icons dynamically.
   This component acts as the single 'router' mapping prop `name` to static icon Component 
   (like PersonIcon, ArrowForwardIcon, etc) through `iconMap`.    
  ###  @notes **How to add a new icon:**
    1. Create a new static icon component in this folder (e.g., `NewIcon.svelte`).
	2. Register the component inside `icon-map.ts`.
-->

<script lang="ts">
	import type { ClassValue } from 'svelte/elements';
	import { iconMap, type IconType } from './icon-map';

	let {
		name,
		size = 24,
		className
	}: { name: IconType; size?: number; className?: ClassValue } = $props();

	let SelectedIcon = $derived(iconMap[name] || iconMap.web);
</script>

<SelectedIcon {size} className={['shrink-0', className]} />
