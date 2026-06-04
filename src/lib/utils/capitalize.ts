export function capitalize(text: string) {
	const splitText = text.trim().split(' ');
	if (splitText.length >= 1) {
		const capitalize = splitText.map((data) => {
			const uppercase = data.at(0)!.toUpperCase();
			const lowercase = data.slice(1).toLowerCase();

			return uppercase + lowercase;
		});

		return capitalize.join(' ').toString();
	}
	const uppercase = text.at(0)!.toUpperCase();
	const lowercase = text.slice(1).toLowerCase();

	return uppercase + lowercase;
}
