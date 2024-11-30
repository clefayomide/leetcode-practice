// Write a function that generates a sequence starting from 5, where each subsequent number in the sequence is obtained by adding 5 to the previous number. The sequence should stop at
// 𝑛
// n, ensuring
// 𝑛
// n is included if adding 5 to the current number would exceed
// 𝑛
// n.

// Constraints:

// 𝑛
// n is a positive integer greater than or equal to 5.
// The sequence always starts at 5.
// Input:

// A single integer
// 𝑛
// n.
// Output:

// An array (or list) containing the generated sequence.
// Examples:

// Input:
// 𝑛
// =
// 22
// n=22
// Output:
// [
// 5
// ,
// 10
// ,
// 15
// ,
// 20
// ,
// 22
// ]
// [5,10,15,20,22]

// Input:
// 𝑛
// =
// 18
// n=18
// Output:
// [
// 5
// ,
// 10
// ,
// 15
// ,
// 18
// ]
// [5,10,15,18]

// Input:
// 𝑛
// =
// 5
// n=5
// Output:
// [
// 5
// ]
// [5]

export const sequentialIncrease = (n) => {
	if (n === 5) {
		return [n];
	}
	const result = [5];
	while (result[result.length - 1] + 5 < n) {
		result.push(result[result.length - 1] + 5);
	}
	result.push(n);
	return result;
};

// time complexity: O(n)
// space complexity: O(n)

console.log(sequentialIncrease(29));
