// given a string s which represents an expression, evaluate this expression and return it's value.
//  the integer division should truncate towards zero
//  you may assume that the given expression is always valid. All intermediate results will be in the range of [-231, 231 -1]

export function basicCalculator(s) {
	s = s.replaceAll(" ", "");
	let stack = [];
	let num = 0;
	let sign = "+";
	for (let i = 0; i < s.length; i++) {
		let ch = s[i];
		if (!isNaN(ch)) {
			num = num * 10 + Number(ch);
		}
		if (isNaN(ch) || i === s.length - 1) {
			if (sign === "+") stack.push(num);
			else if (sign === "-") stack.push(-num);
			else if (sign === "*") stack.push(stack.pop() * num);
			else if (sign === "/") stack.push(parseInt(stack.pop() / num));
			sign = ch;
			num = 0;
		}
	}
	return stack.reduce((a, b) => a + b, 0);
}
console.log(basicCalculator(" 3+5 / 2 "));
console.log(basicCalculator("3/2"));
console.log(basicCalculator("3+2*2"));
console.log(basicCalculator("14-3/2"));
