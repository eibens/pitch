import { assertEquals } from "https://deno.land/std@0.90.0/testing/asserts.ts";
import {
  fromAccidental,
  fromLetter,
  fromOctave,
  fromPitch,
  toAccidental,
  toLetter,
  toOctave,
  toPitch,
} from "./midi.ts";

Deno.test("fromLetter maps A -> 9", () => {
  assertEquals(fromLetter("A"), 9);
});

Deno.test("toLetter maps 9 b -> A", () => {
  assertEquals(toLetter(9, "b"), "A");
});

Deno.test("toLetter maps 10 # -> A#", () => {
  assertEquals(toLetter(10, "#"), "A");
});

Deno.test("toLetter maps 10 b -> A", () => {
  assertEquals(toLetter(10, "b"), "B");
});

Deno.test("fromAccidental maps bb -> -2", () => {
  assertEquals(fromAccidental("bb"), -2);
});

Deno.test("toAccidental maps 60 b -> ''", () => {
  assertEquals(toAccidental(60, "b"), "");
});

Deno.test("toAccidental maps 70 # -> #", () => {
  assertEquals(toAccidental(70, "#"), "#");
});

Deno.test("toAccidental maps 70 b -> b", () => {
  assertEquals(toAccidental(70, "b"), "b");
});

Deno.test("fromOctave 4 -> 60", () => {
  assertEquals(fromOctave(4), 60);
});

Deno.test("toOctave 60 -> 4", () => {
  assertEquals(toOctave(60), 4);
});

Deno.test("fromPitch maps A#4 -> 70", () => {
  const res = fromPitch({
    letter: "A",
    accidental: "#",
    octave: 4,
  });
  assertEquals(res, 70);
});

Deno.test("fromPitch maps 70 -> A#4", () => {
  const res = toPitch(70, "#");
  assertEquals(res, {
    letter: "A",
    accidental: "#",
    octave: 4,
  });
});
