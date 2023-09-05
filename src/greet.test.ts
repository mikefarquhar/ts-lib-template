import { describe, expect, test } from "vitest";
import { greet } from "./greet.js";

describe("greet", () => {
  test("it should return a greeting", () => {
    expect(greet("Sam")).toBe("Hello, Sam!");
  });
});
