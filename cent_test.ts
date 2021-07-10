import { assertEquals } from "https://deno.land/std@0.90.0/testing/asserts.ts";
import { between, fromRatio, toRatio } from "./cent.ts";

// toRatio
Deno.test("1200 cents -> 2", () => {
  assertEquals(toRatio(1200), 2);
});
Deno.test("-1200 cents -> 1/2", () => {
  assertEquals(toRatio(-1200), 1 / 2);
});

// fromRatio
Deno.test("440 / 220 -> 1200 cents", () => {
  assertEquals(fromRatio(440 / 220), 1200);
});
Deno.test("220 / 440 -> -1200 cents", () => {
  assertEquals(fromRatio(220 / 440), -1200);
});

// between
Deno.test("220 hz to 440 hz -> 1200 cents", () => {
  assertEquals(between(220, 440), 1200);
});
Deno.test("440 hz to 220 hz -> -1200 cents", () => {
  assertEquals(between(440, 220), -1200);
});
