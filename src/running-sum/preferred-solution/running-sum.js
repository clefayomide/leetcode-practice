const runningSum = function (nums) {
	let runningSum = 0;
	return nums.map((num) => {
		return (runningSum += num);
	});
};

// time complexity: O(n)
// space complexity: O(1)

// this solution uses lesser memory compared to my solution but both maintains same time complexity

console.log(runningSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
