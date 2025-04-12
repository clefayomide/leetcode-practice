// Write a function that removes duplicate values from a nested array while preserving its structure


export function removeDuplicatesNested(arr) {
	const seen = new Set();

	function processArray(array) {
		const result = [];
		for (const item of array) {
			if (Array.isArray(item)) {
				result.push(processArray(item));
			} else if (!seen.has(item)) {
				seen.add(item);
				result.push(item);
			}
		}
		return result;
	}

	return processArray(arr);
}

console.log(
	removeDuplicatesNested([
		1,
		[2, 2, 3],
		4,
		[5, [6, 6, 7], 8],
		9,
		10,
		[11, 12, 11],
	])
);
