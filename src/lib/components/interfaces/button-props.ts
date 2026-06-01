import type { Pathname } from "$app/types";
import type { Snippet } from "svelte";
import type { ClassValue } from "svelte/elements";

export interface props {
	children?: Snippet;
	title: string;
	path: Pathname;
	className?: ClassValue;
}
