import { numberOfSteps } from "./number-of-steps";
import { expect, test } from "vitest";

test("get number of steps", () => {
	expect(numberOfSteps(14)).toBe(6);
});
