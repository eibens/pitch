import { assertEquals } from "https://deno.land/std@0.90.0/testing/asserts.ts";
import { parse, stringify } from "./spn.ts";

Deno.test("parse correctly parses pitch", () => {
  assertEquals(parse("C#4"), {
    letter: "C",
    accidental: "#",
    octave: 4,
  });
});

Deno.test("parse parses SPN without accidental", () => {
  assertEquals(parse("C4"), {
    letter: "C",
    accidental: "",
    octave: 4,
  });
});

Deno.test("stringify correctly stringifies pitch", () => {
  assertEquals(
    stringify({
      letter: "C",
      accidental: "#",
      octave: 4,
    }),
    "C#4",
  );
});
