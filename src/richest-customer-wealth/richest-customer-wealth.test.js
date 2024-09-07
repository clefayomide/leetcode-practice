import { expect, test } from "vitest";
import { maximumWealth } from "./richest-customer-wealth";

test("get richest customer wealth sum", () => {
	const input = [
		[1, 5],
		[7, 3],
		[3, 5],
	];
	const output = 10;
	expect(maximumWealth(input)).toBe(output);
});
