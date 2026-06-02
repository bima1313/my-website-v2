import type { Snippet } from "svelte";
import type { ClassValue } from "svelte/elements";

export interface props {
	children?: Snippet;
	title: string;
	path: string;
	className?: ClassValue;
}
