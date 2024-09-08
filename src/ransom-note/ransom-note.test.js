import { expect, test } from "vitest";
import { canConstruct } from "./ransom-note";

test("get randome note", () => {
	expect(canConstruct("a", "n")).toBe(false);
});
