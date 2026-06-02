export function capitalize(text: string) {
	const uppercase = text.at(0)!.toUpperCase();
	const lowercase = text.slice(1).toLowerCase();

	return uppercase + lowercase;
}
