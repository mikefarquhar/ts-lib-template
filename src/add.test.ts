import { describe, expect, test } from "vitest";
import { add } from "./add.js";

describe("add", () => {
  test("it should add 2 numbers", () => {
    expect(add(3, 4)).toBe(7);
  });
});
