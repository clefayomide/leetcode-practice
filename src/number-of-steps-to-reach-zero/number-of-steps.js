export const numberOfSteps = function (num) {
	let count = 0;
	while (num !== 0) {
		if (num % 2 === 0) {
			num /= 2;
		} else {
			num--;
		}
		count++;
	}
	return count;
};

// time complexity: O(logn)
// space complexity: O(1)
