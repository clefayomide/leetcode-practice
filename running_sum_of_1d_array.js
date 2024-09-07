// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
// Return the running sum of nums.

const runningSum = function (nums) {
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

// time complexity: o(n)
// formula used to arrive at the time complexity: c1 + c1 + cn + c1 + c1 +c1 + c1
