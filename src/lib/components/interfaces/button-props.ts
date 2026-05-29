import type { Pathname } from "$app/types";
import type { Snippet } from "svelte";

export interface props {
	children?: Snippet;
	title: string;
	path: Pathname;
}
