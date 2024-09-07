// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
// Return the running sum of nums.

export const runningSum = function (nums) {
	const indexValue = nums[0];
	const runningSum = [indexValue];
	nums.splice(1).forEach((num) => {
		const runningSumLastIndex = runningSum.length - 1;
		const lastSum = runningSum[runningSumLastIndex];
		const newSum = lastSum + num;
		runningSum.push(newSum);
	});
	return runningSum;
};

// time complexity: O(n)
// space complexity: O(n)

console.log(runningSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));


