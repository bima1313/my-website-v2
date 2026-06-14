import type { Pathname } from "$app/types";
import type { IconType } from "$lib/components/icons/icon-map";

export interface props{
    navPath: Pathname;
    iconName: IconType;
    navName: string;
}