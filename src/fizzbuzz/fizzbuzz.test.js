import { expect, test } from "vitest";
import { fizzBuzz } from "./fizzbuzz";

test("fizzbuzz", () => {
	const input = 3;
	const output = ["1", "2", "Fizz"];
	expect(fizzBuzz(input)).toStrictEqual(output);
});
