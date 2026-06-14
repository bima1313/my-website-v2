import type { IconType } from "$lib/components/icons/icon-map";

interface Values {
	iconName: IconType;
	iconColor: string;
	description: string;
}
export interface Item {
	id: number;
	values: Values;
}
