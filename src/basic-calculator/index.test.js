import { expect, test } from "vitest";
import { basicCalculator } from "./index.js";

test("should perform basic calculation using bodmas formula", () => {
	expect(basicCalculator("14-3/2")).toStrictEqual(13);
});
