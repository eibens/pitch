import { assertEquals } from "https://deno.land/std@0.90.0/testing/asserts.ts";
import {
  fromAccidental,
  fromLetter,
  fromOctave,
  fromPitch,
  fromString,
} from "./midi.ts";

Deno.test("fromLetter maps A -> 9", () => {
  assertEquals(fromLetter("A"), 9);
});

Deno.test("fromAccidental maps A -> 9", () => {
  assertEquals(fromAccidental("bb"), -2);
});

Deno.test("fromOctave 4 -> 60", () => {
  assertEquals(fromOctave(4), 60);
});

Deno.test("fromPitch maps A#4 -> 60", () => {
  const res = fromPitch({
    letter: "A",
    accidental: "#",
    octave: 4,
  });
  assertEquals(res, 70);
});

Deno.test("fromString maps A#4 -> 70", () => {
  assertEquals(fromString("A#4"), 70);
});
