export const maximumWealth = function (accounts) {
	return Math.max(
		...accounts.map((account) => {
			return account.reduce((a, b) => a + b);
		})
	);
};

// time complexity: O(m * n)
// space complexity: O(m)


console.log(
	maximumWealth([
		[1, 5],
		[7, 3],
		[3, 5],
	])
);
