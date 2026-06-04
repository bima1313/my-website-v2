export function toTextColor(text: string): string {
	const colorDataMap: Record<string, string> = {
		'Pale Sky': 'text-secondary',
		'Fat Gold': 'text-tertiary'
	};

	return colorDataMap[text] ?? 'text-green-600';
}
