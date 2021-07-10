import { assertEquals } from "https://deno.land/std@0.90.0/testing/asserts.ts";
import { between, fromRatio, toRatio } from "./centitone.ts";

// fromRatio
Deno.test("2 --> 600 centitones", () => {
  assertEquals(fromRatio(2), 600);
});

// toRatio
Deno.test("600 centitones --> 2", () => {
  assertEquals(toRatio(600), 2);
});

// between
Deno.test("220 hz to 440 hz --> 600 centitones", () => {
  assertEquals(between(220, 440), 600);
});
