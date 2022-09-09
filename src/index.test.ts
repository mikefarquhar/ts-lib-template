import { greet } from "./index";

test("it should return a greeting", () => {
  expect(greet("Sam")).toBe("Hello, Sam!");
});
