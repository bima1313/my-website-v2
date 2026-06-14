import LanguageIcon from './LanguageIcon.svelte';
import ArrowForwardIcon from './ArrowForwardIcon.svelte';
import ChevronRight from './ChevronRight.svelte';
import CodeIcon from './CodeIcon.svelte';
import DnsIcon from './DnsIcon.svelte';
import EastIcon from './EastIcon.svelte';
import HomeIcon from './HomeIcon.svelte';
import SmartphoneIcon from './SmartphoneIcon.svelte';
import PersonIcon from './PersonIcon.svelte';
import SendIcon from './SendIcon.svelte';
import WebIcon from './WebIcon.svelte';
import type { Component } from 'svelte';
import TerminalIcon from './TerminalIcon.svelte';

export const iconMap = {
	arrowForward: ArrowForwardIcon,
	chevronRight: ChevronRight,
	code: CodeIcon,
	dns: DnsIcon,
	east: EastIcon,
	home: HomeIcon,
	language: LanguageIcon,
	smartphone: SmartphoneIcon,
	person: PersonIcon,
	send: SendIcon,
	terminal: TerminalIcon,
	web: WebIcon
} satisfies Record<string, Component>;

export type IconType = keyof typeof iconMap;
