import { expect, test } from "vitest";
import { removeDuplicatesNested } from "./index.js";

test("should remove duplicates in each array and maintain their position", () => {
	expect(
		removeDuplicatesNested([1, [2, 2, 3], 4, [5, [6, 6, 7], 8], 9, 10, [11, 12, 11]])
	).toStrictEqual([1, [2, 3], 4, [5, [6, 7], 8], 9, 10, [11, 12]]);
});
