import { expect, test } from "vitest";
import { sequentialIncrease } from "./increase";

test("increment by 5", () => {
	expect(sequentialIncrease(29)).toStrictEqual([5, 10, 15, 20, 25, 29]);
});
