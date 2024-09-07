import { test, expect } from "vitest";
import { runningSum } from "./running-sum";

test("get running sum", () => {
	const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	const output = [1, 3, 6, 10, 15, 21, 28, 36, 45, 55];
	expect(runningSum(input)).toStrictEqual(output);
});
