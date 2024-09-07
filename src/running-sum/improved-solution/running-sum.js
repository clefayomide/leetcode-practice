export const runningSum = function (nums) {
	for (let i = 1; i < nums.length; i++) {
		nums[i] += nums[i - 1];
	}
	return nums;
};

// time complexity: O(n)
// space complexity: O(1)

// this solution uses lesser memory compared to my first solution but both maintains same time complexity

console.log(runningSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
